<template>
	<div v-if="isShow" class="tip_box">
		<div class="tip f_column_c">
			<div class="bg"></div>
			<span v-show="isError == 1" class="iconfont icon-emoji"></span>
			<span v-show="isError == 0" class="iconfont icon-feedback"></span>
			<span class="text">{{tipTxt}}</span>
		</div>
	</div>
</template>
<script>
export default {
	name: 'tip',
	data() {
		return {
			isShow:false,
			isError:0,
			tipTxt:'提示信息'
		}
	},
	methods: {
		timerHidden(tipTxt,isError=0) {
			const that = this
			return new Promise(function (resolve, reject) {
        that.tipTxt = tipTxt
        that.isError = isError
        that.isShow = true
        setTimeout(() => {
          that.isShow = false
          resolve()
        }, 1000)
      })
		}
	}

}

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~common/stylus/mixin';
@import '~common/stylus/variable';
.iconfont
	font-size:34px
	margin-top:12px
.bg
	width:100%
	height:100%
	background:rgba(0,0,0,.5)
	position:absolute
	z-index:-1
	border-radius:10px
.tip_box
	width:100%
	height:100px
	position:fixed
	z-index:2
	margin:auto
	left:0
	top:50%
	margin-top:-50px
	display:flex
	flex-direction:row
	align-items:center
	justify-content:center
.tip
	max-width:120px
	position:relative
	
.tip 
	span
		color:$color-FF
	.text
		line-height:1.3
		text-align:justify
		padding:0 10px
		font-size:$font-size-small
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin-bottom:12px
		

</style>