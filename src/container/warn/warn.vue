<template>
	<div class="process f_row" id="process">
		<nav-list @listHandle="listHandle" :list="list" @searchHandle="searchHandle"></nav-list>
		<div class="process_detail f_column flex">
			<!-- 详情标题信息 -->
			<div class="title_box f_row_align border_radius">
				<img src="../../../static/img/location_icon.png">
				<span>{{ titleText }}</span>
				<!-- <i class="f_row_align">项目综合风险指数：<b>76</b></i> -->
			</div>	
			<!-- 非预警正常 -->
			<div v-if="!isWarnSheet" class="main f_column flex border_radius">
				<div class="process-line">
					<h1 class="line-title">项目流程图</h1>
					<div class="box-line f_row_align">
						<div @click="routeHandle(index)" :class="!item.active?'line_active line':'line'" v-for="(item,index) in processList" :key="index">
							<div class="Item">
								<span class="long"></span>
								<div class="itemCon f_row_c_c">
									<span class="f_p_hidden">{{item.name}}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<!-- 流程监督预警 -->
				<div v-if="isWarn" class="process-overseer f_column">
					<p class="overseer-msg">项目流程监督预警：存在审批要素不齐，审批时限不合理，逆流程等问题</p>
					<div class="overseer-box f_row flex">
						<div class="overseer-item f_column">
							<h2>高</h2>
							<div class="overseer-item-con f_column_c">
								<p @click="showWarnHandle">1. 正山甲（一期）</p>
								<p>2. 马西</p>
								<p>3. 马东</p>
								<p>4. 汤坑老围</p>
								<p>5. 望牛岗</p>
							</div>
						</div>
						<div class="overseer-item f_column">
							<h2>中</h2>
							<div class="overseer-item-con f_column_c">
								<p>1. 正山甲（一期）</p>
								<p>2. 马西</p>
								<p>3. 马东</p>
								<p>4. 汤坑老围</p>
								<p>5. 望牛岗</p>
							</div>
						</div>
						<div class="overseer-item f_column">
							<h2>低</h2>
							<div class="overseer-item-con f_column_c">
								<p>1. 正山甲（一期）</p>
								<p>2. 马西</p>
								<p>3. 马东</p>
								<p>4. 汤坑老围</p>
								<p>5. 望牛岗</p>
							</div>
						</div>
						<div class="overseer-item f_column">
							<h2>正常	</h2>
							<div class="overseer-item-con f_column_c">
								<p>1. 正山甲（一期）</p>
								<p>2. 马西</p>
								<p>3. 马东</p>
								<p>4. 汤坑老围</p>
								<p>5. 望牛岗</p>
							</div>
						</div>
					</div>
				</div>
				<!-- 点击进程后的切换页面 -->
				<router-view></router-view>
			</div>
			<!-- 预警图表 -->
			<div v-else class="main f_column_c flex border_radius">
				<h1 class="line-title">项目流程图</h1>
			
				<div class="process-preson">
					<img class="tubiao" src="./img/tubiao.png"/>
					<img class="ren" :style="position" src="./img/ren.png"/>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import Vue from 'vue'
import api from '@/api'
import * as Config from 'config'
import { mapState,mapMutations } from 'vuex';
import NavList from "components/navList/navList"

//引入组件
export default {
	components:{
		NavList
	},
	data(){
		return {
			isShowWarn:true,//是否显示警示
			isWarnSheet:false,//不显示
			ProjectList:[],//流程数据
			process_name:'',//主进程名称
			titleText:'',
			tabNavIndex:0,//tabNav下标
			index:0,//点击选择指定的list记录数
			project_id:0,//项目id
			mainId:0,//主进程id
			listNew:[],
			list:[],
			tabList:[],
			position:{
				left:'-50px',
				top:'40px'
			},
			processList:[{
				active:true,
				name:'更新单元计划审查阶段'
			},{
				active:true,
				name:'土地建筑物核查及处置阶段'
			},{
				active:true,
				name:'更新单元规划审批阶段'
			},{
				active:true,
				name:'实施主体确认阶段'
			},{
				active:true,
				name:'建设用地审批阶段'
			},{
				active:true,
				name:'建设工程管理与监督阶段'
			}]
		}
	},
	computed:{
		...mapState([
			'isWarn'
		])
	},
	methods:{
		...mapMutations({
            setWarnHandle:'SET_WARN_HANDLE'
		}),
		//显示预警图表
		showWarnHandle() {
			this.isWarnSheet = true
			this._getInformation()
		},
		//点击进度跳转切换
		routeHandle(index) {
			this.setWarnHandle(false)
			this.processList.forEach((item,idx) => {
				item.active = true
				if(index == idx){
					item.active = false
				}
			})
			this.$router.push({ name: 'processDetail',params:{id:index} })
		},
		//请求栏目列表接口
		_getInformation() {
			this.$http.get(api.QueryProjectList).then(response => {
			if(response.body.success){
				//基础设置 start			
				this.list = response.body.status
				this.project_id = this.list[0].id
				this.titleText = this.list[0].projectname
				this._GetMainProcess()			
			}
			},(response) => {this.error = response.body.msg})
		},
		//根据项目id查询工程是否逆流程
		_GetReverseFlowResult() {
			this.$http.get(api.GetReverseFlowResult,{params: {
				project_id:this.project_id
			}
		}).then(response => {
			if(response.body.success){
				console.log(response.body)		
			}
			},(response) => {this.error = response.body.msg})
		},
		//点击tab切换
		tabHandle(item,index) {
			this.process_name = item.process_name
			this.mainId = item.id
			this.tabNavIndex = index
			this._GetReverseByProject()
		},
		searchHandle(e) {
			if(!this.listNew.length){
				this.listNew = this.list
			}
			if(!e){
				this.list = this.listNew
				return
			}
			this.list = this.listNew.filter((item,index) => {
				if(item.text == e){
					return item
				}
				
			})
		},
		//点击左边列表触发
		listHandle(item,index) {
			this.titleText = item.projectname
			console.log(this.titleText)
			this.index = index
			this.project_id = item.id
			this._GetReverseByProject()
		},
		//请求主进程tab接口
		_GetMainProcess() {
			this.$http.get(api.GetMainProcess).then(response => {
			if(response.body.success){
				//基础设置 start			
				this.tabList = response.body.MainProcessList
				this.mainId = this.tabList[0].id
				this.process_name = this.tabList[0].process_name
				this._GetReverseByProject()			
			}
			},(response) => {this.error = response.body.msg})
		},
		//请求主进程tab接口
		_GetReverseByProject() {
			this.$http.get(api.GetReverseByProject,{
				params: {
					project_id:this.project_id,
					mainid:this.mainId
				}
			}).then(response => {
			if(response.body.success){
				this.ProjectList = response.body.ProjectReverseList
			}
			},(response) => {this.error = response.body.msg})
		},
		//设置位置
		_setPostion() {
			setTimeout(() => {
				this.position = {
					left:'340px',
					top:'350px'
				}
			},2000)
		}
	}, 
	watch: {
		
	},
	created(){
		
	},
	mounted() {
		this._setPostion()
		
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~common/stylus/variable';
@import '~common/stylus/mixin';
.result
	color:#c79b44;
	font-size:18px;
.title_box
	background:rgba(86,86,86,.18);
	padding:0 16px;
	box-sizing:border-box
	height:46px;
	border:1px solid #fff;
	margin-bottom:16px;
	i
		font-size:16px;
		color:#fff;
		margin-left:auto;
		b
			font-size:30px;
			color:#ffbe32;
	img
		margin-right:8px;
	span
		color:#fff;
		&:nth-of-type(1)
			margin-right:8px;
			font-size:16px;
		&:nth-of-type(2)
			font-size:16px;
.border_radius
	border-radius:6px;
.main
	border:1px solid #fff;	
.tab_list
	width:800px;
	margin:24px auto;
	div
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size:14px;
		border:1px solid #2a7be2;
		width:126px;
		height:40px;
		text-align:center;
		border-radius:4px;
		padding:0 20px;
		box-sizing:border-box;
		cursor:pointer;
		&.active
			background:#2a7be2;
			color:#fff;
.tip_msg
	margin-top:80px;
	p
		margin-bottom:10px;
		color:#c79b44;
.tab_con
	img
		width:749px;
		height:489px;
.project_title
	font-size:18px;
	margin:10px 0 38px 0;
.project_list
	border-top:1px solid #fff;
	border-left:1px solid #fff;
	
	div
		span
			width:130px;
			height:56px;
			line-height:56px;
			border-right:1px solid #fff;
			border-bottom:1px solid #fff;
			text-align:center;
			&.active
				color:#c79b44;


.box-line
	margin-top:80px;
	margin-left:40px;
.line
	&:last-child
		width:8%;
		.Item
			left:100%;
.line	
	background:#000;
	border:1px solid #fff;
	height:8px;
	width:16%;
	border-right-width:0;
	border-left-width:0;
	position:relative;
	cursor:pointer;
	&:nth-of-type(1)
		&::after
			content:'';
			display:block;
			width:16px;
			height:16px;
			box-sizing:border-box;
			background:#fff;
			border-radius:50%;
			left:50%;
			margin-left:-8px;
			top:50%;
			margin-top:-4px;
			border:4px solid #22bbc2;
	.Item
		width:36px;
		height:36px;
		position:absolute;
		box-sizing:border-box;
		background:#fff;
		border-radius:50%;
		left:50%;
		margin-left:-18px;
		top:50%;
		margin-top:-18px;
		border:4px solid #22bbc2;
		.long
			width:4px;
			height:16px;
			background:#22bbc2;
			position:absolute;
			left:50%;
			margin-left:-2px;
			top:-16px;
		.itemCon
			position:absolute;
			top:-60px;
			left:50%;
			margin-left:-70px;
			width:140px;
			height:44px;
			border-radius:8px;
			background:	#22bbc2;
			padding:0 14px;
			box-sizing:border-box;
			text-align:center;
			span		
				font-size:14px;
				line-height:18px;
				color:#fff;
				
.line_active
	background:#000;
	.Item
		background:#fff;
		border-color:#ff9c00;
		.long
			background:#ff9c00;
		.itemCon
			background:#ff9c00;
.title_box
	background:rgba(86,86,86,.18);
	padding:0 16px;
	box-sizing:border-box
	height:46px;
	border:1px solid #fff;
	margin-bottom:16px;
	i
		font-size:16px;
		color:#fff;
		margin-left:auto;
		b
			font-size:30px;
			color:#ffbe32;
	img
		margin-right:8px;
	span
		color:#fff;
		&:nth-of-type(1)
			margin-right:8px;
			font-size:16px;
		&:nth-of-type(2)
			font-size:16px;
.line-title
	height:50px;
	font-size:18px;
	line-height:50px;
	padding-left:28px;
	align-self:flex-start;
.sheet-title
	font-size:18px;
	height:103px;
table
	margin:0 35px;
	tbody
		border-left:1px solid #fff;
		tr
			&:nth-of-type(1)
				border-top:1px solid #fff;
			&:hover
				background:#0f4064;
			td
				padding:0 9px;
				height:58px;
				text-align:center;
				border-right:1px solid #fff;
				border-bottom:1px solid #fff;
				vertical-align: middle;
				span
					display:block;
					&:nth-of-type(2)
						margin-top:2px;
				&:nth-of-type(2)
					width:120px;
				&:nth-of-type(3)
					width:60px;
				&:nth-of-type(4)
					width:60px;
.t-title
	background:#16477a;
.process-line
	flex:1;	
.process-sheet
	flex:3;
.process-overseer
	flex:3;
	padding:0 26px;
.overseer-msg
	padding-left:11px;
	height:68px;
	line-height:68px;
	font-size:18px;
	font-weight:bold;
	color:#ffc600;
.overseer-box
	margin-bottom:30px;
	.overseer-item
		flex:1;
		margin:0 11px;
		border-radius:4px;
		&:nth-of-type(1)
			border:1px solid #ce4323;
			h2
				background:#ce4323;
		&:nth-of-type(2)
			border:1px solid #ff8a00;
			h2
				background:#ff8a00;
		&:nth-of-type(3)
			border:1px solid #2a7be2;
			h2
				background:#2a7be2;
		&:nth-of-type(4)
			border:1px solid #4cb32c;
			h2
				background:#4cb32c;
		h2
			height:46px;
			line-height:46px;
			text-align:center;
			background:#cd3915;
			color:#fff;
			font-size:18px;
			font-weight:bold;
		.overseer-item-con
			padding:18px 0;
			p
				width:100%;
				padding:0 20px;
				box-sizing:border-box;
				line-height:28px;
				font-size:14px;
				color:#fff;

.process-preson
	width:865px;
	height:379px;
	position:relative;
	margin-top:100px;
	.tubiao
		width:100%;
		height:100%;
	.ren
		transition:1s;
		position:absolute;
		// left:-50px;
		// top:40px;

</style>