<template>
	<view>
		<!-- 标题 -->
		<view style="text-align: center;font-size: 20px;">
			{{title}}
		</view>
		<!-- 其他基本信息 -->
		<view class="">
			<view></view>
			<view></view>
		</view>
		<!-- 文章内容 -->
		<view class="content">
			<template v-if="richText=='content'">
				<uparse :content="content" noData="暂无数据" ></uparse>
			</template>
			<template v-else-if="richText=='employment'">
				<uparse :content="employment" noData="暂无数据" ></uparse>
			</template>
			
		</view>
	</view>
</template>

<script>
	import uparse from '@/components/u-parse/u-parse.vue';
	import {mapState} from 'vuex';
	export default {
		name:'articleInfo',
		components:{
			uparse
		},
		data() {
			return {
				richText:''
			}
		},
		onLoad(option) {
			this.richText = option.flag;
			let title = '';
			if(this.richText=='content'){
				title = '学校简介'
			}else if(this.richText=='employment'){
				title = '招生简章'
			}
			wx.setNavigationBarTitle({
			      title: title
			});
		},
		computed:{
			...mapState({
				content: state=>state.orgIntroduction.content,
				employment: state=>state.orgIntroduction.employment,
				title: state=>state.orgIntroduction.name
			})
		},
		methods: {
		
		}
	}
</script>

<style scoped>
	.content{
	}
</style>
