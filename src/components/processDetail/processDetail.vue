<template>

<!-- 流程进度表 -->
<div class="process-sheet f_column">
    <h2 class="sheet-title f_row_c_c">土地建筑信息核查阶段项目列表 <button type="button" @click="warnHandle">监督预警</button></h2>
    <div class="flex" style="overflow:auto;margin-bottom:30px;">
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

</template>

<script>
import Vue from 'vue'
import api from '@/api'
import * as Config from 'config'
import { mapMutations } from 'vuex'
//引入组件
export default {
	components:{

	},
	data(){
		return {
			

		}
	},
	methods:{
        ...mapMutations({
            setWarnHandle:'SET_WARN_HANDLE'
        }),
        warnHandle() {
            this.setWarnHandle(true)
            this.$router.push({ name: 'process' })
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
    background:rgba(255,255,255,.8)

}
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

</style>