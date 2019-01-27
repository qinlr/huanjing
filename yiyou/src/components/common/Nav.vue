<template>
  <div id="nav">
    <!-- <router-view/> -->
    <mt-tabbar v-model="selected">
      <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.name)">
		  <svg-icon :icon-class="tab.icon" class='icon'></svg-icon>
        <span>{{tab.text}}</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Vue from "vue";

// 引入并使用插件
// import myicons from "@/plugins/icons";
// Vue.use(myicons);

// 引入并使用MintUI
import MintUI from "mint-ui";
Vue.use(MintUI);
import "mint-ui/lib/style.css";

// 按需引入
// 1.配置webpack
// 2.引入某个组件
// import { Button, Cell } from 'mint-ui';
// Vue.use(Button);
// Vue.use(Cell);
// Vue.component(Button.name,Button);

export default {
    data(){
        return {
            tabs:[
                {
                    text:'首页',
                    icon:'tab_icon_shouye_hover',
                    path:'/Home',
                    name:'Home'
                },{
                    text:'资讯',
                    icon:'tab_icon_zixun_hover',
                    path:'/Optional',
                    name:'Optional'
                },
				{
				    text:'学习',
				    icon:'tab_icon_xuexi_hover',
				    path:'/Find',
				    name:'Find'
				},
				{
                    text:'我的',
                    icon:'tab_icon_wode_hover',
                    path:'/My',
                    name:'My'
                }
            ],
            selected:'Home'
        }
    },
    methods:{
        goto(name){
			// nav.style.color='#FF6354';
            // 编程式导航：利用js实现路由跳转
            // 通过this.$router获取到路由实例对象
            // this.$router.push({name});//等效于<router-link :to="{name:xxx}"/>
           this.$router.push({name});////等效于<router-link :to="{name:xxx}" replace/>
        }
    }
};
</script>
<style lang="less" scoped="scoped">
@import url('../../styles/main.less');
#nav{
    height: 50px;
    width: 375px;
    background: #191A1C;
    .mint-tabbar{
        background: #191A1C;
        color: @fs-color;
        span{
            display: block;
            padding-top: 5px;
        }
    }
.mint-tabbar > .mint-tab-item.is-selected {
  color: @sfs-color;
  .icon{
	  fill:@sfs-color;
  }
}
}
</style>
