<template>
  <div class="home">
    <!-- <p>我是主界面</p> -->
       <el-button class="button">编辑实验</el-button>
    <div>
      <center class="title" >实验1 信号的基本运算实验</center>
    <br>
    <span class="t1">1.1 实验目的</span>
    <br>
    <span class="cont">1. 了解各基本运算单元的构成。</span>
    <br>
    <span class="cont">2. 掌握信号时域运算的运算法则。</span>
    <br>
    <span class="t1">1.2实验设备</span>
    <br>
    <span class="cont">MATLAB SIMULINK仿真工具箱</span>
    <br>
    <span class="t1">1.3 实验原理及内容</span>
    <br>
    <span class="cont">信号在时域中的运算有相加、相减、相乘、数乘、微分、积分等。</span>
    <br>
    <span class="cont">1. 相加：信号在时域中相加时，其横轴（时间轴）的横坐标值不变，仅是将横坐标值所对应的纵坐标值相加。
            实验中加法器的电路如图 1-3-1 所示，此为两输入加法器。</span>
    <img class="pict" src="../../assets/1-3-1.png" alt="">
    <span class="cont">加法器完成功能：OUT = IN1 + IN2</span>
    <br>
    <span class="cont"> 相减：信号在时域中相减时，其横轴（时间轴）的横坐标值不变，仅是将横坐标值所对
          应的纵坐标值相减。实验中减法器的电路如图 1-3-2 所示。</span>
    <img class="pict" src="../../assets/1-3-2.png" alt="">
    <span class="cont">减法器完成功能：OUT = IN2 - IN1</span>
    <br>
    <span class="cont">3. 数乘：信号在时域中倍乘时，其横轴（时间轴）的横坐标值不变，仅是将横坐标值所对应的纵坐标值扩大 n 倍。
        （n&gt;1 时扩大；0&lt;n&lt;1 时减小）。实验中数乘器如图 1-3-3 所示。</span>
    <img class="pict" src="../../assets/1-3-3.png" alt="">
    <span class="cont">数乘器完成功能： OUT=Rp/R*IN</span>
    <br>
    <span class="cont">4. 微分：信号在时域微分即是对信号求一阶导数。实验中微分器电路如图 1-3-5 所示。</span>
    <img class="pict" src="../../assets/1-3-5.png" alt="">
    <span class="cont">5. 积分：信号在时域积分即将信号在（－∞，t）内求一次积分。实验中积分器电路如图 1-3-6所示。</span>
    <img class="pict" src="../../assets/1-3-6.png" alt="">
    <span class="t1">1.4 实验步骤</span>
    <br>
    <span class="cont">本实验在MATLAB SIMULINK仿真平台完成。</span>
    <br>
    <span class="cont">1. 相加运算 </span>
    <br>
    <span class="cont">在SIMULINK连接电路（如表 1-3-1），产生频率为 1KHz的正弦信号和直流信号，分别接入 IN1 和 IN2。
      调节不同的参数，用示波器输出 OUT 端并完成下表。</span>
    <img class="biao" src="../../assets/b1-3-1.png" alt="">
    <span class="cont">当正弦信号为 1～-1V、直流信号为 2V 时的参考实验结果波形如图 1-3-7 所示。</span>
    <img class="pict" src="../../assets/1-3-7.png" alt="">
    <span class="cont">实验中也可以输入其他信号，观察其输出波形。</span>
    <br>
    <span class="cont">2. 减法运算</span>
    <br>
    <span class="cont">在SIMULINK连接电路（如表 1-3-2），产生频率为 1KHz的正弦信号和直流信号,
      分别接入 IN1 和 IN2。调节不同的参数，用示波器输出 OUT 端并完成下表。</span>
    <img class="biao" src="../../assets/b1-3-2.png" alt="">
    <span class="cont">当正弦信号为 1～-1V、直流信号为 3V 时的参考实验结果波形如图 1-3-8 所示</span>
    <img class="pict" src="../../assets/1-3-8.png" alt="">
    <span class="cont">实验中也可以输入其他信号，观察其输出波形。</span>
    <br>
    <span class="cont">3. 数乘运算</span>
    <br>
    <span class="cont">在SIMULINK连接电路（如表 1-3-3），产生一路正弦波信号，接入 IN。调节不同参数，
      用示波器输出 OUT 并完成下表。实验中数乘器的放大倍数为 Rp/R，所以调节电位器 Rp 便可以改变放大倍数。
      正弦波进行数乘运算，其输出还应该是正弦波信号，且频率不变，仅幅值发生变化。</span>
    <img class="biao1" src="../../assets/b1-3-3.png" alt="">
    <span class="cont">当正弦波信号幅值 1V、频率 100Hz、Rp=10KΩ 时的实验参考波形如图 1-3-9 所示。</span>
    <img class="pict" src="../../assets/1-3-9.png" alt="">
    <span class="cont">实验中也可以输入其他信号，观察其输出波形。</span>
    <br>
    <span class="cont">4. 微分运算</span>
    <br>
    <span class="cont">在SIMULINK连接电路（如图 1-3-5），产生一路正弦波信号，接入 IN。
      调节不同的参数，用示波器输出 OUT，观察其相位与幅值变化，实验结果如图 1-3-11所示。</span>
    <img class="pict" src="../../assets/1-3-11.png" alt="">
    <span class="cont">5. 积分运算</span>
    <br>
    <span class="cont">在SIMULINK连接电路（如图 1-3-6），产生一路正弦波信号，接入 IN。
      调节不同的参数，用示波器输出 OUT，观察其相位与幅值变化，实验结果如图 1-3-12所示。</span>
    <img class="pict" src="../../assets/1-3-12.png" alt="">
    <span class="t1">1.5 实验报告要求</span><br>
    <span class="cont">1．简述实验目的及原理</span><br>
    <span class="cont">2．按实验步骤要求绘制SIMULINK仿真图，并附上仿真程序运行结果；</span><br>
    <span class="cont">3．结合所学知识总结实验中的主要结论；</span><br>
    <span class="cont">4. 所有文档以电子版形式上交，仅上交一个打包文件。</span><br>
    <span class="cont">5. 实验报告写为word文件，列写出每一项实验内容，包括相关源文件名称，SIMULINK仿真图，
      程序结果，图表等。在实验报告中需详细写清班级，学号，姓名等内容。</span><br>
    <span class="cont">6. 电子文件包括matlab文件和实验报告word版</span><br>
    <span class="cont">7. word文件的命名格式为：学号-姓名-实验几.doc，例如：141044123 张三 实验一.doc</span><br>
    <span class="cont">8. 将所有电子文件（第3项所列）找包成一个文件（.rar或.zip）文件，
      命名格式为：学号-姓名-实验几.rar，例如：141044123 张三 实验一.rar</span><br>


    </div>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: "About0",
  components: {
  },
  props: ['role'],
  mounted() {
    this.$emit('showHeader', true);
  },
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
</style>