<template>
	<view>
		<!--基础卡片-->
		<view class="listCard" v-if="mode === 'base'">
			<view class="listCard-image">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			
			<view class="listCard-content">
				<view class="listCard-content_title">
					<text style="display: -webkit-box;
											-webkit-box-orient: vertical;
											-webkit-line-clamp: 2;
											overflow: hidden;
											word-break: break-all;">uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架</text>
				</view>
				
				<view class="listCard-content_des">
					<view class="listCard-content__des-label">
						<view class="listCard-content__des-label-item">前端</view>
					</view>
					<view class="listCard-content__des-browse">120浏览</view>
				</view>
			</view>
		</view>
		
		<!--多图卡片-->
		<view class="listCard mode-column" v-if="mode ==='column'">
		
			<view class="listCard-content">
				<view class="listCard-content_title">
					<text style="display: -webkit-box;-webkit-box-orient: vertical;
											-webkit-line-clamp: 2;overflow: hidden;word-break: break-all;">uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架</text>
				</view>
				
				<view class="listCard-image" >
					<view v-for="item in 3" :key="item" class="listCard-image__item">
						<image src="../../static/logo.png" mode="aspectFill"></image>
					</view>
				</view>
				
				<view class="listCard-content_des">
					<view class="listCard-content__des-label">
						<view class="listCard-content__des-label-item">前端</view>
					</view>
					<view class="listCard-content__des-browse">120浏览</view>
				</view>
			</view>
			
		</view>
		
		<!--大图卡片-->
		<view class="listCard mode-image" v-if="mode === 'image'">
			<view class="listCard-image" >
					<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="listCard-content">
				
				<view class="listCard-content_title">
					<text style="display: -webkit-box;-webkit-box-orient: vertical;
											-webkit-line-clamp: 2;overflow: hidden;word-break: break-all;">uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架</text>
				</view>
				
				<view class="listCard-content_des">
					<view class="listCard-content__des-label">
						<view class="listCard-content__des-label-item">前端</view>
					</view>
					<view class="listCard-content__des-browse">120浏览</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"list-card",
		props:{
			mode:{
				type:String,
				default:'base'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.listCard {
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;
		.listCard-image {
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.listCard-content {
			justify-content: space-between;
			display: flex;
			flex-direction: column;
			padding-left: 10px;
			width: 100%;
			.listCard-content_titel {
				font-size: 14px;
				color: #333;
				font-weight: 400;
				line-height: 1.2;
			}
			.listCard-content_des {
				display: flex;
				justify-content: space-between;
				margin-top: 10px;
				font-size: 12px;
				.listCard-content__des-label {
					display: flex;
					.listCard-content__des-label-item {
						padding: 0 5px;
						margin-right: 5px;
						border-radius: 15px;
						color: $mk-base-color;
						border: 1px $mk-base-color solid;
					}
				}
				.listCard-content__des-browse {
					color: #999;
					line-height: 1.5;
				}
			}
		}
	
		&.mode-column {
			.listCard-content {
				width: 100%;
				padding-left: 0;
			}
			.listCard-image {
				display: flex;
				margin-top: 10px;
				width: 100%;
				height: 70px;
				.listCard-image__item {
					margin-left: 10px;
					width: 100%;
					border-radius: 5px;
					overflow: hidden;
					&:first-child {
						margin-left: 0;
					}
					image {
						width: 100%;
						height: 100%;
					}
				}
			}
			
			.listCard-content_des {
				margin-top: 10px;
			}
		}
	  &.mode-image {
			flex-direction: column;
			.listCard-image {
				width: 100%;
				height: 100px;
			}
			.listCard-content {
				padding-left: 0;
				margin-top: 10px;
				.listCard-content_des {
					display: flex;
					align-items: center;
					margin-top: 10px;
				}
			}
		}
	}
</style>
