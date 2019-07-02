<template>
	<view>
		<ustatus></ustatus>
		
		<!-- 顶部导航栏 -->
		<x-navbar></x-navbar>
		
		
		<!-- <div class="ivu-tabs-nav-container">
			<div class="ivu-tabs-nav-wrap">
				<div :style="{height:statusBarHeight+'wx'}"></div> 
				<div class="ivu-tabs-nav-scroll">
					
					<div class="ivu-tabs-nav">
						<div class="ivu-tabs-tab">
							标签一
						</div>
						<div class="ivu-tabs-tab">
							标签一
						</div>
						<div class="ivu-tabs-tab ivu-tabs-tab-active ivu-tabs-tab-focused ivu-tabs-ink-bar">
							标签一
						</div>
					</div> 
				</div>  
			</div> 
		</div>  -->
		
		
		
		<view class="content">
 
			<card></card>
			<card :distribution="false"></card>
			<card></card>
			<card :distribution="false"></card>
			<card></card>
			<card></card>
			<card></card>
			<card></card>
			<card></card>
			<card></card>
			<card></card>
			<card></card>
			<card></card>
			<card></card>
			<card></card>
			<card></card>
		</view>
		
		
	
	</view>
</template>
 
<script>
	import ustatus from '../../components/status/index.vue'
	import IndexHeader from '../../components/index.vue'
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	import card from '@/components/card/index.vue'
	import xNavbar from '@/components/navbar/index.vue'
	
	var bitmap1=null;
	
	export default {
		data() {
			return {
				title: 'Hello',
				statusHeight: 0,
				afterHeaderOpacity: 1,//不透明度
				headerPosition: 'fixed',
				headerTop:null,
				statusTop: null,
				
				TabCur: 1,
				tabList: [
					{ name: '关注' }, 
					{ name: '最新' },
					{ name: '活动' },
				]
			}
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
			this.headerTop = e.scrollTop>=0?null:0;
			this.statusTop = e.scrollTop>=0?null:-this.statusHeight+'px';
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.statusHeight = plus.navigator.getStatusbarHeight();
			this.statusTop = this.statusHeight+'px';
			bitmap1 = new plus.nativeObj.Bitmap('bmp1');
			bitmap1.load('static/add.png',function(){
				//console.log('bmp1.png load success!');
			},function(e){
				//console.log('bmp1.png load failed! '+JSON.stringify(e));
			});
			this.createtab();
			// #endif
			
		},
		
		components: {
			"indexheader": IndexHeader,
			"ustatus": ustatus,
			"wuc-tab": WucTab,
			"card": card,
			"x-navbar": xNavbar
		},
		methods: {
			tabChange(index) {
				console.log('tabChange', index)
				this.TabCur = Number(index);
			},
			swiperChange(index) {
				console.log('swiperChange', index)
				this.TabCur = index.detail.current;
			},
			createtab: function() {
				//console.log('App onLoad');
				// 设置水平居中位置
				var leftPos = Math.ceil((plus.screen.resolutionWidth - 60) / 2);
				var view = new plus.nativeObj.View('icon', {
					bottom: '11px',
					left:  leftPos+'px',
					width: '60px',
					height: '60px'
				});
				view.drawBitmap(bitmap1,
					{
						tag: 'font',
						id: 'icon',
						//text: '\ue510', //此为字体图标Unicode码'\e600'转换为'\ue600'
						src: '../static/add.png',
						position: {
							top: '0px',
							left: '5px',
							width: '50px',
							height: '100%'
						}
					}
				);
				view.addEventListener("click", function(e) {
					uni.switchTab({
						url: 'tabbar2'
					})
				}, false);
				view.show();
			}
		}
	}
</script>

<style lang="scss">
	
	.page-searchList {  
	    background-color: #FFFFFF;  
	    justify-content: center;  
	    align-items: center; 
		
		/* height: 97.2px; */
	}  
	.header {  
	    
	    position: fixed;  
	    top: 0;
		padding: 0 4%;
	}
	.ivu-tabs-nav-container {
		margin-bottom: -1px;
		line-height: 1.5;
		font-size: 14px;
		box-sizing: border-box;
		white-space: nowrap;
		overflow: hidden;
		position: relative;
		zoom: 1;
	}
	.ivu-tabs-nav-wrap {
		overflow: hidden;
		margin-bottom: -1px;
		background-image: #FFFFFF; 
		width: 750upx;  
	}
	.ivu-tabs-nav-scroll {
	    height: 97.2upx;
		overflow: hidden;
		white-space: nowrap;
		align-items: center;
		display: flex;
		
	}
	.ivu-tabs-nav {
		padding-left: 0;
		margin: 0;
		float: left;
		font-size: 27upx;
		list-style: none;
		box-sizing: border-box;
		position: relative;
		transition: -webkit-transform .5s ease-in-out;
		transition: transform .5s ease-in-out;
		transition: transform .5s ease-in-out,-webkit-transform .5s ease-in-out;
	}
	.ivu-tabs-nav .ivu-tabs-tab {
		display: inline-block;
		height: 100%;
		padding: 8px 16px;
		margin-right: 16px;
		box-sizing: border-box;
		cursor: pointer;
		color: #222222;
		text-decoration: none;
		position: relative;
		transition: color .3s ease-in-out;
	}

	.ivu-tabs-nav .ivu-tabs-tab-active {
		color: #3D7EFF;
		font-size: 36upx;
	}

.ivu-tabs-nav:after, .ivu-tabs-nav:before {
    display: table;
    content: " ";
}
.ivu-tabs-nav:after {
    clear: both;
}

.ivu-tabs-nav:after, .ivu-tabs-nav:before {
    display: table;
    content: " ";
}
.ivu-tabs-ink-bar {
    height: 2px;
    box-sizing: border-box;
    border-bottom: 5px solid #2d8cf0;
    position: absolute;
    left: 0;
    bottom: 1px;
    z-index: 1;
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out,-webkit-transform .3s ease-in-out;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}

	.text-xl {
		font-size: 36upx;
	}
	
	/**/
	page {
		position: relative;
	}
	@font-face {
		font-family: 'HMfont-home';
		src: url('data:application/x-font-woff2;charset=utf-8;base64,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')
			format('woff2');
	}
	.icon {
	 	font-family: 'HMfont-home' !important;
	 	font-size: 60upx;
	 	font-style: normal;
	 	color: #000000;
	 	&.yuyin {
	 		&:before {
	 			content: '\e64e';
	 		}
	 	}
	 	&.tongzhi {
	 		&:before {
	 			content: '\e729';
	 		}
	 	}
	 	&.search {
	 		&:before {
	 			content: '\e628';
	 		}
	 	}
	 	&.location {
	 		&:before {
	 			content: '\e611';
	 		}
	 	}
	 	&.xia {
	 		&:before {
	 			content: '\e689';
	 		}
	 	}
	 }
	
	
	.content {
		// width: 92%;
		// padding: 0 4%;
		margin: 97.2upx auto;
		position: relative;
		// background-color: #c7c7c7;
			
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
	}
	
	.swiper {
		width: 100%;
		// height: 170upx;
		margin-top: 10upx;
		display: flex;
		justify-content: center;
		.swiper-box {
			width: 92%;
			height: 30.7vw;
	
			overflow: hidden;
			border-radius: 15upx;
			box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
			//兼容ios，微信小程序
			position: relative;
			z-index: 1;
			swiper {
				width: 100%;
				height: 30.7vw;
				swiper-item {
					image {
						width: 100%;
						height: 30.7vw;
					}
				}
			}
			.indicator {
				position: absolute;
				bottom: 20upx;
				left: 20upx;
				background-color: rgba(255, 255, 255, 0.4);
				width: 150upx;
				height: 5upx;
				border-radius: 3upx;
				overflow: hidden;
				display: flex;
				.dots {
					width: 100%;
					&.on {
						background-color: rgba(255, 255, 255, 1);
					}
				}
			}
		}
	}
	
	.text-xl {
		color: #222222 !important;
	}
	
	

</style>
