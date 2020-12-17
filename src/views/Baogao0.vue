<template>
  <div class="home">
    <div id="demo">
    <!-- <p>我是主界面</p> -->
    <el-button class="button" type="primary" icon="el-icon-download" @click="download">下载报告</el-button>
    <div>
      <center class="title" >实验1 信号的基本运算实验</center>
    <br>
    <span class="t1">一、 实验目的</span>
    <br>
    <span class="cont">1. 了解各基本运算单元的构成。</span>
    <br>
    <span class="cont">2. 掌握信号时域运算的运算法则。</span>
    <br>
    <span class="t1">1.2实验设备</span>
    <br>
    <span class="cont">MATLAB SIMULINK仿真工具箱</span>
    <br>
    <span class="t1">二、 实验原理及内容</span>
    <br>
    <span class="cont">信号在时域中的运算有相加、相减、相乘、数乘、微分、积分等。</span>
    <br>
    <span class="cont">1. 相加：信号在时域中相加时，其横轴（时间轴）的横坐标值不变，仅是将横坐标值所对应的纵坐标值相加。
            实验中加法器的电路如图 1-3-1 所示，此为两输入加法器。</span>
    <img class="pict" src="../assets/1-3-1.png" alt="">
    <span class="cont">加法器完成功能：OUT = IN1 + IN2</span>
    <br>
    <span class="cont"> 2.相减：信号在时域中相减时，其横轴（时间轴）的横坐标值不变，仅是将横坐标值所对
          应的纵坐标值相减。实验中减法器的电路如图 1-3-2 所示。</span>
    <img class="pict" src="../assets/1-3-2.png" alt="">
    <span class="cont">减法器完成功能：OUT = IN2 - IN1</span>
    <br>
    <span class="cont">3. 数乘：信号在时域中倍乘时，其横轴（时间轴）的横坐标值不变，仅是将横坐标值所对应的纵坐标值扩大 n 倍。
        （n&gt;1 时扩大；0&lt;n&lt;1 时减小）。实验中数乘器如图 1-3-3 所示。</span>
    <img class="pict" src="../assets/1-3-3.png" alt="">
    <span class="cont">数乘器完成功能： OUT=Rp/R*IN</span>
    <br>
    <span class="cont">4. 微分：信号在时域微分即是对信号求一阶导数。实验中微分器电路如图 1-3-5 所示。</span>
    <img class="pict" src="../assets/1-3-5.png" alt="">
    <span class="cont">5. 积分：信号在时域积分即将信号在（－∞，t）内求一次积分。实验中积分器电路如图 1-3-6所示。</span>
    <img class="pict" src="../assets/1-3-6.png" alt="">
     <br>
    <span class="t1">三、 Simulink仿真电路图和仿真结果</span><br>
    <span class="cont">1. 相加运算 </span><br>
    <span class="cont">①Simulink仿真电路图 </span><br>
   
    <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>

    <span class="cont">②仿真结果 </span><br>
    <span class="cont">（1）表1-1：加法器电路估算、仿真结果对比 </span><br>


    <div class="biaoUpload">
      <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="表1-1"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label=""
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="">
        <template slot-scope="scope">
                    <div v-if='scope.$index == 2 || scope.$index == 3'>
                        <el-input v-model="scope.row.address" size="small" placeholder="输入数据"></el-input>
                    </div>
                    <div v-else>{{ scope.row.address }}</div>
        </template>
      </el-table-column>
       <el-table-column
        prop="address1"
        label="">
         <template slot-scope="scope">
                    <div v-if='scope.$index == 2 || scope.$index == 3'>
                        <el-input v-model="scope.row.address1" size="small" placeholder="输入数据"></el-input>
                    </div>
                    <div v-else>{{ scope.row.address1 }}</div>
        </template>
      </el-table-column>
       <el-table-column
        prop="address2"
        label="">
         <template slot-scope="scope">
                    <div v-if='scope.$index == 2 || scope.$index == 3'>
                        <el-input v-model="scope.row.address2" size="small" placeholder="输入数据"></el-input>
                    </div>
                    <div v-else>{{ scope.row.address2 }}</div>
        </template>
      </el-table-column>
       <el-table-column
        prop="address3"
        label="">
         <template slot-scope="scope">
                    <div v-if='scope.$index == 2 || scope.$index == 3'>
                        <el-input v-model="scope.row.address3" size="small" placeholder="输入数据"></el-input>
                    </div>
                    <div v-else>{{ scope.row.address3 }}</div>
        </template>
      </el-table-column>
    </el-table>
    </div>   

    <br><span class="cont">（1）仿真波形图  </span><br>
    <span class="cont">&lt;1>IN1=sin(2000πt) IN2=2  </span><br>
    <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>

    <span class="cont">&lt;2>IN1=sin(2000πt) IN2=3  </span><br>
    <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>

    <span class="cont">&lt;3>IN1=2sin(2000πt) IN2=1  </span><br>
    <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>

    <span class="cont">&lt;4>IN1=3sin(2000πt) IN2=1  </span><br>
    <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>

    <span class="cont">2. 减法运算 </span><br>
    <span class="cont">①Simulink仿真电路图 </span><br>
    <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>
    <br><span class="cont">②仿真结果  </span><br>
    <span class="cont">（1）表1-2：减法器电路估算、仿真结果对比 </span><br>
    <div class="biaoUpload">
      <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="表1-2"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label=""
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="">
        <template slot-scope="scope">
                    <div v-if='scope.$index == 2 || scope.$index == 3'>
                        <el-input v-model="scope.row.address" size="small" placeholder="输入数据"></el-input>
                    </div>
                    <div v-else>{{ scope.row.address }}</div>
        </template>
      </el-table-column>
       <el-table-column
        prop="address1"
        label="">
         <template slot-scope="scope">
                    <div v-if='scope.$index == 2 || scope.$index == 3'>
                        <el-input v-model="scope.row.address1" size="small" placeholder="输入数据"></el-input>
                    </div>
                    <div v-else>{{ scope.row.address1 }}</div>
        </template>
      </el-table-column>
       <el-table-column
        prop="address2"
        label="">
         <template slot-scope="scope">
                    <div v-if='scope.$index == 2 || scope.$index == 3'>
                        <el-input v-model="scope.row.address2" size="small" placeholder="输入数据"></el-input>
                    </div>
                    <div v-else>{{ scope.row.address2 }}</div>
        </template>
      </el-table-column>
       <el-table-column
        prop="address3"
        label="">
         <template slot-scope="scope">
                    <div v-if='scope.$index == 2 || scope.$index == 3'>
                        <el-input v-model="scope.row.address3" size="small" placeholder="输入数据"></el-input>
                    </div>
                    <div v-else>{{ scope.row.address3 }}</div>
        </template>
      </el-table-column>
    </el-table>
    </div>   
    <span class="cont">（2）仿真波形图 </span><br>
    <span class="cont">&lt;1>IN1=sin(2000πt) IN2=2 </span><br>
     <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>
    <span class="cont">&lt;2>IN1=sin(2000πt) IN2=3 </span><br>
     <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>
    <span class="cont">&lt;3>IN1=2sin(2000πt) IN2=1 </span><br>
     <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>
    <span class="cont">&lt;4>IN1=3sin(2000πt) IN2=1 </span><br>
     <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>
    
    <span class="cont">3. 数乘运算 </span><br>
    <span class="cont">①Simulink仿真电路图 </span><br>
     <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>
    <br><span class="cont">②仿真结果  </span><br>
    <span class="cont">（1）表1-3：数乘器电路估算、仿真结果对比 </span><br>
     <div class="biaoUpload">
      <el-table
      :data="tableData1"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="表1-3"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label=""
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="">
        <template slot-scope="scope">
                    <div v-if='scope.$index == 3 || scope.$index == 4 || scope.$index == 5 || scope.$index == 6'>
                        <el-input v-model="scope.row.address" size="small" placeholder="输入数据"></el-input>
                    </div>
                    <div v-else>{{ scope.row.address }}</div>
        </template>
      </el-table-column>
       <el-table-column
        prop="address1"
        label="">
         <template slot-scope="scope">
                    <div v-if='scope.$index == 3 || scope.$index == 4 || scope.$index == 5 || scope.$index == 6'>
                        <el-input v-model="scope.row.address1" size="small" placeholder="输入数据"></el-input>
                    </div>
                    <div v-else>{{ scope.row.address1 }}</div>
        </template>
      </el-table-column>
       <el-table-column
        prop="address2"
        label="">
         <template slot-scope="scope">
                    <div v-if='scope.$index == 3 || scope.$index == 4 || scope.$index == 5 || scope.$index == 6'>
                        <el-input v-model="scope.row.address2" size="small" placeholder="输入数据"></el-input>
                    </div>
                    <div v-else>{{ scope.row.address2 }}</div>
        </template>
      </el-table-column>
       <el-table-column
        prop="address3"
        label="">
         <template slot-scope="scope">
                    <div v-if='scope.$index == 3 || scope.$index == 4 || scope.$index == 5 || scope.$index == 6'>
                        <el-input v-model="scope.row.address3" size="small" placeholder="输入数据"></el-input>
                    </div>
                    <div v-else>{{ scope.row.address3 }}</div>
        </template>
      </el-table-column>
    </el-table>
    </div>   
    <span class="cont">（2）仿真波形图 </span><br>
    <span class="cont">&lt;1>IN=sin(200πt) Rp=10KΩ </span><br>
     <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>
    <span class="cont">&lt;2>IN=2sin(2000πt) Rp=5KΩ </span><br>
     <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>
    <span class="cont">&lt;3>IN=3sin(2000πt) Rp=2KΩ </span><br>
     <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>
    <span class="cont">&lt;4>IN=sin(100000πt) Rp=1KΩ </span><br>
     <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>

    <span class="cont">4. 微分运算 </span><br>
    <span class="cont">①Simulink仿真电路图 </span><br>
     <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>
    <br><span class="cont">②仿真效果  </span><br>
    <span class="cont">&lt;1>输入信号：IN=10sin(2πt) </span><br>
     <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>
    <span class="cont">&lt;2>输出信号：相位增加π/2，幅值减少，周期不变。 </span><br>
     <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>

     <span class="cont">5. 积分运算 </span><br>
    <span class="cont">①Simulink仿真电路图 </span><br>
     <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>
    <br><span class="cont">②仿真效果  </span><br>
    <span class="cont">输入信号亦为IN=IN=10sin(2πt)，输出信号如下图。相位减少π/2，幅值增加，周期不变。</span><br>
     <div class="pictureUpload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>
    
    <span class="t1">四、主要结论</span><br>
    <span class="cont">1. 各基本运算单元的构成</span><br>
    <el-input
      type="textarea"
      :autosize="{ minRows: 5, maxRows: 10}"
      placeholder="请输入内容"
      v-model="textarea1">
    </el-input>
    <br>

    <span class="cont">2. 信号时域运算的运算法则</span><br>
    <el-input
      type="textarea"
      :autosize="{ minRows: 5, maxRows: 10}"
      placeholder="请输入内容"
      v-model="textarea2">
    </el-input>
    </div>
    <el-button class="button" type="primary" @click="upload">提交</el-button>
    <br>
    </div>
    <br>
    
    
  </div>
</template>


<script>
// @ is an alias to /src
import htmlToPdf from "@/common/htmlToPdf"
export default {
  name: "Baogao0",
  data() {
    return {
       tableData: [{
          date: '正弦信号',
          name: 'IN1（V）',
          address: '1～-1 ',
          address1: '1～-1',
          address2: '2～-2',
          address3: '3～-3',
    
        }, {
          date: '直流信号',
          name: 'IN2（V）',
          address: '2',
          address1: '3',
          address2: '1',
          address3: '1',

        }, {
          date: '输出电压',
          name: '实测（V）',
          address: '2.121',
          address1: '3.082',
          address2: '1.732',
          address3: '2.345',
        }, {
          date: 'OUT',
          name: '估算（V）',
          address: '2.121',
          address1: '3.082',
          address2: '1.732',
          address3: '2.345',
        }],
        tableData1: [{
          date: '正弦波信号',
          name: '幅值(V)',
          address: '1',
          address1: '2',
          address2: '3',
          address3: '1',
    
        }, {
          date: '',
          name: '频率(Hz)',
          address: '100',
          address1: '1000',
          address2: '1000',
          address3: '50000',

        }, {
          date: '',
          name: 'Rp(KΩ)',
          address: '10',
          address1: '5',
          address2: '2',
          address3: '1',
        }, {
          date: '输出信号估算',
          name: '幅值(V)',
          address: '2.121',
          address1: '3.082',
          address2: '1.732',
          address3: '2.345',
        },{
          date: '',
          name: '频率(Hz)',
          address: '2.121',
          address1: '3.082',
          address2: '1.732',
          address3: '2.345',
        },{
          date: '输出信号测量',
          name: '幅值(V)',
          address: '2.121',
          address1: '3.082',
          address2: '1.732',
          address3: '2.345',
        },{
          date: '',
          name: '频率(Hz)',
          address: '2.121',
          address1: '3.082',
          address2: '1.732',
          address3: '2.345',
        }],
       imageUrl: '',
       textarea1: '',
       textarea2: '',
      };
  },
  components: {
  },
  props: ['role'],
  mounted() {
    this.$emit('showHeader', true);
  },
   methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      upload() {
        console.log('提交成功');
      },
      download(){
        htmlToPdf.downloadPDF(document.querySelector("#demo"),"baogao0报告")
      }
    
     
    }
};
</script>

<style scoped>
  .title{
    font-size: 24px;
    font-weight: 1000;
  }
  .t1{
     font-size: 20px;
     line-height: 40px;
  }
  .cont{
    font-size: 17px;
    line-height: 30px;
    padding-left: 15px;
    padding-right: 10px;
  }
  .pict{
    display: block;
    height: 250px;
    padding: 10px;
    margin: 0 auto
  }
  .biao{
    display: block;
    height: 130px;
    padding: 5px;
    margin: 0 auto
  }
  .biao1{
    display: block;
    height: 200px;
    padding: 5px;
    margin: 0 auto
  }
  .button {
    float: right;
    color: #fff;
    background-color: #409eff;
    }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>