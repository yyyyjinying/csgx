<template>
  <div id="app" class="app f_column flex">
    <route-tab></route-tab>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
import RouteTab from 'base/routeTab/routeTab'

const ERR_OK = 0

export default {
  name:'app',
  components:{
    RouteTab
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/variable";
@import "~common/stylus/mixin";






</style>
