<template>
    <main id="edit">
        <h1>Redigera vikarie</h1>
        <form id="editForm">
          <label for="">Namn </label>
          <input type="text"> <br>
          <label for="">Info </label>
          <textarea rows="4" cols="50" /> <br>
          <label for="">Ämnen </label>
          <select></select> <br>
          <label for="">Kommun </label>
          <select></select> <br>
          <label for="">Datum </label> <br>
          <button type="button">Redigera</button>
      </form>
    </main>
</template>

<script>
export default {
    name: 'edituser'
}
</script>

<style lang="scss">
@import '../scss/main.scss';

</style>
