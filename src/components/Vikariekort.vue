<template>
  <div class="vikariekort" @click="$router.push('/vikarieprofil')">
    <h2>Name</h2>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'vikariekort',

}
</script>

<style lang="scss">
@import '../scss/main.scss';

.vikariekort {
  background: #ccc;
}

</style>
