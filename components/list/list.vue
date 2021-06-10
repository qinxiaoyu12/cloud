<template>
	<swiper class="home-swiper" @change="change1" :current="activeIndexs">
		<swiper-item class="swiper-item" v-for="(item, index) in tab" :key='index'>
			<listItem></listItem>
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from './list-item.vue'
	export default {
		name:"list",
		components:{
			listItem
		},
		props:{
			tab:{
				type:Array,
				default() {
					return []
				}
			},
			activeIndexs:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				activeIndex:0
			};
		},
		methods:{
			change1(e) {
				const {current} = e.detail
				// console.log(e)
				this.$emit('change1', current)
				// console.log(current)
			}
		}
	}
</script>

<style lang="scss">
	.home-swiper {
		height: 100%;
		.swiper-item {
			height: 100%;
			overflow: hidden;
			.list-scroll {
				height: 100%;
			}
		}
	}
</style>
