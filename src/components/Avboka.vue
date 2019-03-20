<template>
    <main id="avboka">
        <!-- <article :class="{ active : active }">
            <h1>Du har nu avbokat </h1>
            <span> {{ vikarie.namn }} </span>
        </article>    -->

        <div id="confirm">
            <h1>Du har nu avbokat vikarie:</h1> 
            <h2> {{vikarie.namn}} </h2>

            <div class="icon">
                <img class="vikariebild" src="../assets/unconfirm.png" alt="Bild av vikarie" style="height:200px; width:200px;" />
            </div>  
        </div>
    </main>
</template>



<script>
export default {
    name: 'avboka',
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

    article {
        height: 0;
        overflow: hidden;
        transition: all .2s ease;
    
    &.active {
        height: 120px;
    }
    
    }
        #confirm {
        color: white;
        background: $lightpurple;
        max-width: 480px;
        width: 100%;
        height: 80vh;
        border-radius: 10px;
        @extend %center;
        flex-direction: column;

        .icon{
            height: 150px;
            width: 150px;
        }
        p {
            margin: 0;
            padding: 0;
        }
        h2 {
            font-size: 2rem;
            font-weight: lighter;
            color:hotpink;
        }
        h3 {
            font-size: 1.5rem;
            margin: 10px;
            color: rgb(189, 255, 189);
        }
    }

}

</style>
