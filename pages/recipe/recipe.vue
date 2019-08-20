
<template>
	<view>
		<Tabs
		    :TabList="TabList"
		    :currentTab="current"
		    @tabs="tabsChange"
		>
			<template v-for="(item,index) in data">
				<TabPane :key="index">
					<view class="tab-pane">
						<text class="title">早餐</text>
						<view class="item">
							<image :src="item.oneImg" class="image"></image>
							<view class="text">{{item.oneDes}}</view>
						</view>
						<text class="title">中餐</text>
						<view class="item">
							<image :src="item.twoImg" class="image"></image>
							<view class="text">{{item.twoDes}}</view>
						</view>
						<text class="title">晚餐</text>
						<view class="item">
							<image :src="item.threeImg" class="image"></image>
							<view class="text">{{item.threeDes}}</view>
						</view>
					</view>
				</TabPane>
			</template>
		</Tabs>
	</view>
    
</template>   
<script>
/**
 * 使用stylus预处理器，可能需要自己添加一下
 * 引入tabs 和tabPane组件    
    为tabs 传入 
    tablist（tab标题），
    currentTab（选中的tab）， 
    @tabs事件  改变选中的tabs
    TabList:[
        {title:'商品介绍'},
        {title:'规格参数'},
        {title:'售后保障'}
    ]  
    TabPane 根据 tab的多少添加。  
    更新：  
        在tabPane区域添加了滑动手指事件。横向滑动切换tab。  
        在tabs.vue中的  tabChange方法中发布了全局事件，不需要可以注释掉。这里主要方便tabpane中的内容监听 tabs的切换做出响应。  
*/
import Tabs from '@/components/tabs/tabs.vue'
import TabPane from '@/components/tabs/tabPane.vue'

export default {
	components:{
	    Tabs,
	    TabPane
	},
    data(){
        return{
            current:0,
            TabList:[
                {title:'周一'},
                {title:'周二'},
                {title:'周三'},
				{title:'周四'},
				{title:'周五'}
            ],
			data:[]
        }
    },
	onLoad() {
		uni.request({
		    url: this.$store.state.humor_host+'/recipe/all',
		    data: {
		    },
		    header: {
		    },
		    success: (res) => {
		        this.data = res.data.data;
		    }
		});
	},
    methods:{
        tabsChange(index){
            this.current = index
        }
    },
    
}
</script>
<style scoped>
	.tab-pane{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.item{
		width:700upx;
		display: flex;
		align-items: center;
		padding:10upx 10upx;
		background-color: #FFFFFF;
		border-radius: 10upx;
		margin: 20upx 0;
	}
	.title{
		margin-top: 30upx;
		font-size: 30upx;
	}
	.image{
		width: 150upx;
		height: 150upx;
	}
	.text{
		width: 500upx;
		margin: 30upx;
	}
</style>
