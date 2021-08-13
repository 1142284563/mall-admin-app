<template>
  <div id="app">
  <Layout>
      <template #aside>
        <Aside/>
      </template>
      <template #default> 
          <router-view ></router-view>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout"
import Aside from "@/components/Aside"
export default {
  name: 'app',
  components: {
    Layout,
    Aside
  },
  methods:{
  }
}
</script>

<style>
</style>
