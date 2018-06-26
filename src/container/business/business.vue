<template>
	<div id="business" class="business f_row">
		<nav-list @listHandle="listHandle" :list="list" @searchHandle="searchHandle"></nav-list>
			<div class="business flex f_column">
				<div class="tabNav f_row">
					<div @click="tabNavHandle(item.id,index)" :class="tabNavIndex == index?'active tabNav_item f_row':'tabNav_item f_row'" v-for="(item,index) in dataTab" :key="index">
						<div class="tabNavItem">
							<span class="">{{item.process_name}}</span>
						</div>
						<div class="tabNavItemEmty"></div>
					</div>
					<div class="emty"></div>
				</div>
				
				<div class="tabCon f_row">
					<div class="tabCon_nav">
						<div @click="tabConHandle(item.id,index)" v-for="(item,index) in dataChildenTab" :key="index" :class="tabConIndex == index?'tabCon_nav_item active f_row_align':'tabCon_nav_item f_row_align'">
							<i>•</i><span class="f_p_hidden">{{item.node_name}}</span>
						</div>
					</div>
					<div class="contentList flex f_column">
						<!-- 上传进度条 -->
						<div class="circle_box f_row_c_c">
							<el-progress v-if="percentage>0" class="circle" type="circle" :percentage="percentage" color="#8e71c7" :width="percentageWidth" :stroke-width="percentageStrokeWidth"></el-progress>
						</div>
						<div class="main_list">
							<div class="addProjectButton" @click="addProjectButtonHandle">新增项目</div>
							<table>
								<tbody>
									<tr>
										<td>序号</td>
										<td class="td_02">项目名称</td>
										<td colspan="2">操作</td>
									</tr>
									<tr v-for="(item,index) in tableDataList" :key="index">
										<td>{{index+1}}</td>
										<td style="text-align:left;">
											<span  v-if="!item.isInput">{{item.template_name}}</span>
											<input class="text_input" v-else type="text" v-focus @focus="focusHandle" @keyup="blurHandle" v-model="textInput" placeholder="请输入新增项目名称"/>
										</td>
										<td class="td_03">
												<el-upload
												v-if="item.file_id == null"
												class="upload-demo"
												:action="UploadFile"
												:data="dataParams"
												:on-remove="handleRemove"
												:before-remove="beforeRemove"
												:on-success="successHandle"
												:on-progress="onProgressHandle"
												multiple
												:limit="3"
												:disabled="disabled"
												:on-exceed="handleExceed"
												:show-file-list="false"
												:file-list="fileList">
												<el-button size="small" type="primary"  @click="upLoadHandle(item)">点击上传</el-button>
												</el-upload>
												<button v-else class="down_load_button" type="button" @click="downLoadHandle(item)">点击下载</button>
												
											
										</td>
										<td class="td_04">
											<span v-if="item.isInput" class="close_button" @click.stop="downLoadHandle(item)">X</span>
											<span v-else-if="item.file_id != null"  class="close_button" @click="removeHandle(item)">删除</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

				</div>
			</div>
	</div>
</template>

<script>
import api from '@/api'
import NavList from 'components/navList/navList'
export default {
	name: 'business',
	components:{
		NavList
	},
	directives: {  
      focus: {  
        // 指令的定义  
        inserted: function (el) {  
          el.focus()  
        }  
      }  
    },
    data(){
        return{
			percentageStrokeWidth:3,
			percentageWidth:60,//进度条大小
			percentage:0,//上传进度
			file_id:0,
			fileList:[],
			dataParams:{},//上传参数
			UploadFile:'',
            msg: "业务规范",
			tabPosition:"left",
			businessId:0,//tab切换下标
			tabNavIndex:0,
			tabConIndex:0,
			tabNavId:0,
			project_id:0,
			tabNavChildenId:0,
			dataChildenTab:[],
			tableDataList: [],
		   //表格数据
		   textInput:'',
           tableData: [{
	          num: '1',
	          name: '王小虎',
	          declarationUnit:'申报单位',
	          declarer:"张--",
	          address: '上海市普陀区金沙江路 1518 弄',
	          number: 13245678904,
	          landArea:'68874',//用地面积
	          builtArea:'105230',//建筑面积
	          enclosure:'00',//附件
			}],
			msg: "正山甲",
			titleText:'',
			index:0,//点击选择指定的list记录数
			listNew:[],//点击搜索
			list:[],
			dataTab:[],
			isAddLock:1,
			disabled:false,
			zAddId:0
        }
	},
	computed:{
		
	},
	methods:{
		//点击删除对应的数据记录
		removeHandle(item) {
			console.log('item12',item)
			this._cleanFileByfileId(item.file_id, item.mainid, item.nodeid)
		},
		//点击删除插入的项目
		closeRemoveHandle() {
			this.isAddLock = 1
			this.tableDataList = this.tableDataList.filter((item,index) => {
				if(!item.isInput) return item;
			})
		},
		
		//点击新增项目
		addProjectButtonHandle() {
			if(this.isAddLock == 1){

				this.textInput = ''
	
				let jsonData = {
					file_context:null,
					xh:0,
					file_id:null,
					file_num:null,
					file_name:null,
					mainid:null,
					nodeid:null,
					project_id:null,
					template_name:null,
					id:null,
					isInput:true
				}
				this.tableDataList.unshift(jsonData)
				this.isAddLock = 0
				this.disabled = true
			}
			
		},
		focusHandle() {
			this.textInput = ''
			this.tableDataList[0].template_name = this.textInput
		},
		//输入框失去焦点时
		blurHandle() {
			console.log()
			if(this.textInput){
				this.disabled = false
			}else{
				this.disabled = true
			}
			this.tableDataList[0].template_name = this.textInput
		},
		//点击开始上传
		upLoadHandle(item) {
			// this.disabled = true
			//点击上传判断项目名是否为空
			if(item.template_name){
				this.disabled = false
				this.UploadFile = api.UploadFile
				let {tabNavId,tabNavChildenId,project_id} = this
				this.dataParams = {
					mainid:tabNavId,
					nodeid:tabNavChildenId,
					project_id:project_id,
					filecontext:item.template_name,
					file_num:item.id || 0
				}
				console.log(11,item.file_context)
				
			}else{
				if( this.textInput ) {
					this.disabled = false
					this.UploadFile = api.UploadFile
					let {tabNavId,tabNavChildenId,project_id} = this
					this.dataParams = {
						mainid:tabNavId,
						nodeid:tabNavChildenId,
						project_id:project_id,
						filecontext: this.textInput,
						file_num:item.id || 0
					}
				}else{
					this.disabled = true
				}
			}
			
			
		},
		//文件上传时的回调
		onProgressHandle(event, file, fileList) {
			this.percentage = Math.floor(event.percent)
			if(this.percentage >= 100){
				setTimeout(() => {
					this.percentage = 0
				},1000)
			}
		},
		//上传成功的回调
		successHandle(response, file, fileList) {
			this.file_id = response.fileId
			this.file_name = response.fileName
			if(response.success){
				
				this.tableDataList.forEach((item,index) => {
					if(item.id == response.file_num || item.isInput){
						item.mainid = response.mainid
						item.nodeid = response.nodeid
						item.file_id = response.fileId
						item.file_context = response.filecontext
						item.file_name = response.fileName
						item.file_num = response.file_num || 0
						item.isInput = false
					}
					
				})
				this.isAddLock = 1
				console.log(5,this.tableDataList)
			}else{
				alert('上传失败')
			}
		},
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePreview(file) {
			console.log(file);
		},
		handleExceed(files, fileList) {
			this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
		},
		beforeRemove(file, fileList) {
			return this.$confirm(`确定移除 ${ file.name }？`);
		},
		//点击下载
		downLoadHandle(item) {
			this.file_id = item.file_id
			this.file_name = item.file_name
			console.log(item)
			window.location.href=`${api.DownloadFile}?file_id=${this.file_id}&file_name=${this.file_name}`;
			
		},
		//点左边切换tab选项卡
		tabConHandle(id,index) {
			this.tabConIndex = index
			this.tabNavChildenId = id
			this.isAddLock = 1
			this._GetFileListByNodeIdTmp()
		},
		//点击tab切换选项卡
		tabNavHandle(id,index) {
			this.tabNavIndex = index
			this.tabNavId = id
			this.tabConIndex = 0
			this.isAddLock = 1
			this._GetChildProcess()
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
			this.project_id = item.id
			console.log(item.id)
			this.tabNavIndex = 0
			this.isAddLock = 1
			this._GetMainProcess()
		},
		//请求左边list接口
		_getInformation() {
			this.$http.get(api.QueryProjectList).then(response => {
			if(response.body.success){
				//基础设置 start			
				this.list = response.body.status
				this.project_id = this.list[0].id			
			}
			},(response) => {this.error = response.body.msg})
		},
		//请求主进程tab接口
		_GetMainProcess() {
			this.$http.get(api.GetMainProcess).then(response => {
			if(response.body.success){
				//基础设置 start			
				this.dataTab = response.body.MainProcessList
				this.tabNavId = response.body.MainProcessList[0].id
				this._GetChildProcess()			
			}
			})
		},
		//请求删除接口
		_cleanFileByfileId(file_id, mainid, nodeid) {
			this.$http.get(api.CleanFileByfileId,{
					params:{
						file_id:file_id,
						mainid:mainid,
						nodeid:nodeid
					}
			}).then(response => {
				if(response.body.success){
					//基础设置 start	
					this.tableDataList = this.tableDataList.filter((item,index) => {
						if(!item.file_id == file_id) return item;
					})		
				}
			})
		},
		//请求子进程tab接口
		_GetChildProcess() {

			this.$http.get(api.GetChildProcess,{params: {
				mainid:this.tabNavId
			}
		}).then(response => {
			if(response.body.success){
				//基础设置 start			
				this.dataChildenTab = response.body.ChildProcessList
				this.tabNavChildenId = this.dataChildenTab[0].id	
				this._GetFileListByNodeIdTmp()		
			}
			},(response) => {this.error = response.body.msg})
		},
		//根据节点查询需要上传的模板文件
		_GetFileListByNodeIdTmp() {

			this.$http.get(api.GetFileListByNodeIdTmp,{params: {
				project_id:this.project_id,
				mainid:this.tabNavId,
				nodeid:this.tabNavChildenId
			}
		}).then(response => {
			if(response.body.success){
				console.log('list',this.tableDataList)
				this.tableDataList = response.body.FileList
				this.tableDataList.forEach((item,index) => {
					item.isInput = false
				})
			}
		})
		}
	},
	created() {
		this._getInformation()
		this._GetMainProcess()
		
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">


#business
	.text_input
		background: rgba(0,0,0,0);
		line-height: 20px;
		color: #fff;
	.addProjectButton
		border:1px solid #fff;
		width:100px;
		text-align:center;
		border-radius:8px;
		line-height:30px;
		background:rgba(255,255,255,.2)
		cursor:pointer;
		margin-bottom:20px;

	.addUpLoad
		width:100px;
		height:100px;
		line-height:100px;
		background:rgba(255,255,255,0.5)
		font-size:60px;
		text-align:center;
		align-self:center;
		margin-top:30%;
	/*
	* 卡片样式重置
	*/
	.business{
		flex: 1;
	}
	.contentList
		overflow:auto;
		position:relative;

	.tabNav{
		position:relative;
		// height:44px;
	}
	.tabNav	
		.emty
			flex:1;
			height:44px;
			border-bottom:1px solid #fff;
		.tabNav_item
			width:132px;
			height:44px;
			.tabNavItem
				cursor:pointer;
				border-radius:4px 4px 0 0;
				border:1px solid #fff;
				width:124px;
				height:45px;
				padding:0 10px;
				box-sizing:border-box;
				display:flex;
				justify-content: center;
				align-items:center;
				text-align:center;
				background:rgba(255,255,255,.1)
			.tabNavItemEmty
				width:8px;
				height:100%;
				border-bottom:1px solid #fff;
		.active
			.tabNavItem
				border-bottom-width:0;
				background:rgba(1,1,1,0)

	.tabCon
		border:1px solid #fff;
		border-top-width:0;
		flex:1;
		border-radius:0px 0 4px 4px;
		padding:28px 28px 28px 0;
	.tabCon_nav
		overflow:auto;
		width:240px;
		.tabCon_nav_item
			padding-left:32px;
			width:188px;
			height:60px;
			border:1px solid #2069ba;
			border-radius:0 8px 8px 0;
			background:rgba(255,255,255,.05)
			margin-bottom:14px;
			position:relative;
			span
				margin-left:12px;
				font-size:16px;
				color:#fff;
				line-height:20px;
			&.active
				background:#0e4a74;
			&.active::before
				content:'';
				display:block;
				position:absolute;
				width:3px;
				left:0;
				top:0;
				height:100%;
				background:#2a7be2;
	.main_list
		// display:flex;
		height:600px;


	.add_section
		display:flex;
		flex:1;
	.main_list
		padding-left:24px;
		table
			width:100%;
			tr
				border-bottom:1px solid #7e92a6;
				&:hover
					background:rgba(255,255,255,.18);
				td
					text-align:center;
					vertical-align:middle;
					// height-:40px;
					padding:5px 0;
					// min-width:200px;
					.down_load_button
						color: #fff;
						background-color: #4bab44;
						border-color: #409EFF;
						font-size: 12px;
						border-radius: 3px;
						padding: 8px 15px;	
	.circle_box
		position:absolute;
		left:0;
		right:0;
		bottom:0;
		top:0;
		margin:auto;
		width:50px;
		height:50px;
		

	.el-progress--circle .el-progress__text
		color:#fff !important;
.td_01
	width:10%;
.td_02
	width:60%;
.td_03
	width:20%;
.td_04
	width:10%;
.close_button
	display:block;
	width:30px;
	height:30px;
	text-align:center;
	line-height:30px;
	cursor:pointer;

</style>
