<template>
    <main id="avboka">
        <article :class="{ active : active }">
            <h1>Du har nu avbokat</h1>
            <span> {{ vikarie.namn }} </span>
        </article>   
         <section id="btn">
            <button type="button">Tillbaka</button>
         </section>
    </main>
</template>

<script>
export default {
    name: 'avboka',
    props: ['active'],
    computed: {
        vikarie() {
            return this.$store.getters.getVikarieById(this.$route.params.id);
        },
    },


};
</script>


<style lang="scss">
@import '../scss/main.scss';

#avboka {
    @extend %center;
    background: lightblue;

    article {
        height: 0;
        overflow: hidden;
        transition: all .2s ease;
    
    &.active {
        height: 120px;
    }
    
    }

}

</style>
