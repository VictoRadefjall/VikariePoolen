<template>
  <div class="kalender">
     <!-- Calender -->
 
    <date-pick
        v-model="date"
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
        date: '2019-01-01',
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
        color:#BFDE8E;
        height: 4rem !important;
    }
}

</style>
















