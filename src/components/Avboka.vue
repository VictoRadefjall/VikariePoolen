<template>
    <main id="avboka">
        <article :class="{ active : active }">
            <h1>Tack för din avbokning</h1>
        </article>   
    </main>
</template>





<script>
export default {
    name: 'avboka',
    props: ['active']
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
