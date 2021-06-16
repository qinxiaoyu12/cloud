<template>
		<view class="icons" @click.stop="likeTap">
			<uni-icons :type="like ? 'heart-filled' : 'heart'" size="20" color="#f07373"></uni-icons>
		</view>		
</template>

<script>
	export default {
		name:"likes",
		props:{
			items:{
				type:Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				like:false
			};
		},
		watch:{
			items(newVal) {
				this.like = this.items.is_like
			}
		},
		created() {
			this.like = this.items.is_like
		},
		methods:{
			likeTap() {
				this.like = ! this.like;
				this.setupdateLikes();
			},
			setupdateLikes() {
				uni.showLoading()
				uni.showToast({
					title:this.like?'收藏成功':'取消收藏',
					icon:'none'
				})
				this.$api.update_like({
					user_id:'60b838ee8a69dc0001bb2e08',
					articel_id:this.items._id
				}).then(res => {
					uni.hideLoading()
					console.log(res)
				}).catch(() => {
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss">
	.icons {
		position: absolute;
		right: 0;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
		// border: 1px red solid;
	}
</style>
