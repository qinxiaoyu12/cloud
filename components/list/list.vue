<template>
	<swiper class="home-swiper" @change="change1" :current="activeIndexs">
		<swiper-item class="swiper-item" v-for="(item, index) in tab" :key='index'>
			<listItem :list="listCatch[index]"></listItem>
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
				},
			},
			activeIndexs:{
				type:Number,
				default:0
			}
		},
		created() {
			// this.getList(0)
		},
		watch:{
			tab(newVal) {
				if(newVal.length === 0) return
				this.getList(this.activeIndex)
			}
		},
		data() {
			return {
				activeIndex:0,
				list:[],
				listCatch:{}
			};
		},
		methods:{
			change1(e) {
				const {current} = e.detail
				this.$emit('change1', current)
				//当数据不存在或者是数据长度为0时
				if (!this.listCatch[current] || this.listCatch[current].length === 0) {
					this.getList(current)
				}
			},
			getList(current) {
				this.$api.get_list({name:this.tab[current].name}).then(res => {
					console.log(res)
					const {data} = res
					this.list = data
					console.log(this.listCatch)
					this.$set(this.listCatch, current, data)
				})
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
