<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  beforeMount() {
    this.$store.dispatch('getVikarier');
    this.$store.dispatch('getBokningar');
  }
};
</script>

<style lang="scss">
@import './scss/main.scss';

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .2s;
}
.fade-enter-active {
  transition-delay: .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
