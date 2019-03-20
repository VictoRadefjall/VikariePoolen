<template>
    <main class="holder">
        <div id="confirm">
            <h1>Tack för din bokning av</h1> 
            <h2> {{vikarie.namn}} </h2>
            <p>När:</p> 
            <h3> {{vikarie.datum.fran.toString()}}</h3>
            <h3> {{vikarie.datum.till.toString()}}</h3>
            <p>Var:</p> 
            <h3> {{vikarie.kommun.toString()}}</h3>

            <div class="icon">
                <img class="vikariebild" src="../assets/confirm.png" alt="Bild av vikarie" style="height:200px; width:200px;" />
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
