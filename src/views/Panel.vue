<template>
    <main id="panel">
        <h1>Admin - Panel</h1>

        <footer>
            <a @click="$router.push('/add')">Lägg till vikarie</a> |
            <a @click="$router.push('/edit')">Redigera vikarie</a>
        </footer>
        <router-view />
    </main>
</template>

<script>
export default {
    name: 'panel'
}
</script>

<style lang="scss">
@import '../scss/main.scss';

</style>
