<template>
	<view>
		
		<x-status :backdrop="false" :styles="bgs"></x-status>
		
			
		<x-navbar mode="leftback" :backdrop="false" :styles="bgs" :fontcolor="fontcolor"></x-navbar>
		
		
		
		<view class="details-header">
			<view>
				<image src="../../static/card.png" mode=""></image>
			</view>
		</view>
		
		<view class="details-content">
			<view class="header">
				<view class="title">
					<text>才18岁，就登上《歌手2019》舞台，其实他还是位优秀的原创歌手</text>
				</view>
				<view class="subtitle">
					<text>标题标题标题标题标题标题标题</text>
				</view>
				
				<x-avatar class="avatar" title="关注"></x-avatar>
				
				<view class="spread">
				</view>
				
			</view>
			
			<view class="content">
				《歌手2019》马上就要到总决赛，回顾本季比赛，很多朋友都觉得新生代歌手，在这一季的比赛中表现的还不错，甚至出现了2000后歌手，这在以往的如此规模的大赛中，都是没有过的。先是俄罗斯歌手Kristian Kostov，以首发之姿加入《歌手2019》，本以为这已经是本季节目的最小年龄纪录，哪知后来的踢馆赛，另一位加入比赛的选手，他年龄比小K更小，是2001年出生的，如今才刚满18岁。他就是超人气歌手钱正昊！
			《羞答答的玫瑰静悄悄地开》是一首很经典的老歌，这首歌的原版，讲的是“暗恋”的故事，它是台湾歌手孟庭苇的代表作，首次发表于1993年2月，当时孟庭苇第五张个人专辑《谁的眼泪在飞》中收录这首歌，从此很多年，歌曲都成为永恒的经典。钱正昊将原本表达“暗恋”的作品，唱成了欢快、自由的感觉，今天这篇文章一开始，我首先强烈为大家推荐的，便是钱正昊版本的《羞答答的玫瑰静悄悄地开》。接着我们一起来探寻一下，改编这首歌，并为其写了Rap词的钱正昊，是一个怎样的歌手。想必很多新朋友知道他，还是在《歌手2019》的踢馆赛上，作为通过网络票选胜出，登上《歌手》舞台的年龄最小的选手，钱正昊稳定的发挥，让他圈粉无数。虽然最终并未能拿到踢馆资格，但这位2001年出生的原创音乐人，却让我们看到了华语乐坛的全新生机。在《歌手》舞台上，钱正昊充分表现了00后积极的、稳定的精神状态。他演唱了两首歌，分别是《Feeling good》和《由我》，其中《由我》这首歌是钱正昊2019年的原创作品，发表于1月5日他18岁生日当天。这首歌曲中，钱正昊负责写词，“太难选/那就别怀疑/永不往回走”，霸气彰显了18岁少年的无所畏惧。而《由我》的旋律也是非常别致的，流行舞曲却选用吉他做主要发声，此外，低音鼓的搭配也令人眼前一亮，在这样一来一去之间，竟然非常有层次的说明了少年的全部心

			</view>
			
		</view>
		
		
	</view>
</template>

<script>
	import xStatus from '../../components/status/index.vue'
	import xNavbar from '@/components/navbar/index.vue'
	import xAvatar from '@/components/avatar/index.vue'
	
	export default {
		data() {
			return {
				bgs: "rgba(255,255,255,0)",
				fontcolor: 'navigate-left.png' 
			}
		},
		methods: {
			
		},
		components: {
			"x-avatar": xAvatar,
			"x-navbar": xNavbar,
			"x-status": xStatus
		},
		onPageScroll:function(e){  
			var scrollTop = e.scrollTop / 100
			this.bgs = 'rgba(255,255,255,'+ scrollTop +')'; 
			if (scrollTop > 0.8) {
				this.fontcolor = 'navigate-left-s.png'
			} else {
				this.fontcolor = 'navigate-left.png'
			}
		},
	}
</script>

<style lang="scss">
	/**
	 * 主颜色 1a1a1a
	 * 副标色 646464
	 * 子标色 999999
	 * 
	 * 文本色 444444
	 */
	.details-header {
		top: 0;
		position: fixed;
	}
	
	.details-content {
	    width: 91%;
		margin: -80upx auto;
		position: relative;
		background: rgba(255, 255, 255, 1);
		border-top-left-radius: 30upx;
		border-top-right-radius: 30upx;
		padding: 30upx;
		margin-top: 400upx;
		letter-spacing: 5upx;
		word-break: break-word;
		
		.avatar {
			top: 20upx;
			position: relative;
		}
		.title {
			top: 50upx;
			color: #1a1a1a;
			margin-top: 5upx;
			font-size: 40upx;
		}
		.subtitle {
			top: 0upx;
			color: #999999;
			margin-top: 0upx;
			font-size: 26upx;
		}
		.content {
			word-break: break-word;
			margin-top: 60upx;
			color: #2f2f2f; 
			font-weight: 400;
			font-size: 30upx;
			line-height: 2.1;
		}
	}
	
	
	
	image {
		width: 750upx;
		height: 540upx;
		will-change: transform;
	}
</style>
