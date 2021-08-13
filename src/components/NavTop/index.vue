<template>
  <div class="nav-top-container" :style="{height:height+'px'}">
      <a-button
      type="primary"
      @click="toggleCollapsed"
      class="button"
    >
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
     </a-button>
     
    <div class="breadcrumb">
        <a-breadcrumb>
            <a-breadcrumb-item><a href="#">首页</a></a-breadcrumb-item>
            <a-breadcrumb-item><a href="#">统计</a></a-breadcrumb-item>
        </a-breadcrumb>
    </div>
    <ul class="user-info">
        <li>欢迎，Roy<a-icon type="down" /></li>
        <li>退出</li>
    </ul>
  </div>
</template>

<script>
export default {
    props:{
        height:{
            type:Number,
            default:80
        }
    },
    data(){
        return {
            collapsed:false
        }
    },
    methods:{
        toggleCollapsed() {
            this.collapsed = !this.collapsed;
            this.$events.$emit("toggleCollapsed")
        }
    }
}
</script>

<style lang="less" scoped>
    .nav-top-container{
        display: flex;
        align-items: center;
        padding:10px 30px 10px 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        .breadcrumb{
            display: flex;
            align-items: center;
            margin-left: 15px;
            margin-right: auto;
        }
        .user-info{
            text-align: center;
            cursor: pointer;
            height: 100px;
            margin-top: 50px;
            margin-bottom: 0!important;
            li{
                width: 120px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                &:first-child{
                    margin-bottom: 5px;
                }
                [aria-label='icon: down']{
                    margin-left: 5px;
                }
            }
            li:last-child{
                display: none;
            }
            &:hover li:last-child{
                display: flex;
                background: #eee;
                color: #999;
                font-weight: 700;
            }
        }
    }
</style>