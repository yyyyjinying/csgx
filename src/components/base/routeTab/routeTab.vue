<template>
	<div class="routeTab f_row_space_between f_row_align">
		<div class="routeTab-tit">
			<img src="./img/title.png"/>
		</div>
		<div class="nav f_row">
			<div class="f_column_c_c">
				<a class="platform flex f_column_c_c" href="http://172.16.64.43:8087/ps_bigdata/login/index">
					<span class="iconfont icon-icon4"></span>
					<span class="title_nav">平台首页</span>
				</a>
				<span class="line"></span>
			</div>
			<router-link tag="div" :to="{name:item.url}" class="f_column_c_c" v-for="(item,index) in navList" :key="index">
				<span :class="'iconfont '+item.icon"></span>
				<span class="title_nav">{{item.name}}</span>
				<span class="line"></span>
			</router-link>
		</div>
	</div>
</template>

i
<script>
//引入组件
export default {
	components:{
		
	},
	data(){
		return {
			//首页导航信息
			navList: [{
				url:'home',
				name: '首页',
				icon: 'icon-shouye'
			},{
				url:'message',
				name: '基本信息',
				icon: 'icon-jibenxinxi2'
			},{
				url:'business',
				name: '业务规范',
				icon: 'icon-guifan'
			},{
				url:'process',
				name: '流程监督',
				icon: 'icon-liucheng'
			},{
				url:'risk',
				name: '风险分析',
				icon: 'icon-fengxian'
			}]

		}
	},
	methods:{
		
	},
	watch: {
		
	},
	created(){
		
		
	},
	mounted() {

	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~common/stylus/variable';
@import '~common/stylus/mixin';
.routeTab-tit
	
	img
		width:462px;
		height:31px;
.routeTab
	box-sizing: border-box; 
	height:70px;
	padding:0 20px;
	background:$background-home;
	color:$color-FF;
	&-tit
		flex-basis: 450px; 
	h1
		font-size:30px;
		
	.nav
		
		div
			width:106px;
			height:70px;
			box-sizing:border-box;
			cursor:pointer;
			span
				color:$color-FF;
			.iconfont
				font-size:$font-size-large;
			.title_nav
				margin-top:9px;
				font-size:$font-size-large;
.routeTab
	.router-link-exact-active
		background:#0e4a74;
		border-top:3px solid #2a7be2;
.platform:hover
	width:106px;
	height:70px;
	box-sizing:border-box;
	background:#0e4a74;
	border-top:3px solid #2a7be2;
			
</style>