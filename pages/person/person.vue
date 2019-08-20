<template>
	<scroll-view scroll-y class="content">
		<!-- 头部区域 -->
		<view class="header">
			<view style="display: flex;flex-direction: row;margin: 30upx 0 0 35upx;">
				<image :src="userBasicInfo.avatarUrl" style="width: 160upx;height: 160upx;border-radius: 50%;"></image>
				<view style="display: flex;flex-direction: column;justify-content: center;align-items:center;margin-left: 30upx;">
					<text style="font-size: 32upx;">{{userBasicInfo.nickName}}</text>
				</view>
			</view>
			<view class='orgInfo'>
			    <view class='info'>
				  <text style="font-size: 24upx;" space="emsp">班级:</text>
				  <text>{{'一年级&一班'}}</text>
			    </view>
			    <view class='line'></view>
			    <view class='info'>
			      <text style="font-size: 24upx;" space="emsp">身份:</text>
			      <text>{{identity}}</text>
			    </view>
			  </view>
		</view>
		<!-- 分类 -->
		<view class="cate-section">
			<view class="cate-item" @click="navToOrgEmploymentPage">
				<image src="/static/classify/c5.png"></image>
				<text>请假</text>
			</view>
			<view class="cate-item" @click="navToOrgIntroductionPage">
				<image src="/static/classify/c3.png"></image>
				<text>考勤</text>
			</view>
			<view class="cate-item">
				<image src="/static/classify/c6.png"></image>
				<text>作业</text>
			</view>
			<view class="cate-item" @click="navToRecipePage">
				<image src="/static/classify/c7.png"></image>
				<text>相册</text>
			</view>
			<view class="cate-item" @click="navToRecipePage">
				<image src="/static/classify/c5.png"></image>
				<text>课程</text>
			</view>
			<view class="cate-item" @click="navToRecipePage">
				<image src="/static/classify/c3.png"></image>
				<text>缴费</text>
			</view>
		</view>
		<!-- 最新通知 -->
		<view>
			  <uniNoticeBar 
			     single="true" 
			     text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏">
			 </uniNoticeBar>
		</view>
		<button open-type="getUserInfo" bindgetuserinfo="getUserInfo">登陆</button>
	</scroll-view>
</template>

<script>
import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue"
import {mapState} from 'vuex';
export default {
	components:{
		uniNoticeBar
	},
	data() {
		return {
			
		};
	},
	onLoad() {
		
	},
	computed:{
		...mapState([
			'userBasicInfo',
		]),
		userInfo(){
			return this.$store.state.tUser ? this.$store.state.tUser : this.$store.state.sUser;
		},
		identity(){
			return this.$store.state.tUser ? '老师' : '学生';
		}
		
	},
	methods:{
		getUserInfo(res){
			console.log(res)
		}
	}
};
</script>

<style lang="scss" scoped>
	.content{
		display: flex;
		flex-direction: column;
	}
	.header{
		width: 750upx;
		height: 300upx;
		display: flex;
		flex-direction: column;
		background-image: url(https://humor-public.oss-cn-beijing.aliyuncs.com/img/common/beijing.jpeg);
		background-size: 100% 100%;
		color: #FFFFFF;
		position: relative;
	}
	.orgInfo{
	  width: 750upx;
	  background-color: rgba(0,0,0,0.2);
	  display: flex;
	  justify-content: space-around;
	  align-items: center;
	  font-size: 28upx;
	  position: absolute;
	  bottom: 0;
	  .info{
	    width: 45%;
	    height: 80upx;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	  }
	}
	.line{
	  height: 50upx;
	  width: 2upx;
	  background-color:#c8c7cc;
	}
	.cate-section{
		position:relative;
		z-index:5;
		border-radius:16upx 16upx 0 0;
		margin-top:-20upx;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	/* 分类 */
	.cate-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap:wrap;
		padding: 30upx 22upx; 
		background: #fff;
		.cate-item {
			margin: 5px 0;
			width: 117upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
		}
		/* 原图标颜色太深,不想改图了,所以加了透明度 */
		image {
			width: 60upx;
			height: 60upx;
			margin-bottom: 14upx;
			border-radius: 50%;
			opacity: .7;
			box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
		}
	}
</style>
