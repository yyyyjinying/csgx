<template>
    <div class="list">
        <h2 class="f_row_align title border_radius">
            <i class="iconfont icon-jibenxinxi"></i>
            <span>项目信息</span>
        </h2>
        <slot></slot>
        <div class="list-item">
            <div class="item">
                <h3 class="item-title f_row_align" @click="spreadHandle"><i class="iconfont icon-jibenxinxi1"></i><span class="flex">项目列表</span><i class="jiantou iconfont icon-j-jiantou1"></i></h3>
                <div class="item-lst">
                    <div class="f_row_align">• <span>龙田路口</span></div>
                    <div class="f_row_align">• <span>龙田路口</span></div>
                    <div class="f_row_align">• <span>龙田路口</span></div>
                    <div class="f_row_align active">• <span>龙田路口</span></div>
                    <div class="f_row_align">• <span>龙田路口</span></div>
                    <div class="f_row_align">• <span>龙田路口</span></div>
                    <div class="f_row_align">• <span>龙田路口</span></div>
                </div>
            </div>
            <div class="item">
                <h3 class="item-title f_row_align"><i class="iconfont icon-jibenxinxi1"></i><span class="flex">项目列表</span><i class="jiantou iconfont icon-j-jiantou1"></i></h3>
                <div class="item-lst">
                    <div class="f_row_align">• <span>龙田路口</span></div>
                    <div class="f_row_align">• <span>龙田路口</span></div>
                    <div class="f_row_align">• <span>龙田路口</span></div>
                    <div class="f_row_align active">• <span>龙田路口</span></div>
                    <div class="f_row_align">• <span>龙田路口</span></div>
                    <div class="f_row_align">• <span>龙田路口</span></div>
                    <div class="f_row_align">• <span>龙田路口</span></div>
                </div>
            </div>
            
        </div>
        
    </div>
</template>
<script>
    export default {
        name:'tabList',
        props:{
            list:{
                type: Array,
                default: function () {
                return []
                }
            }
        },
        methods:{
            spreadHandle() {
                
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~common/stylus/variable';
@import '~common/stylus/mixin';
.list
    margin-right:20px;
.title
    background:rgba(86,86,86,.18);
    padding:0 16px;
    box-sizing:border-box
    height:46px;
    border:1px solid #fff;
    margin-bottom:2px;
    width:318px;
    i
        font-size:$font-size-large-x;
        margin-right:10px;
    span
        font-size:$font-size-medium-x;
    &.border_radius
        border-radius:6px;
.list-item
    .item
        .item-title
            height:40px;
            background:#0e3857;
            position:relative;
            padding:0 0 0 18px;
            .jiantou
                font-size:30px;
            &::after
                content:'';
                display:block;
                width:4px;
                height:100%;
                background:#2a7be2;
                position:absolute;
                left:0;
                top:0;
            i
                font-size:$font-size-large-x
                margin-right:10px;
            span
                font-size:$font-size-medium-x
        .item-lst
            div
                padding-left:55px;
                padding-right:20px;
                height:36px;
                cursor:pointer;
                &.active
                    color:#2a7be2;
                &:hover
                    color:#2a7be2;
                    background:rgba(86,86,86,.18);
                span
                    font-size:$font-size-mediumn

</style>
