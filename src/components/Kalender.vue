<template>
  <div class="kalender">

    <div class="icon">
        <img class="vikariebild" src="../assets/calendar.png" alt="Bild av vikarie" style="height:200px; width:200px;" />
    </div>
     <!-- Calender -->
     <div class="cal">
        <p>Välj datum från:</p>
        <date-pick v-model="StartDate" :format="'YYYY.MM.DD'"></date-pick>
        <p>Välj datum till:</p>
        <date-pick v-model="EndDate" :format="'YYYY.MM.DD'"></date-pick>
    </div>
  </div>   
</template>


<script>
import DatePick from 'vue-date-pick';

export default {
    name: 'kalender',
    components: {DatePick},
    data: () => ({
        StartDate: '',
        EndDate: ''
    }),
    methods : {
        nyBokning() {
            console.log(this.$children)
        }
    }   
};
</script>

<style lang="scss">
@import 'vue-date-pick/src/vueDatePick.scss';
@import '../scss/main.scss';


.kalender {
    border-radius: 5px;
    transform: scale(0.75);
    @extend %center;
    display: flex;
    flex-direction: row;
    background: rgb(193, 137, 238);
    padding: 2rem;
    border: solid grey 1pt;
    // box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);

    .cal{
        margin-left: 1rem;

        p{
            text-align: left;
            color: white;
        }
    }

 
    .vdpComponent{
        height: 50px;

        
    }

    .vdpHeader{
        background-color:hotpink;
        height: 4rem !important;
    }

    .vdpArrow:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -0.5em;
    width: 0;
    height: 0;
    }
}

</style>
















