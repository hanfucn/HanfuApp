<template>
	<view>
		
		<view class="x-card-solid" v-if="distribution"></view>
		<view class="x-card">
			
			<view v-if="distribution" class="x-if-card">
				<view class="x-card-header">
					<view class="title">
						<navigator :url="url" hover-class="none">
							<text>汉服运动X周年庆典 汉服运动</text>
						</navigator>
					</view>
					<view class="user">
						<navigator :url="url" hover-class="none">
							<image src="../../static/user.png" mode="aspectFit"></image>
							<text>小敏子</text>
						</navigator>
					</view>
					<view class="tips">
						<view class="tip">
							<navigator :url="url" hover-class="none">
								<image src="../../static/eye.png" mode="aspectFit"></image>
								<text>10109</text>
							</navigator>
						</view>
						<view class="time">
							<text>1小时前</text>
						</view>
					</view>
				</view>
				<view class="x-card-image">
					<navigator :url="url" hover-class="none">
						<image src="../../static/card.png" mode="aspectFit"></image>
					</navigator>
				</view>
			</view>
			<view v-else>
				
				<view>
					<xAvatar></xAvatar>
				</view>
				
				
				<view class="x-else-card-image">
					<navigator :url="url" hover-class="none">
						<image src="../../static/card.png" mode="aspectFit"></image>
					</navigator>
				</view>
				<view class="x-else-card-header">
					<view class="title">
						<navigator :url="url" hover-class="none">
							<text>汉服运动X周年庆典 汉服运动</text>
						</navigator>
					</view>
					<!-- <view class="user">
						<image src="../../static/user.png" mode="aspectFit"></image>
						<text>小敏子</text>
					</view> -->
					<view class="tips">
						<view class="tip">
							<navigator :url="url" hover-class="none">
								<image src="../../static/eye.png" mode="aspectFit"></image>
								<text>10109</text>
							</navigator>
						</view>
						<view class="time">
							<text>1小时前</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="x-card-solid" v-if="distribution"></view>
		
	</view>
</template>

<script>
	import {
		uniCard,
		uniTag
	} from "@dcloudio/uni-ui"
	import xTag from '@/components/tag/index.vue'
	import xAvatar from '@/components/avatar/index.vue'
	
	export default {
		data() {
			return {
				url: "/pages/Article/index"
			};
		},
		props: {
			distribution: {
				type: Boolean,
				default () {
					return true // true[横]|false[竖] 
				}
			}
		},
		components: {
			"xTag": xTag,
			"xAvatar": xAvatar
		}
	}
</script>

<style lang="scss">
	/**
	 * 封装组件
	 * 750px 1px=1upx */
	
	.x-card-solid {
		border-top: 1px solid #FCFCFC;
	}
	.x-card {
		padding: 40upx;
		background: #FFFFFF;
		
		.x-if-card {
			height: 170upx;
		}
		.x-card-header {
			float: left;
			position: relative;
			.title {
				margin-top: 7upx;
				text {
					color: #222222;
					font-size: 32upx;
				}
			}
			.user {
				height: 40upx;
				margin-top: 18upx;
				
				image {
					float: left;
					width: 40upx;
					height: 40upx;
					border-radius: 50upx;
					
				}
				text {
					float: left;
					color: #575757;
					font-size: 24upx;
					padding: 3upx 6upx;;
				}
			}
			.tips {
				height: 28upx;
				margin-top: 25upx;
				line-height: 29.45upx;
				.tip {
					float: left;
				}
				.time {
					float: right;
				}
				image {
					width: 28upx;
					height: 28upx;
					float: left;
					will-change: transform;
				}
				text {
					float: left;
					color: #7f7f7f;
					font-size: 20upx;
					margin: 0 5upx;
				}
			}
		}
		.x-card-image {
			float: right;
			image {
				width: 233upx;
				height: 170upx;
				// will-change: transform;
				border-radius: 15upx;
			}
		}
		
		.x-else-card-image {
			// float: right;
			image {
				width: 665upx;
				height: 485upx;
				// will-change: transform;
				border-radius: 15upx;
			}
		}
		.x-else-card-header {
			// float: left;
			position: relative;
			.title {
				margin-top: 7upx;
				text {
					color: #222222;
					font-size: 32upx;
				}
			}
			.tips {
				height: 28upx;
				margin-top: 25upx;
				line-height: 29.45upx;
				.tip {
					float: left;
				}
				.time {
					float: right;
				}
				image {
					width: 28upx;
					height: 28upx;
					float: left;
					will-change: transform;
				}
				text {
					float: left;
					color: #7f7f7f;
					font-size: 20upx;
					margin: 0 5upx;
				}
			}
		}
		
	}
</style>
