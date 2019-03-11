<template>
  <main id="lista">
    <h1>Vikarielista</h1>
    
    <Vikariekort />
    
    <footer>

    </footer>
    
  </main>
</template>

<script>
import Vikariekort from '../components/Vikariekort'

export default {
  name: 'vikarielista',
  components: {
    Vikariekort
  }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

#lista {
  background: red;
}

</style>
