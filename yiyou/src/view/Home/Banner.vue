<template>
	<div id="Banner">
		<div class="swiper-container">
    <div class="swiper-wrapper">
        <!-- <div class="swiper-slide" v-for="(item,index) in list" :key="index">
			<img :src="item" alt="">
		</div> -->
		<!-- <div class="swiper-slide" v-for="(item,index) in list" :key="index+1">
			<img :src="item.imageUrl" alt="">
		</div> -->
        <div class="swiper-slide"><img src="../../images/raw_1516957426.jpeg" alt=""></div>
        <div class="swiper-slide"><img src="../../images/raw_1516957426.jpeg" alt=""></div>
    </div>
    <div class="swiper-pagination"></div>
    <!-- <div class="swiper-scrollbar"></div> -->
</div>
<!-- {{name}} -->
	</div>
</template>

<script>
import Swiper from 'swiper';
import Vue from 'vue' ;
	export default{
		name:"Banner",
		data(){
			return {
                list:['../../images/raw_1516957426.jpeg',
                '../../images/raw_1516957426.jpeg',
                '../../images/raw_1516957426.jpeg']
				
			}
		},
		methods:{
			getlist(){
				// this.list=['../../images/raw_1516957426.jpeg','../../images/raw_1516957426.jpeg','../../images/raw_1516957426.jpeg']
				Vue.nextTick(()=>{
					this.mySwiper = new Swiper ('.swiper-container', {
						// spaceBetween: 30,
						centeredSlides: true,
						autoplay: {
							delay: 2500,
							disableOnInteraction: false,
                        },
                          pagination: {
                            el: '.swiper-pagination',
                            dynamicBullets: true,
                        },
						loop: true, // 循环模式选项
					})  
				})
			}
		},
		created(){
			this.getlist();
		},
		mounted(){
			
		},
		destroyed(){
			delete this.mySwiper;
		}

		
	}
</script>

<style lang="less" scoped>
@import url('../../styles/main.less');
@import url('../../../node_modules/swiper/dist/css/swiper.css');
#Banner{
    width: 375px;
    img{
        width: 100%;
        height: 190px;
    }
}
</style>