<template>
  <main id="vikariekort">
    <section class="card" 
      v-for="(vikarie, index) in vikarier" 
      :key="index" 
      @click=" $router.push(`/vikarielista/${vikarie._id}`)">
      
      <aside>
        <img class="vikariebild" src="../assets/avatar.png" alt="Bild av vikarie" />
      </aside>

      <section class="info">
        <h2> {{ vikarie.namn }} </h2>
        <ul>
          <li> 
            Ämnen: 
              <span> 
                {{ vikarie.amne.length }} 
              </span>
          </li>
          <li> 
            Årskurs: 
              <span v-if="vikarie.klass.length > 1">
                {{ vikarie.klass.length }}+
              </span>
              <span v-else> 
                {{ vikarie.klass.length }} 
              </span>
          </li>
          <li>
            Kommuner: 
              <span v-if="vikarie.kommun.length > 1">
                Flera
              </span>
              <span v-else>
                {{ vikarie.kommun.length }} 
              </span>
          </li>
        </ul>
      </section>
    </section>
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'vikariekort',
  computed: {
    vikarier() {
      return this.$store.getters.vikarier
    },
  }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

#vikariekort {
  display: flex;
  flex-direction: column;
  @extend %center;
  
  .card {
    width: 85vw;
    height: 10rem;
    padding: 1rem;
    display: inherit;
    border-radius: 5px;
    background: #eee;
    flex-direction: row;
    margin: .5rem;

    .info {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;

      h2 {
        align-items: flex-start;
        display: inherit;
        margin: 0;
        font-size: 2em;
      }

      ul {
        display: flex;
        width: 50vw;
        flex-direction: row;
        justify-content: space-between;
        font-size: 1.2em;

        li {
            list-style-type: none;
            display: inherit;
            @extend %center;
            flex-direction: column;

            span {
              color: purple;
              font-size: 1.5em;
            }
        }
      }
    }

    aside {
      @extend %center;
      padding: .5rem;
    
      .vikariebild {
        width: 25vw;
        max-width: 150px;
        border-radius: 9999rem;
        background: linear-gradient(orange, white)
      }
    }

  }
}


</style>
