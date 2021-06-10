<template>
	<view class="home">
		<!--自定义组件-->
		<navbar></navbar>
		<tab :list="tabList" @tab='tab' :tabIndex="tabIndex"></tab>
		<view class="home-list">
			 <list :tab='tabList' @change1="change11" :activeIndexs="activeIndexs"></list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList:[],
				tabIndex:0,
				activeIndexs:0
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			tab(obj) {
				// console.log(obj)
				const {index} = obj
				this.activeIndexs = index
				// console.log(this.activeIndexs)
			},
			getLabel() {
				// console.log(this.$api)
				this.$api.get_label({
					name:'get_label'
				}).then((res) => {
					// console.log(res)
					const {data} = res;
					this.tabList = data;
				})
			},
			//list子组件传过来的轮播图的current
			change11(current1) {
				this.tabIndex = current1
			}
	}
}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}
	
	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		.home-list {
			flex: 1;
			box-sizing: border-box;
			// border: 1px red solid ;
		}
	}
</style>
