<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@font-face {
		font-family: Helvetica;
		font-weight: normal;
		font-style: normal;
		src: url('./static/PingFang_SC_Semibold.ttf') format('PingFang SC Semibold'),url('./static/Helvetlca.ttf') format('Helvetica-Condensed-Black-Se');
	}
	
	page {
		width: 750upx;
		height: fit-content;
		font-family: Helvetica,"Helvetica Neue","PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background: #f9f9f9;
	}
	.xuni-swiper {
		height: auto !important;
		// height: 87vh !important;
		.uni-swiper-wrapper { 
			overflow: unset !important;
			uni-swiper-item {
				overflow: unset !important;
			}
		}
	}
	
</style>
