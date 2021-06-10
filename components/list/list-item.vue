<template>
	<list-scroll class="list-scroll">
		<view>
			<list-card :items="items" v-for="(items, index) in list" :key='items._id'></list-card>
		</view>
	</list-scroll>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				item:{}
			}
		}
			}
</script>

<style lang="scss">
	.list-scroll {
		height: 100%;
	}
</style>
