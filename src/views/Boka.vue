<template>
    <main id="boka">
        <h1>Boka</h1>
        
        <footer>
          <a @click="$router.push('/confirm')">Bekräfta bokning</a>
        </footer>
    </main>
</template>

<script>
export default {
    name: 'boka'
}
</script>

<style lang="scss">
@import '../scss/main.scss';

</style>
