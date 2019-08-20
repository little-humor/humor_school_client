<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			// 获取平台展示信息
			this.$store.dispatch("getOrgIntroduction");
			// 获取供应商名称
			uni.getProvider({
			    service: 'oauth',
			    success: function (res) {
			        console.log(res.provider)
					//登陆 -->获取用户在平台注册的基本信息
			        uni.login({
			            provider: res.provider,
			            success: function (loginRes) {
							//loginRes用户登录凭证（有效期五分钟)
			                
			            }
			        });
			    }
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
