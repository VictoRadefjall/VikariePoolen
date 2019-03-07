<template>
    <main id="avboka">
        <h1>Avboka</h1>
        <a @click="$router.push('/vikarielista')">Slutför</a>
    </main>
</template>

<script>
export default {
    name: 'avboka'
}
</script>

<style lang="scss">
@import '../scss/main.scss';

</style>
