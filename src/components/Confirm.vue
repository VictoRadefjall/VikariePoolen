<template>
    <main class="holder">
        <div id="confirm">
            <h1>Du är på väg att boka vikarie:</h1> 
            <h2> {{vikarie.namn}} </h2>

            <p class="booktext">Tryck på X för att slutföra bokning.</p>
        
            <a @click="$router.push('/vikarelista')">Gå tillbaka</a>

            <div class="icon">
                <img class="vikariebild" src="../assets/confirm.png" alt="Bild av vikarie" />
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'confirm',
    computed: {
        vikarie() {
          return this.$store.getters.getVikarieById(this.$route.params.id);
        },
    }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

.holder {
    @extend %center;

    #confirm {
        color: white;
        background: $lightpurple;
        max-width: 480px;
        width: 100%;
        height: 85vh;
        padding: 1.5rem;
        overflow: scroll;
        border-radius: 10px;
        @extend %center;
        flex-direction: column;

        & a {
            padding: 1rem;
            margin: 1rem;
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

            &.booktext {
                font-size: 1.5em;
                padding: .5rem;
            }
        }

        h1 {
            margin: 0;
        }

        h2 {
            font-size: 2rem;
            padding: .5rem;
            font-weight: lighter;
            color:hotpink;
        }
        h3 {
            font-size: 1.5rem;
            margin: 10px;
            color: $lightgreen;
        }
    }
}

</style>
