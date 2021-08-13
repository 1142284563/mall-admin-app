<template>
  <div class="demo-container">
      {{num1}}
      <button @click="$emit('update:num1',num1+1)">+</button>
      <button @click="$emit('update:num1',num1-1)">-</button>
  </div>
</template>

<script>
export default {
    props:["num1"]
}
</script>

<style>

</style>