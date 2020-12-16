<template>
    <div>
        <div class="func-list">
            <div class="left search-group">
                <el-input placeholder="请输入公司名称" v-model="params.companyName" class="input"></el-input>
                <el-button slot="append" @click="handleSearch" icon="el-icon-search" class="button">搜索</el-button>
            </div>
            <div class="right">
                <el-button type="primary" icon="el-icon-folder-add" @click="handleAdd"
                    v-if="role === 'Administrator' || role === 'Supervisor'">增加</el-button>
                <el-button type="primary" icon="el-icon-download" @click="handleDownload">导出</el-button>
            </div>
        </div>
        <div>
            <el-table :data="tableData" border  v-loading="loading">
                <el-table-column type="index" label="序号" width="80" />
                <el-table-column prop="companyName" label="公司名称" />
                <el-table-column prop="manager" label="代表人" />
                <el-table-column prop="createDate" label="创建时间" width="160">
                    <template slot-scope="scope">
                        {{formatDate(scope.row.createDate)}}
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="120"
                    v-if="role === 'Administrator' || role === 'Supervisor'">
                    <template slot-scope="scope">
                        <el-button @click="handleEdit(scope.row)" type="text" size="small">
                            编辑
                        </el-button>
                        <el-button @click="handleDelete(scope.row)" type="text" size="small"
                            v-if="role === 'Administrator'">
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange" 
                @current-change="handleCurrentChange"
                :current-page="params.pageNo"
                :page-size="params.pageSize"    
                class="pagination"
                background
                layout="total, prev, pager, next, jumper"
                :total="totalCount"
                >
            </el-pagination>
            <!-- 公司名称应该是下拉列表 -->
            <el-dialog :title="editDialog.title" :visible.sync="editDialog.visible" width="40%"
                :before-close="closeEditDialog">
                <el-form :model="form" ref="editForm" :rules="rules">
                    <el-form-item label="公司名称" label-width="110px" prop="companyName">
                        <el-input v-model="form.companyName" :disabled="editDialog.type == 'edit'"></el-input>
                    </el-form-item>
                     <el-form-item label="代表人" label-width="110px" prop="manager">
                        <el-input v-model="form.manager"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer">
                    <el-button type="primary" @click="submitEdit('editForm')">确 认</el-button>
                </div>
            </el-dialog>
            <el-dialog
                title="删除"
                :visible.sync="deleteDialog.visible"
                width="30%">
                <span>确认删除{{deleteDialog.companyName}}吗？</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="deleteDialog.visible = false">取 消</el-button>
                    <el-button type="primary" @click="submitDelete(deleteDialog.companyName)">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import {http, downloadFile} from '@/common/http';
import apis from '@/common/api';

export default {
    name: 'CompanyInfo',
    components: {
    },
    props: ['role'],
    data() {
        return {
            params: {
                pageNo: 1,
                pageSize: 20,
                companyName: ''
            },
            loading: false,
            addVisible: false,
            tableData: [],
            totalCount: 0,
            editDialog: {
                title: '新增公司信息',
                visible: false,
                type: ''
            },
            deleteDialog: {
                visible: false
            },
            form: {
                companyName: '',
                manager: ''
            },
            rules: {
                companyName: [
                    {required: true, message: '请输入公司名称', trigger: 'submit'}
                ],
                manager: [
                    {required: true, message: '请输入代表人名称', trigger: 'submit'}
                ]
            }
        };
    },
    methods: {
        formatDate(date) {
            return date ? this.$moment(date).format('YYYY-MM-DD HH:mm:ss') : '--';
        },
        // 获取公司列表
        getInfoList(datas) {
            this.loading = true;
            http({
                method: 'post',
                url: apis.companyInfo.api,
                data: datas
            })
            .then(res => {
                this.loading = false;
                this.tableData = res.data.result;
                this.totalCount = res.data.totalCount;
            }).catch(error => {
                this.loading = false;
                console.log(error);
            });
        },
        // 点击搜索触发
        handleSearch() {
            this.getInfoList(this.params);
        },
        // 导出列表文件
        handleDownload() {
            downloadFile(
                apis.companyInfo.download,
                this.params,
                '公司信息列表');
        },
        // 点击新增按钮
        handleAdd() {
            this.editDialog = {
                title: '新增公司信息',
                visible: true,
                type: 'add',
                method: 'put'
            };
        },
        // 点击编辑按钮
        handleEdit(item) {
            this.form = {
                ...this.form,
                ...item
            };
            this.editDialog = {
                title: '编辑公司信息',
                visible: true,
                type: 'edit',
                method: 'patch'
            };
        },
        closeEditDialog() {
            this.form = {};
            this.editDialog.visible = false;
            this.$refs['editForm'].clearValidate();
        },
        // 新增/编辑车辆信息，提交
        submitEdit(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    http({
                        method: this.editDialog.method,
                        url: apis.companyInfo.api,
                        data: this.form
                    })
                    .then(res => {
                        this.form = {};
                        this.editDialog.visible = false;
                        this.handleSearch();
                    }).catch(error => {
                        this.$message({
                            showClose: true,
                            message: error,
                            type: 'error'
                        });
                        console.log(error);
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        // 删除
        handleDelete(item) {
            this.deleteDialog = {
                visible: true,
                ...item
            };
        },
        // 确认删除
        submitDelete(companyName) {
            http({
                method: 'delete',
                url: `${apis.companyInfo.api}/${companyName}`
            })
            .then(res => {
                this.deleteDialog = {};
                this.$message({
                    showClose: true,
                    message: '删除成功',
                    type: 'success'
                });
                this.handleSearch();
            }).catch(error => {
                console.log(error);
            });
        },
        handleSizeChange(val) {
            this.params.pageSize = val;
            this.handleSearch();
        },
        handleCurrentChange(val) {
            this.params.pageNo = val;
            this.handleSearch();
        }
    },
    mounted() {
        this.$emit('showHeader', true);
        this.handleSearch();
    }
};
</script>

<style lang="scss" scoped>
.search-group {
  width: 600px;
    .input {
        width: 150px;
        float: left !important;
        margin-right: 5px;
    }
    .button {
        color: #fff;
        background-color: #409eff;
    }
}
.func-list {
  margin-bottom: 20px;
  .left {
    display: inline-block;
  }
  .right {
    float: right;
  }
}
.pagination {
  margin-top: 20px;
  text-align: right;
}
.upload-demo {
  display: inline-block;
  color: white;
}
</style>
