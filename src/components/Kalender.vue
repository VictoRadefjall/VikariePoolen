<template>
  <div class="kalender">
     <!-- Calender -->
 
    <date-pick
        v-model="StartDate" 
        :hasInputElement="false" 
    ></date-pick>

  </div>   
</template>


<script>
import DatePick from 'vue-date-pick';

export default {
    name: 'kalender',
    components: {DatePick},
    data() {
      return {
        StartDate: '2019-01-01',
        endDate: ''
      }
    },
}
</script>

<style lang="scss">
@import 'vue-date-pick/src/vueDatePick.scss';
@import '../scss/main.scss';


.kalender {
    transform: scale(0.75);
    @extend %center;
    display: block;
 
    .vdpComponent{
        height: 50px;
        
    }

    .vdpHeader{
        background-color:#BFDE8E;
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
















