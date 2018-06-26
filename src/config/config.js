export const Appid = '1009'
export const Appkey = 'EFEF83AA312D41A5C39A31221EC0B848'
export const CODE_OK = 0
export const bottomNavNum = 2

//图标数据
export const option = {
	legend: {},
	tooltip: {},
	dataset: {
		// 提供一份数据。
		source: [
			['product', '2015', '2016', '2017'],
			['Matcha Latte', 43.3, 85.8, 93.7],
			['Milk Tea', 83.1, 73.4, 55.1],
			['Cheese Cocoa', 86.4, 65.2, 82.5],
			['Walnut Brownie', 72.4, 53.9, 39.1]
		]
	},
	// 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
	xAxis: {
		type: 'category'
	},
	// 声明一个 Y 轴，数值轴。
	yAxis: {},
	// 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
	series: [{
		type: 'bar'
	}, {
		type: 'bar'
	}, {
		type: 'bar'
	}]
}

export const option01 = {
	title: {
		show: false,
		text: "基本信息"
	},
	tooltip: {
		show: false
	},
	legend: {
		show: false,
		data: ["基本信息"]
	},
	grid: {
		left: "0%",
		right: "15%",
		bottom: "0%",
		top: "10%",
		containLabel: true,
		z: 22,
		borderColor: "#fff"
	},
	xAxis: {
		show: false
	},
	yAxis: {
		type: "category",
		data: ["存量项目", "未开工项目", "已开工项目", "总项目数"],
		nameTextStyle: {
			fontSize: 16
		},
		axisLine: {
			lineStyle: {
				color: "#fff",
				width: 1
			}
		},
		axisTick: {
			show: false
		},
		z: 2
	},
	textStyle: {
		fontSize: 16
	},
	series: [{
		name: "基本信息",
		type: "bar",
		label: {
			normal: {
				show: true,
				position: "right",
				color: "#fff",
				formatter: function(params) {
					return params.value + "个";
				}
			}
		},
		itemStyle: {
			normal: {

				barBorderRadius: [0, 30, 30, 0]
			}
		},
		barWidth: 12,
		data: [10, 20, 7, 20]
	}]
}
export const option02 = {
	title: {
		show: false,
		text: "基本信息"
	},
	tooltip: {
		show: false
	},
	legend: {
		show: false,
		data: ["基本信息"]
	},
	grid: {
		left: "0%",
		right: "15%",
		bottom: "0%",
		top: "10%",
		containLabel: true,
		z: 22,
		borderColor: "#fff"
	},
	xAxis: {
		show: false
	},
	yAxis: {
		type: "category",
		data: ["江边", "塘坑老村", "世界塑胶厂", "谷仓吓", "飞西", "新和", "第一工业区", "正山甲"],
		nameTextStyle: {
			fontSize: 16
		},
		axisLine: {
			lineStyle: {
				color: "#fff",
				width: 1
			}
		},
		axisTick: {
			show: false
		},
		z: 2
	},
	textStyle: {
		fontSize: 16
	},
	series: [{
		name: "廉政指数",
		type: "bar",
		label: {
			normal: {
				show: true,
				position: "right",
				color: "#fff",
				formatter: function(params) {
					return params.value;
				}
			}
		},
		itemStyle: {
			normal: {
				color: '#FF8463',
				barBorderRadius: [0, 30, 30, 0]
			}
		},
		barWidth: 12,
		data: [48, 50, 58, 60, 68, 76, 78, 81]
	}]
}
export const option03 = {
	title: {
		show: false,
		text: "业务范围"
	},
	tooltip: {},

	series: [{
		name: "审批通过",
		type: "pie",
		radius: ["37%", "45%"],
		center: ["25%", "25%"],
		color: {
			type: "linear",
			x: 0,
			y: 0,
			x2: 0,
			y2: 1,
			colorStops: [{
				offset: 0,
				color: "#66AEED" // 0% 处的颜色
			}, {
				offset: 1,
				color: "#746ECD" // 100% 处的颜色
			}],
			globalCoord: false // 缺省为 false
		},
		label: {
			normal: {
				position: "center"
			}
		},
		data: [{
			value: 32,
			name: "审批通过数",
			label: {
				normal: {
					formatter: "{d} %",
					textStyle: {
						color: "#746ECD",
						fontSize: 18
					}
				}
			},
			tooltip: {
				trigger: "item",
				formatter: "{a} <br/>计算公式:通过率=({b}/审批总数)*100%<br/> 审批通过数 : {c}"
			}
		}, {
			value: 72,
			name: "其他类型数",
			label: {
				normal: {
					formatter: "审批通过率",
					textStyle: {
						color: "#fff",
						fontSize: 14
					}
				}
			},
			itemStyle: {
				normal: {
					color: "#aaa"
				},
				emphasis: {
					color: "#aaa"
				}
			}
		}]
	}, {
		name: "审批未通过",
		type: "pie",
		radius: ["37%", "45%"],
		center: ["75%", "25%"],

		color: {
			type: "linear",
			x: 0,
			y: 0,
			x2: 0,
			y2: 1,
			colorStops: [{
				offset: 0,
				color: "#FAB269" // 0% 处的颜色
			}, {
				offset: 1,
				color: "#F5838F" // 100% 处的颜色
			}],
			globalCoord: false // 缺省为 false
		},
		label: {
			normal: {
				position: "center"
			}
		},
		data: [{
			value: 54,
			name: "审批未通过数",

			label: {
				normal: {
					formatter: "{d} %",
					textStyle: {
						color: "#F5838F",
						fontSize: 18
					}
				}
			},
			tooltip: {
				trigger: "item",
				formatter: "{a} <br/>计算公式:占比率=({b}/注销总数)*100%<br/> 到期注销数 : {c}"
			}
		}, {
			value: 50,
			name: "其他类型数",
			label: {
				normal: {
					formatter: "\n审批未通过率",
					textStyle: {
						color: "#fff",
						fontSize: 14
					}
				}
			},
			itemStyle: {
				normal: {
					color: "#aaa"
				},
				emphasis: {
					color: "#aaa"
				}
			}
		}]
	}, {
		name: "审批按时\n办结率",
		type: "pie",
		radius: ["37%", "45%"],
		center: ["25%", "75%"],
		color: {
			type: "linear",
			x: 0,
			y: 0,
			x2: 0,
			y2: 1,
			colorStops: [{
				offset: 0,
				color: "#56EFD2" // 0% 处的颜色
			}, {
				offset: 1,
				color: "#57C9F3" // 100% 处的颜色
			}],
			globalCoord: false // 缺省为 false
		},
		label: {
			normal: {
				position: "center"
			}
		},
		data: [{
			value: 18,
			name: "审批按时办结数",

			label: {
				normal: {
					formatter: "{d} %",
					textStyle: {
						color: "#57C9F3",
						fontSize: 18
					}
				}
			},
			tooltip: {
				trigger: "item",
				formatter: "{a} <br/>计算公式:占比率=({b}/注销总数)*100%<br/> 申请注销数 : {c}"
			}
		}, {
			value: 86,
			name: "其他类型数",
			label: {
				normal: {
					formatter: "\n审批按时\n办结率",
					textStyle: {
						color: "#fff",
						fontSize: 14
					}
				}
			},
			itemStyle: {
				normal: {
					color: "#aaa"
				},
				emphasis: {
					color: "#aaa"
				}
			}
		}]
	}, {
		name: "审批超时",
		type: "pie",
		radius: ["37%", "45%"],
		center: ["75%", "75%"],
		color: {
			type: "linear",
			x: 0,
			y: 0,
			x2: 0,
			y2: 1,
			colorStops: [{
				offset: 0,
				color: "#2ED2DF" // 0% 处的颜色
			}, {
				offset: 1,
				color: "#3073FD" // 100% 处的颜色
			}],
			globalCoord: false // 缺省为 false
		},
		label: {
			normal: {
				position: "center"
			}
		},
		data: [{
			value: 54,
			name: "审批超时数",
			label: {
				normal: {
					formatter: "{d} %",
					textStyle: {
						color: "#3073FD",
						fontSize: 18
					}
				}
			},
			tooltip: {
				trigger: "item",
				formatter: "{a} <br/>计算公式:占比率=({b}/注销总数)*100%<br/> 到期注销数 : {c}"
			}
		}, {
			value: 50,
			name: "其他类型数",
			label: {
				normal: {
					formatter: "\n审批超时\n办结率",
					textStyle: {
						color: "#fff",
						fontSize: 14
					}
				}
			},
			itemStyle: {
				normal: {
					color: "#aaa"
				},
				emphasis: {
					color: "#aaa"
				}
			}
		}]
	}]
}
export const option06 = {
	radar: {
		name: {
			textStyle: {
				color: "#fff"
			}
		},
		splitLine: {
			//		              lineStyle: {
			//		                  color: ['#2a3544','#b8ddff', '#2a3544','#2a3544'],
			//		                  width:1
			//		              }
		},
		splitArea: {
			areaStyle: {
				color: "rgba(128, 128, 128, 0)",
				shadowColor: "rgba(0, 100, 0, 0.3)"
			}
		},
		indicator: [{
			name: "A",
			max: 6500
		}, {
			name: "B",
			max: 6500
		}, {
			name: "C",
			max: 3800
		}, {
			name: "D",
			max: 3800
		}, {
			name: "E",
			max: 5200
		}, {
			name: "F",
			max: 3600
		}]
	},
	series: [{
		type: "radar",
		data: [{
			value: [500, 3400, 2800, 3100, 4200, 2600],
			name: "DATA",
			itemStyle: {
				normal: {
					color: "rgba(5, 128, 242, 0)"
				}
			},
			areaStyle: {
				normal: {
					color: {
						type: "radial",
						x: 0.5,
						y: 0.5,
						r: 0.5,
						colorStops: [{
							offset: 0,
							color: "#202B8E" // 0% 处的颜色
						}, {
							offset: 1,
							color: "#1465A5" // 100% 处的颜色
						}],
						globalCoord: false // 缺省为 false
					},
					opacity: 1
				}
			}
		}]
	}]
}
export const option05 = {
	title: {
		show: false,
		text: "片区容积率",
		x: "10",
		y: "10",
		textStyle: {
			fontWeight: "normal",
			fontSize: 24,
			color: "#fff"
		}
	},
	grid: {
		left: "3%",
		right: "3%",
		bottom: "13%",
		top: "10%",
		containLabel: true
	},
	tooltip: {
		show: true,
		trigger: "axis",
		axisPointer: {
			// 坐标轴指示器，坐标轴触发有效
			type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
			shadowStyle: {
				color: "rgba(112,112,112,0)"
			}
		},
		formatter: "{b}<br />{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%",
		formatter: function(params) {
			var unit = params[0].name.substring(
				params[0].name.indexOf("(") + 1,
				params[0].name.indexOf(")")
			);
			return (
				params[0].name +
				" ：<br />" +
				params[0].seriesName +
				" ：" +
				params[0].data +
				unit +
				"%" +
				"<br />" +
				params[1].seriesName +
				" ：" +
				params[1].data +
				unit +
				"%"
			);
		},
		backgroundColor: "rgba(0,0,0,0.7)", // 背景
		padding: [8, 10], //内边距
		extraCssText: "box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);" //添加阴影
	},
	legend: {
		bottom: 0,
		textStyle: {
			color: "#fff"
		},
		data: []
	},
	xAxis: [{
		type: "category",
		axisTick: {
			show: false
		},
		axisLine: {
			show: true,
			lineStyle: {
				color: "#1A3E60"
			}
		},
		axisLabel: {
			show: false,
			inside: false,
			textStyle: {
				color: "#bac0c0",
				fontWeight: "normal",
				fontSize: "12"
			}
		},
		data: []
	}, {
		type: "category",
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			show: false
		},
		splitArea: {
			show: false
		},
		splitLine: {
			show: false
		},
		data: []
	}, {
		type: "category",
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			show: false
		},
		splitArea: {
			show: false
		},
		splitLine: {
			show: false
		},
		data: []
	}],
	yAxis: {
		type: "value",
		axisTick: {
			show: false
		},
		axisLine: {
			show: true,
			lineStyle: {
				color: "#fff"
			}
		},
		splitLine: {
			show: true,
			lineStyle: {
				color: "#1C4971 "
			}
		},
		axisLabel: {
			textStyle: {
				color: "#bac0c0",
				fontWeight: "normal",
				fontSize: "12"
			}
		}
	},
	series: ""
}

//节点进度
var bgImg =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAilJREFUeNrs1rENwjAURdEfC0pmQAwBDfuwE8wDDSULIGagTGEcFNHQpfPXseT0V0ryzrA/XzcRsWt3HX2fsd1XSRITc8O2JIn5RZVIdsr87mU54xT0TBL1/Sms2uPd7qPXivvp+PfKpfuGBAkStPxMf7muLXe43FiO5ViO5VjOsAoSxHIsx3Isx3Isx3KGVZAglmM5lmM5lmM5liMFQYJYjuVYjuVYjuVYTpAgQSzHcizHcizHcoZVkCCWYzmWYzmWYzmWM6yCBLEcy7Ecy7Ecy7GcIEGCWI7lWI7lWI7lDKsgQYJYjuVYjuVYjuUMqyBBLMdyLMdyLMdyLGdYBQliOZZjOZZjOZZjOUGCBLEcy7Ecy7EcyxlWQYJYjuVYjuVYjuVYzrAKEsRyLMdyLMdyLMdypCBIEMuxHMuxHMuxnGEVJEgQy7Ecy7Ecy7GcYRUkiOVYjuVYjuVYjuUMqyBBLMdyLMdyLMdyLCdIkCCWYzmWYzmWYznDKkgQy7Ecy7Ecy7EcyxlWQYJYjuVYjuVYjuVYjhQECWI5lmM5lmM5ljOsggQJYjmWYzmWYzmWM6yCBLEcy7Ecy7Ecy7GcYRUkiOVYjuVYjuVYjuUECRLEcizHcizHcixnWAUJYjmWYzmWYzmWYznDKkgQy7Ecy7Ecy7Ecy5GCIEEsx3Isx3Isx3IsJ0iQIJZjOZZjOZZjOcMqSBDLsRzLsRzL9Wy5odZqhwQJWn4+AgwApGqd0LftHcgAAAAASUVORK5CYII=";

var fillImg =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFhJREFUeNrs3U+O1DgUgHHblUFzhb7GCCHNtnfMFUasOA9HYEWfAQlpZq6AEOIIdPcFZgMVe5L6Q6pLzQjFLZK2fpZSKbVioQ8n9b68+Dnxz39fXYYYrkIIF+Fxt5the5kagQkHhtepEZhvUCk01tLh3Gul3aZQwovxSwMwn8cfhW74+Lul66jJawgQIEB1QJfDdj1s5ZFvI8NzLsfluByX43KAlmzjKRdyTkYIEJeb6XK5JC7H5bhchculmLmcOASoAqjPGyMEiMtVuFyMhctxOS5X4XKlRC4nDgECBIjLLeVyXSnpqhQux+W43FyXi/Jy4hCgKqC+74wQIC5XkZdLKcvLcTkuV+FyOScuJw4Bmt/MlwPE5WprH4LaBy7H5WpcbvjgcuIQIECAuByXe0iXy4eJtOONXilx2NJh238PIYbpmPP9qvpc7O5YU+r351/KB9hyAl7C3WPO9+vqs3O5hkZocrn9H+PJwdP3Y87h/n9sNX24HKBFgLaesQLiclUul9Q+yMvJy1Xl5bLaB3EIUE3biVzvGSsgLjfb5Yb7ci7H5bhchcvFWLicOAQIECAux+W43P1QXcmpuWuotbyc2gdxCFBF29c+FHk5QFzOfDl5OS63jMsFtQ/iECBAgLgcl+Ny34PqcoMrot+cFkzEWIbtuN9/H0/R/yuyWFGf2zR8vBiLIHa5hTsFE3FGkcWifT4Pey63fqDt9hemsOYWSylGaM2t++P6zWUjS7KNuZGX1pdbO5S83Mqb9eXEIUC1gfV4r2GEAP08IHk5LsfluNzkcsEzVnEIULXLFS4HiMvNdrnh+uFyXI7LVbhcTN7hJQ4BqnU5eTlAXG6+y/XbjstxOS5X4XJ93nA5cQhQrcupYwXE5Wa7XLRWMJfjclUuV6wVLA4BAgSIyy3ncl0p6aoULsfluNxcl4vRM1ZxCBAgQFxuybWC25ov1+Wc2nK543tOj/tpeYxpOz9mzX3GERpd7uI4PWZcGuO8Hf82vSr07n5FfW7TZrPlcuIQoAqgL19+NUKAuFyFyw1xyDPWVbtci9dQY/Pl+o7LiUOA5rdD7cPGCAHicubLcTkut4jLmS8nDgF6CJdT+wCIy3kfK5fjcsu43HA/xOXEIUCVLnffhAYjBIjL/ZjLZevLcTkuV+Vyyfpy4hCgKqCvX58YIUBcbr7Lxd8/vb1u6Gf7hstxuZ/tcp6xikOAAAHicubLPYz2BHk5LsfluJzA+tja7hlrr/YBEJeb63Lx2cd38nJcjstVuFyyvpw4BAgQIC7H5bgcl3u0Lpd77/AShwBVNGuSAOJylS739MNf7blcSv1+uFI+LFmbT5avzbv/gOmY8/2q+lzc+ZWbqvZPK76OS9duvrNfV5/2XG4YMS4nDgECBIjLcbmHdLmGzjh5OS7H5cShxoGsLweIy1W63G/v/+FyXI7LVbic+XLiECBAgLgcl+NyXI7LrcXlYilFHAIEaH77T4ABAKzsRPWz+TQ7AAAAAElFTkSuQmCCgg";

var data = [{
	name: "级",
	value: 2000
}, {
	name: "中级",
	value: 1000
}, {
	name: "高级",
	value: 2357
}];
var maxData = []; //计算阴影部分的最大值
var maxNumArray = [];
data.forEach(function(value, index) {
	maxNumArray.push(value.value);
});
data.forEach(function(value, index) {
	var num;
	maxData.push({
		name: value.name,
		value: Math.max.apply(null, maxNumArray)
	});
});
export const option04 = {
	grid: {
		left: "3%",
		right: "6%",
		bottom: "3%",
		containLabel: true
	},
	yAxis: [{
		type: "value",
		splitLine: {
			show: false
		},
		axisLine: {
			lineStyle: {
				color: "#fff"
			}
		},
		axisTick: {
			show: false,
			inside: true,
			length: 10
		},
		axisLabel: {
			textStyle: {
				fontSize: 14
			}
		}
	}],
	xAxis: [{
		type: "category",
		data: ["初级", "中级", "高级"],
		// data: ["更新单元计划审查", "土地建筑物核查及处置", "更新单元规划审批","实施主体确认","建设用地审批","建设工程管理与监督"],
		boundaryGap: ["20%", "20%"],
		axisLine: {
			lineStyle: {
				color: "#fff"
			}
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			textStyle: {
				fontSize: 12,
				color: "#fff"
			}
		}
	}],
	series: [{
		name: "100",
		type: "pictorialBar",
		stack: "总量",
		z: 3,
		barWidth: "45%",
		data: data,
		symbol: "image://" + fillImg,
		symbolClip: true,
		symbolSize: [20, "100%"]
	}, {
		name: "占位",
		type: "pictorialBar",
		barWidth: "45%",
		barGap: "-100%",
		silent: true,
		label: {
			normal: {
				show: true,
				position: "top",
				distance: 20,
				formatter: function(params) {
					var stuNum = 0;
					data.forEach(function(value, index, array) {
						if (params.name == value.name) {
							stuNum = value.value;
						}
					});
					return stuNum;
				},
				textStyle: {
					color: "#ffc72b",
					fontSize: 16
				},
				rich: {
					white: {
						color: "#fff",
						align: "left",
						fontSize: 16,
						padding: [0, 0]
					}
				}
			}
		},
		symbol: "image://" + bgImg,
		symbolClip: true,
		symbolSize: [20, "100%"],
		data: maxData
	}]
}