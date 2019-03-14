<template>
    <main id="boka">
      <div class="profil">
        <h1>Vikarieprofil</h1>
        <h2> {{ vikarie.namn }} </h2>
        <img src="../assets/avatar.png" alt="avatar"/>
       </div>
       <section class="info">
           <p>Ämne
               <span> {{ vikarie.amne }} </span>
           </p>

       </section>
        <footer>
         <!-- <a href="#" @click="toggle">Avboka</a> -->
          <a href="#" @click="toggle">Boka</a>
        </footer>

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
            console.log('You are bookt')
            this.active = !this.active;
        }
    },
    computed: {
        vikarie(){
            return this.$store.getters.getVikarieById($this.router.params.id);
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
