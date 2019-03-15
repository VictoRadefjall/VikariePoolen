<template>
  <main id="start">
    <h1 class="h1-header">Vikariepoolen</h1>
    <p>När du behöver en poolare</p>

    <a class="startBtn" @click="$router.push('/vikarielista')">Hitta vikarie</a>
  </main>
</template>

<script>

export default {
  name: 'start',
}

</script>

<style lang="scss">
@import '../scss/main.scss';

#start {
  color: white;
  text-transform: uppercase;
  

  .h1-header {
    font-family: 'Sansita';
    font-weight: 700;
    font-style: italic;
    font-size: 2.5em;
  }

  .startBtn {
    background: rgba(135, 41, 255, 0.21);
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 1.25rem;
    margin: auto;
    display: block;
    width: 40vw;
    @extend %center;
  }

  @media screen and (max-width: 500px) {
    .startBtn {
      width: 90vw;
    }
  }

}


</style>

