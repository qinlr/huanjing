<template>
  <div id="Seacher">
      <span>首页</span>
      <input type="text" placeholder="输入期货名字">
      <i><svg-icon icon-class="btn_sousuo_disable" class='icon black'></svg-icon></i>
  </div>
</template>

<script>
export default {
  name: 'Seacher'
}
</script>
<style lang="less" scoped>
@import url('../../styles/main.less');
#Seacher{
    position: relative;
    box-sizing: border-box;
    height: 55px;
    width: 100%;
    // background:rgba(62,55,0,.1);
    background: @bg-color;
    padding: 10px 0 8px 0;
    span{
        font-size: 18px;
        padding: 0 20px 0 15px;
        vertical-align: middle;
    }
    input{
        box-sizing: border-box;
        padding-left: 80px;
        width: 240px;
        height: 34px;
        border-radius: 17px;
        border: none;
        background:rgba(62,55,0,.1);
        // background: #3E3700;
        // opacity: 0.1;
        vertical-align: middle;
        font-size: 14px;
        color:rgba(36,37,38,.5);
        // color: #242526;
    }
    i{
        width: 18px;
        height: 16px;
        position: absolute;
        top: 19px;
        left: 126px;
    }
}
</style>
