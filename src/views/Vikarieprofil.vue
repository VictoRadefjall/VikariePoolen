<template>
    <main id="boka" >
        <h1>Seynabo Sey</h1>
          <img src="../assets/avatar.png" alt="avatar">
        <footer>
          <a href="#" @click="toggle">Avboka</a>
          <a href="#">Boka</a>
        </footer>
        <avboka :active="active" />
    </main>
</template>

<script>
import avboka from '@/components/Avboka';

export default {
    name: 'vikarieprofil',
    components: {
        avboka
    },
    data(){
        return {
            active: false
        }
    },
    methods: {
        toggle(){
            console.log('ahjsdfjhsdfjh')
            this.active = !this.active;
        }
    }
}
</script>

<style lang="scss">
@import '../scss/main.scss';
footer {
    a {
        background: lightcoral;
        padding: .2rem;
        margin: .5rem;
        border: 0.2rem solid black;
        text-decoration: none;
        width: 2rem;
    }
}
</style>
