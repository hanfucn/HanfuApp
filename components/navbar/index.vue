<template>
	<view class="header" :class="{'white': backdrop}" :style="{'background-color': styles}">
		<!-- 定位城市 -->
		<view v-if="mode === 'default'" class="tabs">
			<wuc-tab :tab-list="tabList" :tabCur="TabCur" @change="tabChange" select-class="text-xl">
			</wuc-tab>
		</view>
		<view v-else-if="mode === 'leftback'">
			<navigator hover-class="none" animation-type="pop-out" animation-duration="300" open-type="navigateBack">
				<view class="left-image">
					<image :src="'/static/' + fontcolor" mode="widthFix"></image>
				</view>
            </navigator>
		</view>
		<view v-else-if="mode === 'rightback'">
			还没有被定义
		</view>
		 
		<!-- 右侧图标按钮 -->
		<view class="search">
			<view class="icon search"></view>
		</view>
	</view>
</template>

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	
	export default {
		data () {
			return {
				TabCur: 1,
				tabList: [
					{ name: '关注' }, 
					{ name: '最新' },
					{ name: '活动' },
				],
				bgs: "rgba(255,255,255,0)"
			}
		},
		
		props: {
			fontcolor: {
				type: String,
				default () {
					return "navigate-left.png"
				}
			},
			styles: {
				type: String,
				default () {
					return ""
				}
			},
			mode: {
				/**
				 * default: 首页的导航栏
				 * leftback: 左边的返回 导航栏
				 * rightback: 右边的返回 导航栏
				 */
				type: String,
				default () {
					return "default"
				}
			},
			backdrop: {
				/**
				 * false: 透明导航栏
				 * true: 白色导航栏
				 */
				type: Boolean,
				default () {
					return true
				} 
			}
		},
		components: {
			"WucTab": WucTab
		},
		methods: {
			tabChange(index) {
				console.log('tabChange', index)
				this.TabCur = Number(index);
			}
		}
	}
</script>

<style lang="scss">
	.white {
		background-color: #FFFFFF;
		box-shadow: 0 5upx 10upx 0 #f8f8f8;
	}
	.header {
		width: 92%;
		padding: 0 4%;
		height: 97.2upx;
		display: flex;
		align-items: center;
		// position: relative;
		top: 0;
		z-index: 10;
		position: fixed;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		
		.left-image {
		    width: 50upx;
			height: 50upx;
			image {
				width: 50upx;
				height: 50upx;
			}
		}
	
		.tabs {
			width: 90%;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			font-size: 28upx;
			.icon {
				height: 60upx;
				margin-right: 5upx;
				display: flex;
				align-items: center;
				font-size: 42upx;
				color: #ffc50a;
			}
			swiper {
				width: 100%;
				height: 100%;
			}
		}
		.search {
			width: 60upx;
			height: 60upx;
			right: 0;
			position: relative;
			// display: flex;
			// align-items: center;
			.icon {
				display: flex;
				align-items: center;
				position: absolute;
				top: 0;
				right: 0;
				width: 60upx;
				height: 60upx;
				font-size: 40upx;
				color: #5e5e5e;
			}
		}
	}
</style>
