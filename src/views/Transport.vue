<template>
    <div>
        <div class="func-list">
            <div class="left search-group">
                <el-input placeholder="请输入车辆编号" v-model="params.carNum" class="input"></el-input>
                <el-input placeholder="请输入车队编号" v-model="params.fleetNum" class="input"></el-input>
                <el-input placeholder="请输入公司名称" v-model="params.companyName" class="input"></el-input>
                <el-input placeholder="请输入用户账号" v-model="params.userNum" class="input"></el-input>
                <el-input placeholder="请输入盐田编号" v-model="params.salinaNum" class="input"></el-input>
                <el-date-picker
                    v-model="searchDate"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
                <el-button slot="append" @click="handleSearch" icon="el-icon-search" class="button">搜索</el-button>
            </div>
            <div class="right">
                <el-button type="primary" icon="el-icon-folder-add" @click="handleAdd"
                    v-if="role === 'Administrator' || role === 'Supervisor'">增加</el-button>
                <el-button type="primary" icon="el-icon-download" @click="handleDownload">导出</el-button>
                <div>
                    <span>体积总数：</span>{{sum || 0}} m³
                </div>
            </div>
        </div>
        <div>
            <el-table :data="tableData" border v-loading="loading">
                <el-table-column type="index" label="序号" width="80" />
                <el-table-column prop="carNum" label="车辆编号" />
                <el-table-column prop="fleetNum" label="车辆所属车队编号" />
                <el-table-column prop="companyName" label="公司名称" />
                <el-table-column prop="volume" label="拉矿体积m³" />
                <el-table-column prop="ratedVolume" label="额定体积m³" />
                <el-table-column prop="enterTime" label="入场时间" width="160">
                    <template slot-scope="scope">
                        {{formatDate(scope.row.enterTime)}}
                    </template>
                </el-table-column>
                <el-table-column prop="enterPicPath" label="入场图片" width="160">
                    <template slot-scope="scope">
                        <div v-if="scope.row.enterPicPath">
                            <img class="pic" :src="scope.row.enterPicPath" 
                                @click="handleCheckPic(scope.row.enterPicPath)"/>
                        </div>
                        <div v-else>--</div>
                    </template>
                </el-table-column>
                <el-table-column prop="passTime" label="出场时间" width="160">
                    <template slot-scope="scope">
                        {{formatDate(scope.row.passTime)}}
                    </template>
                </el-table-column>
                <el-table-column prop="picPath" label="出场图片" width="160">
                    <template slot-scope="scope">
                        <div v-if="scope.row.picPath">
                            <img class="pic" :src="scope.row.picPath" 
                                @click="handleCheckPic(scope.row.picPath)"/>
                        </div>
                        <div v-else>--</div>
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
                    <el-form-item label="车辆编号" label-width="110px" prop="carNum">
                        <el-select v-model="form.carNum" placeholder="请选择">
                            <el-option
                                v-for="item in carNumList"
                                :key="item.carNum"
                                :label="item.carNum"
                                :value="item.carNum">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="车辆RFID" label-width="110px" prop="carID">
                        <el-input v-model="form.carID"></el-input>
                    </el-form-item>
                    <el-form-item label="车队编号" label-width="110px" prop="fleetNum">
                        <el-select v-model="form.fleetNum" placeholder="请选择">
                            <el-option
                                v-for="item in fleetInfoList"
                                :key="item.fleetNum"
                                :label="item.fleetNum"
                                :value="item.fleetNum">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="公司名称" label-width="110px" prop="companyName">
                        <el-select v-model="form.companyName" placeholder="请选择">
                            <el-option
                                v-for="item in companyInfoList"
                                :key="item.companyName"
                                :label="item.companyName"
                                :value="item.companyName">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="拉运体积" label-width="110px" prop="volume">
                        <el-input v-model="form.volume"></el-input>
                    </el-form-item>
                    <el-form-item label="车辆额定体积" label-width="110px" prop="ratedVolume">
                        <el-input v-model="form.ratedVolume"></el-input>
                    </el-form-item>
                    <el-form-item label="入场图片路径" label-width="110px" prop="enterPicPath">
                        <el-input v-model="form.enterPicPath"></el-input>
                    </el-form-item>
                    <el-form-item label="入场时间" label-width="110px" prop="enterTime">
                        <el-date-picker
                            v-model="form.enterTime"
                            type="datetime"
                            placeholder="选择日期时间">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="出场图片路径" label-width="110px" prop="picPath">
                        <el-input v-model="form.picPath"></el-input>
                    </el-form-item>
                    <el-form-item label="出场时间" label-width="110px" prop="passTime">
                        <el-date-picker
                            v-model="form.passTime"
                            type="datetime"
                            placeholder="选择日期时间">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="用户账号" label-width="110px" prop="userNum">
                        <el-input v-model="form.userNum" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="盐田编号" label-width="110px" prop="salinaNum">
                        <el-select v-model="form.salinaNum" placeholder="请选择">
                            <el-option
                                v-for="item in salinaInfoList"
                                :key="item.salinaNum"
                                :label="item.salinaNum"
                                :value="item.salinaNum">
                            </el-option>
                        </el-select>
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
                <span>确认删除{{deleteDialog.carNum}}的该条运行记录吗？</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="deleteDialog.visible = false">取 消</el-button>
                    <el-button type="primary" @click="submitDelete(deleteDialog.recordNum)">确 定</el-button>
                </span>
            </el-dialog>
        </div>
        <el-dialog
            title="查看图片"
            :visible.sync="checkPic.visible"
            width="40%"
            >
            <div class="check-pic">
                <img :src="checkPic.url" />
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {http, downloadFile} from '@/common/http';
import {getCarInfo, getFleetInfoList, getCompanyInfoList, getSalinaInfoList} from '@/common/infoRequest';
import apis from '@/common/api';

export default {
    name: 'CompanyInfo',
    components: {
    },
    props: ['role', 'userName'],
    data() {
        return {
            params: {
                pageNo: 1,
                pageSize: 20,
                carNum: '',
                fleetNum: '',
                companyName: '',
                startTime: '',
                endTime: '',
                userNum: '',
                salinaNum: ''
            },
            searchDate: '',
            loading: false,
            sum: 0,
            carNumList: [],
            fleetInfoList: [],
            companyInfoList: [],
            salinaInfoList: [],
            addVisible: false,
            tableData: [],
            totalCount: 0,
            editDialog: {
                title: '新增运行信息',
                visible: false,
                type: ''
            },
            deleteDialog: {
                visible: false
            },
            checkPic: {
                visible: false,
                url: ''
            },
            form: {
                carNum: '',
                carID: '',
                fleetNum: '',
                companyName: '',
                volume: '',
                passTime: '',
                ratedVolume: '',
                picPath: '',
                enterPicPath: '',
                userNum: this.userName,
                salinaNum: ''
            },
            rules: {
                carNum: [
                    {required: true, message: '请输入车辆编号', trigger: 'submit'}
                ],
                carID: [
                    {required: true, message: '请输入车辆RFID', trigger: 'submit'}
                ],
                fleetNum: [
                    {required: true, message: '请输入车队编号', trigger: 'submit'}
                ],
                companyName: [
                    {required: true, message: '请输入公司名称', trigger: 'submit'}
                ],
                volume: [
                    {required: true, message: '请输入拉运体积', trigger: 'submit'}
                ],
                ratedVolume: [
                    {required: true, message: '请输入车辆额定体积', trigger: 'submit'}
                ],
                passTime: [
                    {required: true, message: '请输入出场时间', trigger: 'submit'}
                ],
                enterTime: [
                    {required: true, message: '请输入入场时间', trigger: 'submit'}
                ],
                userNum: [
                    {required: true, message: '请输入用户账号', trigger: 'submit'}
                ],
                salinaNum: [
                    {required: true, message: '请输入盐田编号', trigger: 'submit'}
                ]
            }
        };
    },
    watch: {
        searchDate(val) {
            this.params.startTime = new Date(this.searchDate[0]);
            this.params.endTime = new Date(this.searchDate[1]);
        }
    },
    methods: {
        formatDate(date) {
            return date ? this.$moment(date).format('YYYY-MM-DD HH:mm:ss') : '--';
        },
        // 获取运行列表
        getInfoList(datas) {
            this.loading = true;
            http({
                method: 'post',
                url: apis.recordInfo.api,
                data: datas
            })
            .then(res => {
                this.loading = false;
                this.tableData = res.data.result;
                this.totalCount = res.data.totalCount;
                this.sum = res.data.sum;
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
                apis.recordInfo.download,
                this.params,
                '运行记录列表');
        },
        // 点击新增按钮
        handleAdd() {
            this.editDialog = {
                title: '新增运行信息',
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
                title: '编辑运行信息',
                visible: true,
                type: 'edit',
                method: 'patch'
            };
        },
        // 查看大图
        handleCheckPic(picPath) {
            if (!picPath) {
                return;
            }
            this.checkPic = {
                visible: true,
                url: apis.recordInfo.pic + picPath
            };
        },
        // 删除
        handleDelete(item) {
            this.deleteDialog = {
                visible: true,
                ...item
            };
        },
        // 确认删除
        submitDelete(recordNum) {
            http({
                method: 'delete',
                url: `${apis.recordInfo.api}/${recordNum}`
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
                        url: apis.recordInfo.api,
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
        handleSizeChange(val) {
            this.params.pageSize = val;
            this.handleSearch();
        },
        handleCurrentChange(val) {
            this.params.pageNo = val;
            this.handleSearch();
        }
    },
    async mounted() {
        this.$emit('showHeader', true);
        this.handleSearch();
        this.carNumList = await getCarInfo();
        this.fleetInfoList = await getFleetInfoList();
        this.companyInfoList = await getCompanyInfoList();
        this.salinaInfoList = await getSalinaInfoList();
    }
};
</script>

<style lang="scss" scoped>
.search-group {
  width: 80%;
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
  line-height: 52px;
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
.pic {
    cursor: pointer;
    max-width: 110px;
    height: auto;
    max-height: 120px;
}
</style>
<style lang="scss">
.check-pic {
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
