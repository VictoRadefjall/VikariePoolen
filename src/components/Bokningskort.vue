<template>
    <main id="bokningar">
            <div class="bookingcard" v-for="bokning in bokningar" :key="bokning.id">
            
                <div class="name">
                    <p>Vikarie:</p>
                    <h2>{{ bokning.vikarie.namn }}</h2>
                    <p>Bokare:</p> <h3>{{ bokning.bokare }}</h3>
                    <p>Skola:</p> <h3>{{ bokning.skola }}</h3>
                </div>

                <div class="date">
                    <p>Från:</p>
                    <h3 class="margindwn">{{ bokning.datum.fran }}</h3>
                    <p>Till:</p>
                    <h3 class="margindwn">{{ bokning.datum.till }}</h3>
                </div>
            </div>
    </main>
</template>

<script>
export default {
    name: 'bokningskort',
    computed: {
        bokningar() {
            return this.$store.getters.oldBookings;
        },
    }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

.bookingcard {
    display: flex;
    flex-direction: row;
    background: #eee;
    max-width: 480px;
    width: 100vw;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-left: solid 8px salmon;
    margin-bottom: 1rem;

    .name {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: .8rem;
        width: 70%;
        text-align: left;
    }
    .date {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 30%;
        padding: 5px;

        .margindwn{
            margin-bottom: 1.1rem;
        }
    }
        h2{
            padding: 0;
            margin: 0;
            margin-bottom: 10px;
            color: #073454;
            font-weight: lighter;
        }
        h3{
            padding: 0;
            margin: 0;
            margin-bottom: 10px;
            color: #685BF8;
            font-weight: lighter;
        }
        p{
            padding: 0;
            margin: 0;
            color:lightslategray;
        }

        @media screen and (max-width: 500px) {
            .name {
                width: 10%;
            }
 
        }
}



</style>
