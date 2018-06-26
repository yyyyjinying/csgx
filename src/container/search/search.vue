<template>
	<div class="search-box fixed">
		<top-search :title="title" @searchHandle="searchHandle"></top-search>

		<div v-show="list.length > 0" class="scroll-container">
			<scroll 
				class="scroll" 
				:data="list" 
				:pullup="pullup" 
				:probeType="probeType"
				:loadingStatus="loadingStatus"
				:allLoading="allLoading"
				@scrollToEnd="scrollToEnd"
			>
				<!-- 列表项区域 -->
				<div class="list-item">
					<router-link tag="div" :to="{name:'goods', params:{storeId:item.storeId}}" class="item f_row_align" :key="index" v-for="(item,index) in list">
						<img src="./position.png" alt="">
						<p>[{{item.title}}]-{{item.address}}</p>
					</router-link>
				</div>
			</scroll>
		</div>
		<!-- 基础组件 -->
		<loading v-if="loading"></loading>
		<div v-if="error" class="error">
			{{ error }}
		</div>
		<tip ref="tip"></tip>
	</div>
</template>
<script>
	import Vue from 'vue'
	import api from '@/api'
	import Util from '@/util/util'
	import TopSearch from 'base/top-nav/top-search'
	import * as Config from 'config'
	import Scroll from 'base/scroll/scroll'
	import Loading from 'base/loading/loading'
	import Tip from 'base/tip/tip'
	export default {
		name:'jfen-box',
		components: {
			Scroll,
			TopSearch,
			Loading,
			Tip
		},
		data() {
			return {
				//基础配置 start
				error: null,
				loading: true,
				title:'我的收藏',
				topName:'',
				page:1,
				pullup: false,
	      loadingStatus:false,//加载中……
	      allLoading: false,//判断是否可以上拉加载
	      probeType: 3,
	      list:[],
	      //基础配置 end
	      keyword:''
			}
		},
		methods: {
			searchHandle(keyword) {
				this.keyword = keyword
				this.list = []
				this.loading = true
				this._StoreList()
			},
			//初始化设置请求头
			resetHeader() {
				this.username = JSON.parse(localStorage.getItem("userInfo")).username
				//统一配置请求头
				Vue.http.interceptors.push((request, next) => {
					let token = JSON.parse(localStorage.getItem("userInfo")).token
					request.headers.set('Appid', Config.Appid)
					request.headers.set('Appkey', Config.Appkey)
					request.headers.set('Zwm-Token', token)
					next((response) => {
						return response
					})
				})
			},
			//上拉更新
			scrollToEnd() {
				if(!this.allLoading){
					this.loadingStatus = true
					this.page++
					this._getJfen(this.page)
				}				
			},
			//输入搜索地址执行搜索
			_StoreList(page=1, pageSize=10) {
				//请求头信息
				this.resetHeader()
				let {keyword,username} = this
				this.$http.get(api.StoreList,{
		        params: {
	              username,
	              latitude:JSON.parse(localStorage.getItem("locationAddress")).latitude,
	              longitude:JSON.parse(localStorage.getItem("locationAddress")).longitude,
	              type: 1, 
	              sort: 0, 
	              isDecode: 0, 
	              keyword,
	              page,
	              pageSize
	            }
		      }).then(response => {
		        this.loading = false
		        if(response.body.code == Config.CODE_OK){
		        	//基础设置 start
					this.loading = false
					this.loadingStatus = false
					if(response.body.jsonResult.counts < pageSize){
						this.allLoading = true
					}
					//基础设置 end
							
		          this.list = this.list.concat(response.body.jsonResult.list)
		                 
		        }else{
		          this.error = response.body.msg
		        }
		      },(response) => {this.error = response.body.msg})
			}
		},
		created() {
			this._StoreList()
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import '~common/stylus/mixin'
	@import '~common/stylus/variable'
	.search-box
		background:$background-F0
	.list-item
		.item
			border-1px($border-bottom-color)
			height:40px
			background:$background-FF
			padding:0 12px
			img
				width:16px
				height:16px
			p
				margin-left:19px
				font-size:$font-size-medium
				color:$color-1A
	
</style>