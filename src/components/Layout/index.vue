<template>
  <div class="layout-container">
      <slot name="aside"></slot>
      <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
     
    }
  },
  methods:{
    
  }
}
</script>

<style scoped lang="less">
  .layout-container{
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
  }
</style>