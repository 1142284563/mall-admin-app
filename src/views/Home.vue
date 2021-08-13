<template>
  <div class="home-container">
     <NavTop :height="60"/>
  </div>
</template>

<script>
import NavTop from '@/components/NavTop'
export default {
    data(){
       return {

       }
    },
    methods:{
        
    },
    components:{
        NavTop
    }
}
</script>

<style scoped lang="less">
    .home-container{
        flex: 1;
        overflow-y: scroll;
    }
</style>