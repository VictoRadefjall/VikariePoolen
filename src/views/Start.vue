<template>
  <main id="start">
    <h1 class="h1-header">Vikariepoolen</h1>
    <img src="../assets/start.svg" />
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
  background: linear-gradient($purple, $lightpurple);
  height: 100vh;
  

  .h1-header {
    font-family: 'Sansita';
    font-weight: 700;
    font-style: italic;
    font-size: 2.5em;
  }

  .startBtn {
    background: rgba(135, 41, 255, 0.21);
    border: 1px solid black;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 1.25rem;
    margin: auto;
    font-weight: 600;
    display: block;
    width: 40vw;
    cursor: pointer;
    @extend %center;

    &:hover {
      box-shadow: 3px 8px 8px rgba(0, 0, 0, 0.4);
    }
  }

  @media screen and (max-width: 500px) {
    .startBtn {
      width: 90vw;
    }
  }

}
</style>