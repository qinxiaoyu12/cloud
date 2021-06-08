<template>
	<view class="content">
		<!--自定义组件-->
		<navbar></navbar>
		<tab :list="tabList"></tab>
		<view v-for="item in 100">{{item}}</view>
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
			getLabel() {
				this.$api.get_label({
					name:'get_label'
				}).then((res) => {
					console.log(res)
					const {data} = res;
					this.tabList = data;
				})
			}
	}
}
</script>

<style lang="scss">

</style>
