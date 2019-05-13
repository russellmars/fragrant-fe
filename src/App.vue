<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <button @click="doError1">测试错误1</button>
      <button @click="doError2">测试错误2</button>
      <img src="https://russellmars.github.io/image/picture/avatar.jpg" alt />
      <img src="" alt="" />
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    doError1() {
      console.log().log()
    },
    doError2() {
      throw new Error('随便写的东西测试错误')
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
