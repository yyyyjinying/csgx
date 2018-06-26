<template>
<div class="home f_column">
<div >
		<div class="f_row_space_between">
			<div class="information f_column">
				<h2 class="info_title f_row_align title border_radius">
					<span class="iconfont icon-jibenxinxi2"></span>
					<span>基本信息</span>
				</h2>
			<div class="con info_con f_column border_radius">
					<div class="info_chart" ref="information"></div>
					<div class="info_msg f_column">
						<p class="f_row_space_between"><span>总预算金额</span><span>278.12亿元</span></p>
						<p class="f_row_space_between"><span>总面积</span><span>982273m2</span></p>
					</div>
				</div>

			</div>
			<div class="map flex f_row_c_c">
				<div class="mapTip">
					<div class="map_tip_total f_column_c">
						<span>27</span>
						<span>总项目数</span>
					</div>
					<div class="map_tip_qd f_column_c">
						<span>6</span>
						<span>负面清单</span>
					</div>
				</div>

				<img class="map_img" :src="require('../../common/image/map.png')"/>
			</div>
			<div class="ranking">
				<h2 class="info_title f_row_align title border_radius">
					<span class="iconfont icon-renshu"></span>
					<span>人物风险廉政指数排名</span>
				</h2>
				<div class="con border_radius">
					<div class="chart chart_b" ref="ranking"></div>
				</div>
			</div>
		</div>
		<div class="f_row_space_between center_padding">
			<div class="business">
				<h2 class="info_title f_row_align title border_radius">
					<span class="iconfont icon-guifanguanli"></span>
					<span>业务规范</span>
				</h2>
				<div class="con con_b border_radius">
					<div class="chart" ref="business"></div>
				</div>
			</div>

			<div class="process">
				<h2 class="info_title f_row_align title border_radius">
					<span class="iconfont icon-gouwuche"></span>
					<span>节点进度监控</span>
				</h2>
				<div class="con con_b border_radius">
					<div class="chart" ref="process"></div>
				</div>
			</div>
			<div class="radio">
				<h2 class="info_title f_row_align title border_radius">
					<span class="iconfont icon-tubiaobingzhuangtu"></span>
					<span>片区容积率</span>
				</h2>
				<div class="con con_b border_radius">
					<div class="chart" ref="radio"></div>
				</div>
			</div>
			<div class="risk">
				<h2 class="info_title f_row_align title border_radius">
					<span class="iconfont icon-gouwuche"></span>
					<span>流程风险</span>
				</h2>
				<div class="con con_b border_radius">
					<div class="chart" ref="risk"></div>
				</div>
			</div>
		</div>
	</div>
</div>
	
</template>


<script>
import Vue from 'vue'
import api from '@/api'
import * as Config from 'config'
import { mapMutations } from 'vuex'
import echarts from 'echarts'

//引入组件
export default {
	components:{
		
	},
	data(){
		return {
			

		}
	},
	methods:{
			
	},
	watch: {
		
	},
	created(){
		
		
	},
	mounted() {
		// 1、基本信息
		let informationChart = echarts.init(this.$refs.information)
		//动态配置参数
		let bgColor = ["#FFB437","#32C6A4","#91619F","#2984EF"]
		Config.option01.series[0].itemStyle.normal.color = function(params){
			return bgColor[params.dataIndex]
		}
		informationChart.setOption(Config.option01)

		//3、人物风险廉政指数排名
		let rankingChart = echarts.init(this.$refs.ranking)
		rankingChart.setOption(Config.option02)

		//4、人物风险廉政指数排名
		let businessChart = echarts.init(this.$refs.business)
		businessChart.setOption(Config.option03)


		// 5、节点进度监控
		let processChart = echarts.init(this.$refs.process)
		processChart.setOption(Config.option04)

		//6、片区容积率
		let radioChart = echarts.init(this.$refs.radio)
		var Name = ["测评容积率", "实际容积率"];
	      var color = [
	        "#2293FA",
	        "#6553F2",
	        "#82CE6A",
	        "#0891A2",
	        "#0891A2",
	        "#7049f0"
	      ];
	      var data = [[6, 1, 6], [7, 5, 6], [5, 7, 1]];

	      var xAxisData = [];
	      var data1 = [],
	        data2 = [],
	        data3 = [];

	      for (var i in data) {
	        xAxisData.push(i);
	        data1.push(data[i][0]);
	        data2.push(data[i][1]);
	        data3.push(data[i][3]);
	      }

	      var label = {
	        normal: {
	          show: false,
	          position: "right",
	          distance: 10,
	          formatter: function(param) {
	            return param.value + "%";
	          },
	          textStyle: {
	            color: "#ffffff",
	            fontSize: "16"
	          }
	        }
	      };

	      var series5 = [];
	      for (var j = 1; j < 3; j++) {
	        if (j == 1) {
	          var symbolOffset = [-7, 0];
	          var dataArr = data1;
	        } else if (j == 2) {
	          var symbolOffset = [7, 0];
	          var dataArr = data2;
	        }
	        series5.push(
	          {
	            //数值轴
	            name: Name[j - 1],
	            type: "bar",
	            stack: j,
	            xAxisIndex: 0,
	            data: dataArr,
	            label: label,
	            barWidth: 4,
	            barGap: 2.5,
	            itemStyle: {
	              normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
	                  {
	                    offset: 0,
	                    color: color[j * 2 - 2]
	                  },
	                  {
	                    offset: 1,
	                    color: color[j * 2 - 1]
	                  }
	                ])
	              }
	            },
	            z: 2
	          },
	          {
	            //顶部圆点样式
	            name: Name[j - 1],
	            type: "scatter",
	            stack: j,
	            xAxisIndex: 0,
	            symbolOffset: symbolOffset, //相对于原本位置的偏移量
	            data: [0, 0, 0, 0],
	            label: {
	              normal: {
	                show: false
	              }
	            },
	            xAxisIndex: 2,
	            symbolSize: 7,
	            itemStyle: {
	              normal: {
	                borderColor: "#fff",
	                borderWidth: 2,
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
	                  {
	                    offset: 0,
	                    color: color[j * 2 - 2]
	                  },
	                  {
	                    offset: 1,
	                    color: color[j * 2 - 1]
	                  }
	                ]),
	                opacity: 1
	              }
	            },
	            z: 2
	          },
	          {
	            //阴影样式
	            name: Name[j - 1],
	            type: "bar",
	            xAxisIndex: 1,
	            barGap: "140%",
	            data: [
	              dataArr[0] + 15,
	              dataArr[1] + 15,
	              dataArr[2] + 15,
	              dataArr[3] + 15
	            ],
	            barWidth: 6,
	            itemStyle: {
	              normal: {
	                color: "#11244E",
	                barBorderRadius: 2
	              }
	            },
	            z: 1
	          },
	          {
	            //背景条样式
	            name: Name[j - 1],
	            type: "bar",
	            xAxisIndex: 2,
	            data: [
	              dataArr[0] + 15.5,
	              dataArr[1] + 15.5,
	              dataArr[2] + 15.5,
	              dataArr[3] + 15.5
	            ],
	            barWidth: 8,
	            barGap: 0.8,
	            itemStyle: {
	              normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
	                  {
	                    offset: 0,
	                    color: color[j * 2 - 2]
	                  },
	                  {
	                    offset: 1,
	                    color: color[j * 2 - 1]
	                  }
	                ]),
	                barBorderRadius: 2
	              }
	            },
	            z: 0
	          },
	          {
	            //底部远点样式
	            name: Name[j - 1],
	            type: "scatter",
	            hoverAnimation: false,
	            data: [1, 1, 1, 1],
	            xAxisIndex: 2,
	            symbolOffset: symbolOffset, //相对于原本位置的偏移量
	            symbolSize: 8,
	            itemStyle: {
	              normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
	                  {
	                    offset: 0,
	                    color: color[j * 2 - 2]
	                  },
	                  {
	                    offset: 1,
	                    color: color[j * 2 - 1]
	                  }
	                ]),
	                opacity: 1
	              }
	            },
	            z: 2
	          }
	        );
	      }
	      Config.option05.legend.data = Name;
	      Config.option05.xAxis[0].data = xAxisData;
	      Config.option05.xAxis[1].data = xAxisData;
	      Config.option05.xAxis[2].data = xAxisData;
	      Config.option05.series = series5;
		radioChart.setOption(Config.option05)

		//7、流程风险
		let riskChart = echarts.init(this.$refs.risk)
		riskChart.setOption(Config.option06)

		

	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~common/stylus/variable';
@import '~common/stylus/mixin';
.title
	background:rgba(86,86,86,.18);
	padding:0 16px;
	box-sizing:border-box
	height:46px;
	border:1px solid #fff;
	margin-bottom:2px;
.border_radius
	border-radius:6px;
.con
	width:100%;
	height:263px;
	display:flex;
	flex:1;
	border:1px solid #fff;
	box-sizing:border-box;
.con_b
	height:284px;
.chart_b
	padding:14px;
	box-sizing:border-box;
.chart
	width:100%;
	height:100%;
.home
	padding:0 20px;
	flex:1;
	overflow-y:scroll;
	> div
		flex:1;
		&:nth-of-type(1)
			
			
			margin-top:11px;
		&:nth-of-type(2)
			box-sizing:border-box;
			margin-top:16px;
.information
	height:312px;
.process
	margin:0 10px;
	flex:1;
	margin-left:20px;
.radio
	flex:1;
	margin:0 10px;
	margin-right:20px;
	
.information
.risk	
.business
.ranking
	flex:1;
.info_title
	span
		color:#fff;
		&:nth-of-type(1)
			margin-right:8px;
			font-size:20px;
		&:nth-of-type(2)
			font-size:16px;
.info_chart
	width:100%;
	height:164px;
	padding:0 14px;
	box-sizing:border-box;
.info_con
	font-size:16px;
	color:#fff;
	.info_msg
		padding:0 14px;
		margin-bottom:12px;
		p
			line-height:36px;
.map_img
	width:320px;
	height:314px;
.map
	flex:2;
	margin:0 30px;
	position:relative;
	.mapTip
		position:absolute;
		left:102px;
		top:26px;
		.map_tip_total
			margin-bottom:30px;
			span
				&:nth-of-type(1)
					font-size:$font-size-large-l;
					color:$color-FB;
					margin-bottom:15px;
				&:nth-of-type(2)
					font-size:$font-size-medium-x;
					color:$color-FF;
		.map_tip_qd
			span
				&:nth-of-type(1)
					font-size:$font-size-large-l;
					color:$color-FB;
					margin-bottom:15px;
				&:nth-of-type(2)
					font-size:$font-size-medium-x;
					color:$color-FF;
.center_padding		
	margin-top:30px;
</style>