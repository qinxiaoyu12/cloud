<template>
	<view class="navbar">
		<view class="navbar-fixed">
				<view :style="{height: statusBarHeight + 'px'}"></view>
				<view class="navbar-content" :style="{height: navBarHeight + 'px', width:windowWidth + 'px'}">
					<view class="navbar-search">
					<view class="navbar-search_icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-search_text">uni-app vue</view>
				</view>
			</view>
		</view>
		
		<view :style="{height: statusBarHeight + navBarHeight + 'px'}"></view>
	</view>
</template>

<script>
	export default {
		name:"navbar",
		created() {
			//获取手机系统信息
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight;
			this.windowWidth = info.windowWidth
			console.log(info)
			
		// h5 app mp-alipay
		// #ifndef H5 || APP-PLUS || MP-ALIPAY
		// 获取胶囊位置,API getMenuButtonBoundingClientRect 只有在微信小程序运行的时候才会生效，H5端查看会报错
		const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
		this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
		this.windowWidth = menuButtonInfo.left
		// console.log(navBarHeight);
		// #endif
		},
		onLoad() {
		
		},
		data() {
			return {
				statusBarHeight:20,
				navBarHeight:45,
				windowWidth:375
			};
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/icons.css';
	.navbar {
		.navbar-fixed {
			position: fixed;
			left: 0;
			top: 0;
			z-index: 99;
			width: 100%;
			background-color: $mk-base-color;
			.navbar-content {
				display: flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
				height: 45px;
				padding: 0 15px;
				.navbar-search {
					align-items: center;
					border-radius: 30px;
					width: 100%;
					padding: 0 10px;
					display: flex;
					height: 30px;
					background-color: #fff;
					.navbar-search_icon {
						margin-right: 10px;
						// width: 10px;
						// height: 10px;
						// border: 1px red solid;
					}
					.navbar-search_text {
						font-size: 12px;
						color: #999;
					}
				}
			}
		}
	}
</style>
