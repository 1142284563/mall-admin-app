<template>
  <div id="app">
  <Layout>
      <template #aside>
        <Aside :width="250"/>
      </template>
      <template #default> 
          <router-view ></router-view>
      </template>
    </Layout>
  </div>
</template>

<script>
import Demo from "@/components/Demo"
import Layout from "@/components/Layout"
import Aside from "@/components/Aside"
export default {
  name: 'app',
  components: {
    Layout,
    Aside,
    Demo
  },
  data(){
    return {
      num:1
    }
  },
  methods:{
  }
}
</script>

<style>
</style>
