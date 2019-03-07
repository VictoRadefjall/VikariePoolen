<template>
    <main id="add">
      <h1>Lägg till vikarie</h1>
      <form id="addForm">
          <label for="">Namn </label>
          <input type="text"> <br>
          <label for="">Info </label>
          <textarea rows="4" cols="50" /> <br>
          <label for="">Ämnen </label>
          <select></select> <br>
          <label for="">Kommun </label>
          <select></select> <br>
          <button type="button">Lägg till</button>
      </form>
    </main>
</template>

<script>
export default {
    name: 'adduser'
}
</script>

<style lang="scss">
@import '../scss/main.scss';

</style>
