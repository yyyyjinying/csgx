<template>
  <div :class="topLoad == 0?'loading':'Load loading'">
    <img width="24" height="24" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      },
      topLoad: {
        type: Number,
        default: 0
      },

    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  
  .loading
    width: 100%
    height: 100px
    text-align: center
    position:absolute
    left:50%
    margin-left:-50%
    top:100px
    .desc
      line-height: 20px
      font-size: $font-size-small
      color: $color-text-l
  .Load
    top:200px
</style>
