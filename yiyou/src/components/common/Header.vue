<template>
	<div id="Header">
		<ul>
			<li class="right_img" @click="goback()">
				<svg-icon icon-class="2453" class='icon black'></svg-icon>
			</li>
			<li class="title">
				<span>财经日历</span>
			</li>
			<div>
				<li class="right_img setmr">
					<svg-icon icon-class="2398" class='icon'></svg-icon>
					<!-- <img src="../../../static/img/2395.png" /> -->
				</li>
				<li class="right_img">
					<svg-icon icon-class="2396" class='icon'></svg-icon>
					<!-- <img src="../../../static/img/2395.png" /> -->
				</li>
			</div>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		// components:{Header},
		data() {
			return {
				name:'这里是header'
			};
		},
		methods:{
			goback(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
@import url('../../styles/main.less');
#Header{
	.width(750);
	.height(75);
	.padding(0,30,0,30);
	background:@bg-color;
	box-sizing: border-box;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	ul{
		height: 100%;
		position: relative;
		li{
			height: 100%;
			float: left;
			.line-height(75) ;
		}
		.title{
			position: absolute;
			top: 50%;
			left: 50%;
			vertical-align: middle;
			// .height(75);
			transform: translate(-50%,-50%);
			color: #fff;
			.font-size(32) ;
		}
		div{
			float: right;
			.setmr{
				.margin(10,48,0,0) ;
			}
		}
		.right_img{
			.height(65);
			box-sizing: border-box;
			.margin(10,0,0,0) ;
			.icon{
				.width(46);
				.height(46);
			}
			.black{
				.width(20);
				// .height(46);
			}
		}
// 		.head{
// 			.margin(14,0,0,0);
// 			.width(50);
// 			.height(50);
// 			border-radius: 50%;
// 			background: #42B983;
// 		}
	}
}
</style>
