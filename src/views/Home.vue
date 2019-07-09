<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import api from '@/api'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    async testAPI() {
      try {
        const result = await api.topic.getTopics({
          params: {
            page: 1,
            tab: 'good',
            limit: 10,
            mdrender: true
          }
        })
        console.log('result === ', result)
      } catch (error) {
        console.log('err === ', error)
      } finally {
        console.log('finally')
      }
    }
  },
  mounted() {
    this.testAPI()
  }
}
</script>
