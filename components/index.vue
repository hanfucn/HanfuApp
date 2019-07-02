<template>
	
	<view class="">
		<text class="a">header</text>
		
	</view>

</template>

<script>
</script>

<style>
	.header {
		width: 92%;
		padding: 0 4%;
		height: 97.2upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #F8F8F8;
	
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
	}
</style>
