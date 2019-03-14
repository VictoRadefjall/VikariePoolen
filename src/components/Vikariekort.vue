<template>
  <main id="vikariekort">
    <section class="card" @click="$router.push(`/vikarielista/${vikarie._id}`)">
      
      <aside>
        <img class="vikariebild" src="../assets/avatar.png" alt="Bild av vikarie" />
      </aside>

      <section class="info">
        <h2> {{ vikarie.namn }} </h2>
        <article>
          <p> 
            Ämnen: 
              <span v-if="vikarie.amne.length > 1"> 
                {{ vikarie.amne.length }} 
              </span>
              <span v-else>
                {{ vikarie.amne.toString() }}
              </span>
          </p>
          <p> 
            Årskurs: 
              <span v-if="vikarie.klass.length > 1">
                {{ vikarie.klass.length }}+
              </span>
              <span v-else> 
                {{ vikarie.klass.toString() }} 
              </span>
          </p>
          <p>
            Kommuner: 
              <span v-if="vikarie.kommun.length > 1">
                Flera
              </span>
              <span v-else>
                {{ vikarie.kommun.toString() }} 
              </span>
          </p>
        </article>
      </section>

    </section>
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'vikariekort',
  props: ['vikarie'],
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
    width: 40vw;
    height: 5rem;
    padding: 1rem;
    display: inherit;
    border-radius: 5px;
    background: #eee;
    flex-direction: row;
    margin: .5rem;
    cursor: pointer;

    .info {
      display: flex;
      flex-direction: column;
      margin-left: .5rem;
      flex: 7;

      h2 {
        display: inherit;
        margin: 0;
        align-items: center;
        justify-content: flex-start;
      }

      article {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;

        p {
            font-weight: 600;
            display: inherit;
            flex-direction: column;
            @extend %center;

            span {
              font-weight: normal;
              color: purple;
              font-size: 1em;
            }
        }
      }

    }
  
    aside {
      flex: 2;
      @extend %center;
    
      .vikariebild {
        width: 5rem;
        border-radius: 9999rem;
        background: linear-gradient(orange, white)
      }
    }

  }

   @media screen and (max-width: 500px) {
    .card {
      width: 85vw;
    }
  }
}


</style>
