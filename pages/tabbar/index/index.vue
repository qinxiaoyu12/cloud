<template>
	<view class="content">
		<image class="logo" src="
			https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6b4520e2-f268-44e2-94e2-78ed64bbb421/cffca1db-d98e-4fbd-8331-ff49a9efbde3.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="open"></button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
				uniCloud.callFunction({
					name:"login",
					success(res) {
						console.log(res);
					}
				})
		},
		methods: {
				open() {
					uni.chooseImage({
						count:1,
						success(res) {
							const tempFilePath = res.tempFilePaths[0]
							console.log(tempFilePath);
						},
						fail(err) {
							console.log(err);
						}
					})
				}
 		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
