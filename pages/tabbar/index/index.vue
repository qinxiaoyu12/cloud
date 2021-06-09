<template>
	<view class="home">
		<!--自定义组件-->
		<navbar></navbar>
		<tab :list="tabList" @tab='tab'></tab>
		<list-scroll>
			<list-card mode="base"></list-card>
			<list-card mode="image"></list-card>
			<list-card mode="column"></list-card>
		</list-scroll>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList:[]
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			tab(item, index) {
				console.log(item,index)
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
	}
</style>
