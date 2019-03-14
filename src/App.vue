<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Start</router-link> |
      <router-link to="/vikarielista">Vikarielista</router-link> |
      <router-link to="/panel">Panel</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './scss/main.scss';

#app {
  // background: url('./assets/vikariepoolare.jpg') repeat;
  background-size: contain;
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
