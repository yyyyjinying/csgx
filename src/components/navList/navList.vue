<template>
        <div class="project_information">
        <div class="project_information_title title_box f_row_align border_radius">
          <img src="../../../static/img/title_msg_2.png">
          <span>项目信息</span>
        </div>
        <div class="project_information_content">
          <div class="search">
            <img src="../../../static/img/search_icon.png">
            <input type="text" placeholder="搜索" @focus="clearHandle" @blur="searchHandle" v-model="keyword"  @keyup="keyupHandle($event)"/>
          </div>
          <div class="project_information_name">
              <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            background-color="#0d1523"
            active-text-color="#2a7be2"
            :collapse="false"
            default-openeds="1-1"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1" class="custom-bg">
                <template slot="title">
                <img src="../../../static/img/project_icon.png">
                <span>项目列表</span>
                </template>
                <el-menu-item v-for="(item,index) in list" @click="menuClick(item,index)" :index="item.id" :key="index">• {{item.projectname}}></el-menu-item>
            </el-submenu>
            </el-menu>
          </div>
        </div>
      </div>
    
</template>

<script>
export default {
  name: "NavLeft",
  props:{
      list:{
        type: Array,
        default: function () {
          return []
        }
      }
  },
  data() {
    return {
      openeds:true, //true菜单列表打开，false菜单列表关闭
      keyword:'' //搜索关键字
    };
  },
  watch: {
   
  },
  mounted() {
    
  },
  methods: {
    handleOpen(e) {
      console.log('open',e)
    },
    handleClose(e) {
      console.log('close',e)
    },
    //获取焦点是清空搜索
    clearHandle() {
      this.keyword = ''
    },
    //键盘按回车键开始搜索
    keyupHandle(ev) {
      if(ev.keyCode == 13){
        this._searchHandle()
      }
    },
    //失去焦点开始搜索
    searchHandle() {
      this._searchHandle()
    },
    //搜索请求
    _searchHandle() {
			this.$emit('searchHandle',this.keyword)
    },
    //菜单点击切换
    menuClick(item,index) {
      this.$emit('listHandle',item,index)
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';
@import '~common/stylus/mixin';
@import '~common/stylus/common';

.project_information
    .title_box
        background:rgba(86,86,86,.18);
        padding:0 16px;
        box-sizing:border-box
        height:46px;
        border:1px solid #fff;
        margin-bottom:2px;
        max-width:318px;
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

    .custom-bg
      .el-submenu__title
          background:#0e3653 !important;
@media screen and (max-width: 1600px) {
  .project_information .title_box,.project_information_content{
    min-width:250px;
  }
	
}
</style>