<template>
  <main id="start">
    <h1>Vikariepoolen</h1>
    <h3>När du behöver en poolare</h3>

    <a @click="$router.push('/vikarielista')">Gå till vikarielistan</a>
  </main>
</template>

<script>

export default {
  name: 'start',
}

</script>

<style lang="scss">
@import '../scss/main.scss';


</style>

