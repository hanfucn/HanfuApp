<template>
	<view class="x-tag">
		<text>{{title}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: {
			title: {
				type: [String, Number],
				default () {
					return '标签'
				}
			}
		}
	}
</script>

<style lang="scss">
	/**
	 * 封装组件
	 * 750px 1px=1upx */
	.x-tag {
		height: 45upx;
		padding: 0 10upx;
		background: #4382ff;
		border-radius: 5upx;
		text {
			color: #FFFFFF;
		}
	}
</style>
