<template>
	<div class="message f_row" id="message">
	<nav-list @listHandle="listHandle" :list="list" @searchHandle="searchHandle"></nav-list>
	<!-- <tab-list></tab-list> -->
	 <div class="detail_msg information">
		<!-- 详情标题信息 -->
        <div class="title_box f_row_align border_radius">
            <img src="../../../static/img/location_icon.png">
            <span>{{ titleText }}</span>
            <i class="f_row_align">项目综合风险指数：<b>76</b></i>
        </div>
		<!-- 详细信息 -->
        <div class=" project_information_content">
        	<div class="information_left">
        		<img src="../../../static/img/information_img.jpg" alt="" class="information_img" />
        	</div>
        	<div class="information_text flex">
				<!-- <table id="table">
					<tbody>
						<tr>
							<td class="td01">用地面积：</td>
							<td  class="td02">{{listDetail.land_area}}</td>
							<td  class="td03">测算容积率：</td>
							<td  class="td04">{{listDetail.measured_volume_rate}}</td>
						</tr>
						<tr>
							<td class="td01">承建单位：</td>
							<td class="td02">{{listDetail.construction_unit}}</td>
							<td class="td03">建设单位：</td>
							<td class="td04">{{listDetail.developmentunit_name}}</td>
						</tr>
						<tr>
							<td class="td01">总投资：</td>
							<td class="td02">{{listDetail.total_investment}}</td>
							<td class="td03">进展情况：</td>
							<td>{{listDetail.progress}}</td>
						</tr>
						<tr>
							<td class="td01">区政府预审：</td>
							<td class="td02">{{listDetail.governmentpretrial}}</td>
							<td class="td03"></td>
							<td class="td04"></td>
						</tr>
						<tr>
							<td class="td01">所属辖区：</td>
							<td class="td02">{{listDetail.street_id}}</td>
							<td  class="td03">区位：</td>
							<td  class="td04">{{listDetail.location}}</td>
						</tr>
						<tr>
							<td class="td01">具体位置：</td>
							<td class="td02" colspan="3">{{listDetail.position}}</td>
						</tr>
						<tr>
							<td class="td01">实施主体确认：</td>
							<td class="td02">{{listDetail.subjectconfirmation}}</td>
							<td class="td03">开发单位：</td>
							<td class="td04">{{listDetail.location}}</td>
						</tr>
						<tr>
							<td class="td01">签订土地出让合同：</td>
							<td class="td02">{{listDetail.signlandgrant}}</td>
							<td class="td03">列入计划：</td>
							<td class="td04">{{listDetail.schematiye}}</td>
						</tr>
						<tr>
							<td class="td01">辖区负责人：</td>
							<td class="td02">{{listDetail.jurisdiction_user}}</td>
							<td class="td03">项目负责人：</td>
							<td class="td04">{{listDetail.charger}}</td>
						</tr>
					</tbody>
				</table> -->
        		<ul>
        			<li>
						<div>• 用地面积：<span>{{listDetail.land_area}}</span></div>
					</li>
        			<li>
						<div>• 建筑面积: <span>{{listDetail.built_up_area}}</span></div>
					</li>
        			<li>
						<div>• 测算容积率: <span>{{listDetail.measured_volume_rate}}</span></div>
					</li>
        			<li>
						<div>• 实际容积率: <span>{{listDetail.actual_volume_rate}}</span></div>
					</li>
        			<li>
						<div>• 承建单位: <span>{{listDetail.construction_unit}}</span></div>
					</li>
        			<li>
						<div>• 总投资: <span>{{listDetail.total_investment}}</span></div>
					</li>
        			<li>
						<div>• 进展情况: <span>{{listDetail.progress}}</span></div>
					</li>
        			<li>
						<div>• 区政府预审: <span>{{listDetail.governmentpretrial}}</span></div>
					</li>
        			<li>
						<div>• 列入计划: <span>{{listDetail.schematiye}}</span></div>
					</li>
        			<li>
						<div>• 所属辖区: <span>{{listDetail.street_id}}</span></div>
					</li>
        			<li>
						<div>• 区位: <span>{{listDetail.location}}</span></div>
					</li>
        			<li>
						<div>• 实施主体确认: <span>{{listDetail.subjectconfirmation}}</span></div>
					</li>
        			<li>
						<div>• 开发单位: <span>{{listDetail.developmentunit}}</span></div>
					</li>
        			<li>
						<div>• 签订土地出让合同: <span>{{listDetail.signlandgrant}}</span></div>
					</li>
        			<li>
						<div>• 列入计划: <span>{{listDetail.schematiye}}</span></div>
					</li>
        			<li>
						<div>• 区位: <span>{{listDetail.location}}</span></div>
					</li>
        			<li>
						<div>• 辖区负责人: <span>{{listDetail.jurisdiction_user}}</span></div>
					</li>
        			<li>
						<div>• 项目负责人: <span>{{listDetail.charger}}</span></div>
					</li>
        		</ul>
        		
        	</div>
        </div>
		<!-- 进展情况 -->
        <!-- <div class="project_title second-tit  title_box f_row_align border_radius">
            <img src="../../../static/img/Progress_icon.png">
            <span>进展情况</span>
        </div>
        <div class="message_footer f_column flex">
			<div class="box-line f_row_align">
				<div :class="!item.active?'line_active line':'line'" v-for="(item,index) in processList" :key="index">
					<div class="Item">
						<span class="long"></span>
						<div class="itemCon f_row_c_c">
							<span class="f_p_hidden">{{item.name}}</span>
						</div>
					</div>
				</div>
			</div>
			<div class="message_footer_msg f_row_c_c">
				<p>项目目前已基本完成规划优化工作，下一步向分管区领导汇报后，开展规划修改公示，核发规划修改批复程序。</p>
			</div>
        </div> -->
    </div>
	</div>
</template>

<script>
import Vue from 'vue'
import api from '@/api'
import * as Config from 'config'
import { mapMutations } from 'vuex';
import NavList from 'components/navList/navList'
// import TabList from 'components/navList/tabList'

//引入组件
export default {
	components:{
		NavList
		// TabList
	},
	data(){
        return{
			msg: "正山甲",
			id:1,//初始接口参数id
			listDetail:{},
			titleText:'',
			index:0,//点击选择指定的list记录数
			listNew:[],
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
				active:false,
				name:'建设用地审批阶段'
			},{
				active:false,
				name:'建设工程管理与监督阶段'
			}],
			list:[]
            
        }
	},
	methods:{
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
			this.index = index
			this.id = item.id
			this._QueryProjectId()
		},
		//请求接口
		_getInformation() {
			this.$http.get(api.QueryProjectList).then(response => {
			if(response.body.success){
				//基础设置 start			
				this.list = response.body.status
				this.id = response.body.status[0].id
				this._QueryProjectId()			
			}
			},(response) => {this.error = response.body.msg})
		},
		_QueryProjectId() {
			
			this.$http.get(api.QueryProjectId,{
				params: {
					id:this.id
				}
			}).then(response => {
				if(response.body.success){
					this.listDetail = response.body.status
					this.titleText = this.listDetail.projectname
				}
			},(response) => {this.error = response.body.msg})
		}

	},
	created() {
		this._getInformation()
	},
	mounted() {

	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~common/stylus/variable';
@import '~common/stylus/mixin';
.message_footer_msg
	height:100px;
.message_footer
	height:250px;
	border:1px solid #fff;
	padding:24px;
	box-sizing:border-box;
	border-radius:4px;
	min-width:644px;
.box-line
	margin-top:80px;
.line
	&:last-child
		width:110px;
		.Item
			left:100%;
.line	
	background:#16abb2;
	border:1px solid #fff;
	height:8px;
	// width:154px;
	width:220px;
	border-right-width:0;
	border-left-width:0;
	position:relative;
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
	background:#adadad;
	.Item
		background:#555555;
		border-color:#adadad;
		.long
			background:#adadad;
		.itemCon
			background:#adadad;
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

.box_div{
	width:200px;
}
.information{
	flex:1;
	display:flex;
	flex-direction:column;
}
.information .second-tit{
	margin-top:16px;
}
.information .project_information_content{
	display: flex;
	flex: 2;
	border: 1px solid #fff;
	border-radius: 4px;
	padding: 20px;
}
.information .project_footer{
	padding: 8px 0;
	border: 1px solid #fff;
    background-color: rgba(0,0,0,0.18);
    border-radius: 4px;
	flex:1;
}

.information_left img{
	width: 319px;
	height:259px;
}
.information_text{
	overflow:auto;
	padding-left: 5%;
}
.information_text ul{
	display: flex;
	flex-direction: column;
}

.information .information_text li{
	line-height:2.5;
	flex: 1;
	font-size:18px;

}
.information .information_text li div:nth-of-type(1){
	margin-right:60px;
}
.information .el-step__head.is-finish {
	color: #22bbc2;
    border-color: #22bbc2;
}
.information .el-step.is-horizontal .el-step__line{
	height: 5px;
	top: 14px;
}
.information .el-step__line-inner {
	border-width: initial !important;
}
.information .el-step__icon.is-text{
	border: 5px solid;
}
.information .el-step__head.is-process{
	color: #c0c4cc;
}
.information .el-step__title{
	font-size: 15px;
	line-height: 1.21;
	border-radius: 5px;
	color: #fff;
}
.information .el-step__main{
	margin-top: 10px;
}
.information .el-step__title{
	background-color: #adadad;
	padding: 3px 5px;
	color: #fff;
	margin: 0 20px;
	min-height: 2.2em;
	position: relative;
	font-weight: inherit;
}
.information .el-step__title:before{
	content: '';
	background-color: #c0c4cc;
	width: 3px;
	height: 10px;
	position: absolute;
	left: 50%;
	transform: translate(-50%);
	top: -10px;
}
.information .el-step__title.is-finish{
	color: #fff;
	background-color: #22bbc2;
}
.information .el-step__title.is-finish:before{
	background-color: #22bbc2;
}
.progress-bottom{
	margin-top: 30px;
	text-indent: 2em;
}
#table
	tr
		td
			height:60px;
			vertical-align :middle;
.td01
.td03
	text-align:right;
	width:20%;
.td02
.td04
	text-align:left;
	width:30%;
@media screen and (max-width: 1600px) {
   .line{
	   width:150px;
	}
	.line:last-child{
		width:75px;
	}
	.message_footer_msg{
		margin-top:36px;
	}
	.project_information_content{
		min-width:724px;
		// width:850px;
	}
	// .information .information_text li{
	// 	line-height:1.5;
	// 	flex: 1;
	// }
	
}
		
</style>