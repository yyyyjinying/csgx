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
				<div v-if="isShowWarn" class="process-overseer f_column">
					<p class="overseer-msg">项目流程监督预警：存在审批要素不齐，审批时限不合理，逆流程等问题</p>
					<div class="overseer-box f_row flex">
						<div class="overseer-item f_column">
							<h2>高</h2>
							<div class="overseer-item-con f_column_c">
								<p @click="showWarnHandle" v-for="(item,index) in overseerData.list01" :key="index">{{index}}. {{item}}</p>
							</div>
						</div>
						<div class="overseer-item f_column">
							<h2>中</h2>
							<div class="overseer-item-con f_column_c">
								<p @click="showWarnHandle" v-for="(item,index) in overseerData.list02" :key="index">{{index}}. {{item}}</p>
							</div>
						</div>
						<div class="overseer-item f_column">
							<h2>低</h2>
							<div class="overseer-item-con f_column_c">
								<p @click="showWarnHandle" v-for="(item,index) in overseerData.list03" :key="index">{{index}}. {{item}}</p>
							</div>
						</div>
						<div class="overseer-item f_column">
							<h2>正常</h2>
							<div class="overseer-item-con f_column_c">
								<p @click="showWarnHandle" v-for="(item,index) in overseerData.list04" :key="index">{{index}}. {{item}}</p>
							</div>
						</div>
					</div>
					<p class="overseer-tip">高：存在<span>3</span>个以上问题的项目；中：存在<span>2</span>个问题的项目；低：存在<span>1</span>个问题的项目；正常：目前<span>未</span>发现问题的项目。</p>
				</div>
				<!-- 点击进程后的切换页面
				<router-view></router-view> -->
				<!-- 流程进度表 -->
				<div v-else class="process-sheet f_column">
					<h2 class="sheet-title f_row_c_c">土地建筑信息核查阶段项目列表 <button type="button" @click="warnHandle">监督预警</button></h2>
					<div class="flex table-box">
						<table>
							<tbody>
								<tr class="t-title">
									<td><span>项目名称</span></td>
									<td><span>开发建设用地面积</span><span>（万平方米）</span></td>
									<td><span>总投资</span><span>（万元）</span></td>
									<td><span>项目状态</span></td>
									<td><span>建设单位</span></td>
									<td><span>项目位置</span></td>
								</tr>
								<tr>
									<td>正山甲（一期）</td>
									<td>3.79</td>
									<td>180000</td>
									<td>在建</td>
									<td>深圳市宜泰置业发展有限公司</td>
									<td>位于坪山中心区，为规划兰竹西路、长安二街、金丰路所围合区域</td>
								</tr>
								<tr>
									<td>汤坑第一工业区</td>
									<td>4.90</td>
									<td>100000</td>
									<td>在建</td>
									<td>深圳市盛城和记房地产开发有限公司</td>
									<td>北临坪山大道，南靠同富路，东面为汤坑路，西面是城市绿化用地</td>
								</tr>
								<tr>
									<td>新和</td>
									<td>2.80</td>
									<td>200000</td>
									<td>已批规划</td>
									<td>深圳市百佳利华房地产开发有限公司</td>
									<td>位于坪山中心区，为规划兰竹西路、昌盛路、龙坪路和金丰路所围合区域</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<!-- 预警图表 -->
			<div v-else class="main f_column_c flex border_radius">
				<div class="title_back f_row_align">
					<h1 class="line-title">项目流程图</h1>
					<button class="back" type="button" @click="showWarnHandle">返回</button>
				</div>
			
				<div class="process-preson">
					<div class="process-ico">
						<div class="item-ico">
							<span class="img-ico" v-if="icoActiveShow == 0"></span>
							<span class="f_p_hidden ico-active" @click="positionHandle(0)">计划申报前阶段</span>
							<div class="item-line-ico">
								<div class="item-ico">
									<span class="img-ico" v-if="icoActiveShow == 1"></span>
									<span class="f_p_hidden" @click="positionHandle(1)">计划申报前阶段</span>
									<div class="item-line-ico">
										<div class="item-ico">
											<span class="img-ico" v-if="icoActiveShow == 2"></span>
											<span class="f_p_hidden" @click="positionHandle(2)">计划申报前阶段</span>
											<div class="item-line-ico">
												<div class="item-ico">
													<span class="img-ico" v-if="icoActiveShow == 3"></span>
													<span class="f_p_hidden" @click="positionHandle(3)">计划申报前阶段</span>
													<div class="item-line-ico item-line-ico-rotate">
														<div class="item-ico">
															<span class="img-ico" v-if="icoActiveShow == 4"></span>
															<span class="f_p_hidden" @click="positionHandle(4)">计划申报前阶段</span>
															<div class="item-line-ico item-line-ico-rotate">
																<div class="item-ico">
																	<span class="img-ico" v-if="icoActiveShow == 5"></span>
																	<span class="f_p_hidden" @click="positionHandle(5)">计划申报前阶段</span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<!-- <div class="item-ico">
							<span class="f_p_hidden">计划申报前阶段</span>
							<div class="item-line-ico"></div>
						</div> -->
						
					</div>

					<!-- <img class="tubiao" src="./img/tubiao.png"/> -->
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
			icoActiveShow:3,//等是否点亮
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
			}],
			overseerData:{
				list01:['正山甲（一期）','马西','马东','汤坑老围','望牛岗'],
				list02:['正山甲（二期）','汤坑第一   工业区','新和','飞西','谷仓吓'],
				list03:['世界塑胶厂','洋母帐','牛角龙','六和商业广场','均田','龙田路口','飞东','三洋湖'],
				list04:['江边','东门','横岭塘','新兴街','宝山南','澳子头','坪山围','宝山北','汤坑老村']
			},
			positionData:[{
				left:"-50px",
				top:"40px"
			},{
				left:"60px",
				top:"130px"
			},{
				left:"200px",
				top:"248px"
			},{
				left:"320px",
				top:"365px"
			},{
				left:"750px",
				top:"190px",
				transform:'scale(-1,1)'
			},{
				left:"920px",
				top:"10px",
				transform:'scale(-1,1)'
			}]

		}
	},
	computed:{
	},
	methods:{
		//点击定位
		positionHandle(index) {
			this.position = this.positionData[index]
			// this.icoActiveShow = index
		},
		//显示预警图表
		showWarnHandle() {
			this.isWarnSheet = !this.isWarnSheet
			if(this.isWarnSheet){
				this._setPostion()
			}else{
				this.position = {
					left:'-50px',
					top:'40px'
				}
			}
		},
		//点击预警切换
		warnHandle() {
			this.isShowWarn = true
			this.processList.forEach((item,idx) => {
				item.active = true
			})
		},
		//点击切换预警
		routeHandle(index) {
			this.isShowWarn = false
			this.processList.forEach((item,idx) => {
				item.active = true
				if(index == idx){
					item.active = false
				}
			})
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
			},1000)
		}
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
.table-box
	overflow:auto;
	margin:0 30px 30px 30px;
table
	width:100%;
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
.overseer-tip
	height:40px;
	span
		font-size:18px;
		&:nth-of-type(1)
			color:#bc3f27;
		&:nth-of-type(2)
			color:#ff8a00;
		&:nth-of-type(3)
			color:#2a7be2;
		&:nth-of-type(4)
			color:#4cb32c;
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
				cursor:pointer;
				padding:0 20px;
				box-sizing:border-box;
				line-height:28px;
				font-size:14px;
				color:#fff;

.process-preson
	width:100%;
	margin-left:100px;
	position:relative;
	margin-top:100px;
	overflow-:auto;
	.ren
		transition:1s;
		position:absolute;
		left:340px;
		top:350px;
.sheet-title{
	font-size:18px;
	height:103px;
    position:relative;
}
.sheet-title button{
    position:absolute;
    left:30px;
    top:0;
    font-size:16px;
    background:rgba(255,255,255,.8);
	cursor:pointer;
}
.title_back
	width:100%;
	.back
		width:80px;
		height:30px;
		border-radius:4px;
		margin-left:auto;
		margin-right:30px;
		
.process-ico
	.item-ico
		width:145px;
		height:43px;
		background:#22bbc2;
		border-radius:4px;
		display:flex;
		justify-content:center;
		align-items:center;
		padding:0 4px;
		box-siziing:border-box;
		text-align:center;
		position:relative;
		.img-ico
			position:absolute;
			right:6px;
			top:-8px;
			display:block;
			width:20px;
			height:28px;
			background:url(./img/deng.png) no-repeat;
		.item-line-ico
			border-bottom:1px solid #fff;
			position:absolute;
			right:-88px;
			top:43px;
			&::after
				position:absolute;
				right:-15px;
				top:-3px;
				content:'';
				display:block;
				border: 4px solid transparent;
				border-left: 15px solid #fff;
				width: 0;
				height: 0px;
			&:nth-of-type(1)
				width:90px;
				transform-origin:left top 0;
				transform:rotate(48deg);
			.item-ico
				position:absolute;
				transform:rotate(-48deg) translateX(52px);
				top:40px;
				right:-60px;
		.item-line-ico-rotate
			top:0;
			transform:rotate(-45deg);
			&:nth-of-type(1)
				right:-167px;
				width:167px;
				transform-origin:left top 0;
				transform:rotate(-48deg);
			.item-ico
				position:absolute;
				transform:rotate(48deg) translateX(62px);
				top:-86px;
				right:-60px;
				
		span
			font-size:16px;
			color:#fff;
			line-height:1.2;
			position:relative;
		
			
				
					
				
				
</style>