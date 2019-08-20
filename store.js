import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex)
export default new Vuex.Store({  
    state: {  
		humor_host:'http://47.95.109.142/api',
        orgIntroduction:{
			//学校名称
			name:'',
			// 学校简介
			content:'',
			//招生简章
			employment:'',
			//logo
			logo:'',
			//学校联系电话
			mobile:'',
			//轮播图列表
			carouselList: [],
		},
		userBasicInfo:{},
		tUser:undefined,
		sUser:undefined
    },  
    mutations: {  
        updateorgIntroduction(state,orgIntroduction){
			state.orgIntroduction = orgIntroduction;
		},
		updateUserBasicInfo(state,userInfo){
			state.userBasicInfo = userInfo;
		}
    },
	actions:{
		/**
		 * 获取学校基本信息
		 */
		getOrgIntroduction(content){
			uni.request({
			    url: content.state.humor_host+'/orgIntroduction/info', //仅为示例，并非真实接口地址。
			    data: {
			    },
			    header: {
			    },
			    success: (res) => {
			        let data = res.data.data;
					let result = {};
					result.carouselList = data.carouselStr.split(',');
					result.content = data.content;
					result.employment = data.employment;
					result.logo = data.logo;
					result.mobile = data.mobile;
					result.name = data.name;
					content.commit('updateorgIntroduction',result);
			    }
			});
		},
		/**
		 * 获取用户基本信息
		 */
		getUserInfo(content,code){
			console.log("登陆认证码:",code);
			uni.request({
				url:content.state.humor_host+'/basic/userInfo',
				data:{
					code:code
				},
				success(res) {
					
				},
				fail() {
					
				}
			})
		}
		
	}
}) 