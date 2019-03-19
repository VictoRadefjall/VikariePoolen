<template>
  <main id="start">
    <h1 class="h1-header">Vikariepoolen</h1>
    <img src="../assets/start.svg" />
    <p>När du behöver en poolare</p>
    <a class="startBtn" @click="$router.push('/vikarielista')">Hitta vikarie</a>
    <a class="admin" @click="$router.push('/login')">Admin</a>
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
  width: 100vw;

  & :nth-child(2) {
    height: 300px;
    width: 300px;
  }

  .h1-header {
    font-family: 'Sansita';
    font-weight: 700;
    font-style: italic;
    font-size: 2.5em;
    padding: .5rem;
    margin: 0;
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
    width: 40vw;
    cursor: pointer;
    @extend %center;

    &:hover {
      box-shadow: 3px 8px 8px rgba(0, 0, 0, 0.4);
      background: rgba(94, 13, 201, 0.548);
    }
  }

  .admin {
    background: #222;
    border: 1px solid black;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 1.25rem;
    margin: auto;
    margin-top: .5rem;
    font-weight: 600; 
    width: 40vw;
    cursor: pointer;
    @extend %center;
  }

  @media screen and (max-width: 500px) {
    .startBtn, .admin {
      width: 90vw;
    }
  }

}
</style>