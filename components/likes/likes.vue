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
		methods:{
			likeTap() {
				console.log('收藏成功')
				this.like = ! this.like
				this.setupdateLikes()
			},
			setupdateLikes() {
				this.$api.update_like({
					user_id:'',
					articel_id:'this.items._id'
				}).then(res => {
					console.log(res)
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
