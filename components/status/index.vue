<template>
	<view class="status" :class="{'white': backdrop}" :style="{ position: headerPosition,top:statusTop,opacity: afterHeaderOpacity, 'background-color': styles}">
	</view>
</template>

<script>
	export default {
		data() {
			return {
				afterHeaderOpacity: 1,//不透明度
				headerPosition: 'fixed',
				headerTop:null,
				statusTop: null,
			}
		},
		props: {
			styles: {
				type: String,
				default () {
					return ""
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
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
			this.headerTop = e.scrollTop>=0?null:0;
			this.statusTop = e.scrollTop>=0?null:-this.statusHeight+'px';
		}
	}
</script>

<style>
	.white {
		background-color: #FFFFFF;
	}
	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height); //覆盖样式
		/*  #endif  */
	}
</style>
