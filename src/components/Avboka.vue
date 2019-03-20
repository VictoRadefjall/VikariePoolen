<template>
    <main id="avboka">

        <div id="confirm">
            <h1>Du är på väg att avboka vikarie:</h1> 
            <h2> {{vikarie.namn}} </h2>
            <p>Tryck på X för att slutföra avbokning.</p>
            <br>
            <a @click="$router.push('/vikarelista/')">Gå tillbaka</a>
            <div class="icon">
                <img class="vikariebild" src="../assets/unconfirm.png" alt="Bild av vikarie" />
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

        & a {
            padding: .5rem;
            margin-top: .5rem;
            border-radius: 3px;
            @extend %center;
            background: $purple;
        }

        .icon{

            & img {
                width: 150px;
            }
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
