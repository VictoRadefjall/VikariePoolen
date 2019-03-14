<template>
    <main id="panel">

        <section class="topnav">
            <h1>Admin Panel</h1> 
            <button @click="$router.push('/add')">Lägg till</button>
        </section>

        <section class="filter">
            <h3>Filtrera Listan</h3>
        </section>

        <section class="list-avtive">   
       <Vikariekort class="card" v-for="(vikarie, index) in vikarier" :key="index" :vikarie="vikarie" />        

        </section>
        

        <footer>
            <a @click="$router.push('/edit')">Redigera vikarie</a>
        </footer>
        <router-view />
    </main>
</template>

<script>
import Vikariekort from '../components/Vikariekort'
export default {
    name: 'panel',

beforeMount() {
    this.$store.dispatch('getVikarier')
},
components: {
    Vikariekort
},
computed: {
    vikarier() {
        return this.$store.getters.vikarier;
    }
} 
}

</script>

<style lang="scss">
@import '../scss/main.scss';


#panel, {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 460px;
    width: 100%;
    background: $lightpurple;
    flex-direction: column;


    .topnav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50px;
        background: #8729FF;

        h1{
            color: whitesmoke;
            font-size: 1.5rem;
            margin: 0;
            padding: 10px;
        }
        button{
            margin: 10px;
            padding: 5px;
            border: solid white 2px;
            border-radius: 5px;
            background: none;
            color: white;
        }
    }
    .filter{
        width: 70%;
        height: 40px;
        border-radius: 5px;
        border: black solid 1px;
        background: #ffffff;
        @extend %center;
        margin: 15px;
    }
    footer{
        @extend %center;
        background: orange;
        width: 100%;
    }


}


</style>
