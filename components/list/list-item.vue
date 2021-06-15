<template>
	<list-scroll class="list-scroll" @loadmore="loadmore">
		<view>
			<list-card :items="items" v-for="(items, index) in list" :key='index'></list-card>
			<uni-load-more v-if="list.length === 0 || list.length > 7" status="noMore" iconType="circle" :status="load.loading"></uni-load-more>
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
			},
			load:{
				type:Object,
				default() {
					return {
						loading:"loading"
					}
				}
			}
		},
		data() {
			return {
				item:{}
			}
		},
		methods:{
			loadmore() {
				this.$emit('loadmore')
			}
		}
			}
</script>

<style lang="scss">
	.list-scroll {
		height: 100%;
	}
</style>
