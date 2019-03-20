<template>
    <main id="bokningar">
        <h3>Gamla bokningar</h3>
            <div class="card" v-for="bokning in bokningar" :key="bokning.id">  
                <ul>
                   <li> Vikarie: {{ bokning.vikarie.namn }} </li>
                   <li> Från: {{ bokning.datum.fran }} </li>
                    <li> Till: {{ bokning.datum.till }} </li>
                    <li> Bokad av: {{ bokning.bokare }} </li>
                    <li> Skola: {{ bokning.skola }} </li>
              </ul>
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

<style>

</style>
