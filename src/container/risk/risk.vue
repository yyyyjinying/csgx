<template>
	<div class="process f_row" id="process">
		<nav-list @listHandle="listHandle" :list="list" @searchHandle="searchHandle"></nav-list>
		<div class="process_detail f_column flex">
			<!-- 详情标题信息 -->
			<div class="title_box f_row_align border_radius">
				<img src="../../../static/img/location_icon.png">
				<span>{{ titleText || list[0].projectname }}</span>
				<i class="f_row_align">项目综合风险指数：<b>76</b></i>
			</div>	
			<div class="main f_column flex border_radius">
				<!-- tab按钮 -->
				<div class="tab_list f_row_space_between">
					<div :class="item.active?'active':''" v-for="(item,index) in tabList" :key="index" @click="tabHandle(index)"><span>{{item.title}}</span></div>
				</div>
				<!-- tab内容 -->
				<!-- 负面清单管理 -->
				<div class="tab_con f_row_c flex" v-if="tabIndex == 0">
					<div class="negative f_row">
						<div class="bg"></div>
						<img src="./img/file_icon.png"/>
						<p>未按相关法律法规、我区城市更新项目计划申报前工作规程及我区其他有关管理规定选择前期合作方的</p>
					</div>
					<div class="negative f_row">
						<div class="bg"></div>
						<img src="./img/file_icon.png"/>
						<p>不能满足区域内消防、治安、公共服务等的空间需求</p>
					</div>
				</div>
				
				<div class="tab_con f_column_c flex" v-if="tabIndex == 1">
					<img class="contact" src="./img/fx2.png"/>	
				</div>
				<div class="tab_con f_column_c flex" v-if="tabIndex == 2">
					<img src="../../../static/img/gengxindanyuan.png"/>	
				</div>
				<div class="tab_con f_column_c flex" v-if="tabIndex == 3">
					<img src="../../../static/img/gengxindanyuan.png"/>	
				</div>
				<div class="tab_con f_column_c flex" v-if="tabIndex == 4">
					<img src="../../../static/img/gengxindanyuan.png"/>	
				</div>
				<div class="tab_con f_column_c flex" v-if="tabIndex == 5">
					<img src="../../../static/img/gengxindanyuan.png"/>	1212
				</div>
			</div>
			
		</div>
	</div>
</template>


<script>
import Vue from 'vue'
import api from '@/api'
import * as Config from 'config'
import { mapMutations } from 'vuex';
import NavList from "components/navList/navList"

//引入组件
export default {
	components:{
		NavList
	},
	data(){
		return {
			titleText:'',
			index:0,//点击选择指定的list记录数
			listNew:[],
			list:[
				{
					id: "01",
					index:"1-1",
					text: "正山甲（一期）",
					projectName:"正山甲",
					location:"坪山新区坪山街道，规划兰竹西路与龙坪路交汇处东侧",
					projectPosition:"49.11万㎡",
					jianzhuPosition:"67万㎡",
					cvolumetricRate:"5.19",
					svolumetricRate:"",
					projectUnit:"深圳市宜泰置业发展有限公司",
					pretrial:"深圳市财富城投资有限公司",
					approval:"坪山街道",
					personInCharge:"张小明"
				},
				{
					id: "02",
					index:"1-2",
					text: "正山甲（二期）",
					projectName:"正山甲",
					location:"坪山新区坪山街道，规划兰竹西路与龙坪路交汇处东侧",
					projectPosition:"7.76万㎡",
					jianzhuPosition:"23.78万㎡",
					cvolumetricRate:"4.98",
					svolumetricRate:"",
					projectUnit:"",
					pretrial:"深圳市财富城投资有限公司",
					approval:"",
					personInCharge:"淮文斌"
				},
				{
					id: "03",
					index:"1-3",
					text:"汤坑第一工业区",
					projectName:"正山甲",
					location:"坪山新区坪山街道，规划兰竹西路与龙坪路交汇处东侧",
					projectPosition:"8.47万㎡",
					jianzhuPosition:"28.46万㎡",
					cvolumetricRate:"5.66",
					svolumetricRate:"",
					projectUnit:"",
					pretrial:"",
					personInCharge:"陈子阳"
				},
				{
					id: "04",
					index:"1-4",
					text: "新和",
					projectName:"",
					location:"",
					projectPosition:"",
					jianzhuPosition:"",
					cvolumetricRate:"",
					svolumetricRate:"",
					projectUnit:"深圳市百家利华房地产开发有限公司",
					pretrial:"",
					personInCharge:""
				},
				{
					id: "05",
					index:"1-5",
					text: "飞西",
					projectName:"飞西",
					location:"",
					projectPosition:"30.27万㎡",
					jianzhuPosition:"100.1万㎡",
					cvolumetricRate:"",
					svolumetricRate:"",
					projectUnit:"深圳市鸿腾投资管理有限公司",
					pretrial:"",
					personInCharge:"张展"
				},
				{
					id: "06",
					index:"1-6",
					text: "谷仓吓",
					projectName:"谷仓吓",
					projectPosition:"7.65万㎡",
					jianzhuPosition:"25.61万㎡",
					cvolumetricRate:"4.49",
					svolumetricRate:"4.4",
					projectUnit:"深圳市南科润房地产开发有限公司",
					pretrial:"坪山区马峦街道",
					personInCharge:"吴卫华"
				},
				{
					id: "07",
					index:"1-7",
					text: "江边",
					projectName:"江边",
					projectPosition:"18.82万㎡",
					jianzhuPosition:"53万㎡",
					cvolumetricRate:"",
					svolumetricRate:"",
					projectUnit:"",
					pretrial:"深圳市鸿腾投资管理有限公司",
					personInCharge:""
				},
				{
					id: "08",
					index:"1-8",
					text: "世界塑胶厂",
					projectName:"世界塑胶厂",
					location:"",
					projectPosition:"",
					jianzhuPosition:"",
					cvolumetricRate:"",
					svolumetricRate:"",
					projectUnit:"",
					pretrial:"",
					approval:"",
					confirm:"",
					projectType:"",
					personInCharge:""
				},
				{
					id: "09",
					index:"1-9",
					text: "汤坑老村",
					projectName:"汤坑老村",
					location:"",
					projectPosition:"",
					jianzhuPosition:"",
					cvolumetricRate:"",
					svolumetricRate:"",
					projectUnit:"",
					pretrial:"",
					approval:"",
					confirm:"",
					projectType:"",
					personInCharge:""
				}
				
			],
			tabIndex:0,
			tabList:[
				{title:'负面清单分析',active:true},
				{title:'参与关联度分析',active:false},
				{title:'人脉关系分析',active:false},
				{title:'容积率分析',active:false},
				{title:'流程风险分析',active:false}
			]

		}
	},
	methods:{
		//点击tab切换
		tabHandle(index) {
			this.tabIndex = index
			this.tabList = this.tabList.filter((item,idx) => {
				if(index == idx){
					item.active = true	
				}else{
					item.active = false
				}
				return item
			})
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
			this.index = index
			this.id = item.id
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
		}
	},
	watch: {
		
	},
	created(){
		
		this._getInformation()
	},
	mounted() {

	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

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
	width:666px;
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
.tab_con
	img
		width:71%;
		height:81%;
.negative
	width:380px;
	height:160px;
	position:relative;
	padding:22px;
	box-sizing:border-box;
	margin:40px;
	.bg
		position:absolute;
		left:0;
		top:0;
		width:100%;
		height:100%;
		background:rgba(255,255,255,0.2);
		border-radius:12px;
	img
		width:35px;
		height:30px;
		margin-right:7px;
	p
		font-size:18px;
		line-height:2;
		text-align:justify;
.contact
	width:603px;
	height:424px;
</style>