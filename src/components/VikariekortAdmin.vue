<template>
  <main id="vikariekortAdmin">
    <section class="card">
      
      <aside>
        <img class="vikariebild" src="../assets/avatar.png" alt="Bild av vikarie" />
      </aside>

      <section class="info">
        <div class="nameEdit">
          <h2> {{ vikarie.namn }} </h2>
          <div class="icon">
            <a href="#top"><i class="fas fa-user-edit" @click="$router.push(`/panel/${vikarie._id}`)" href="#top"></i></a>
            <i class="fas fa-user-minus" @click="removeVikarie(vikarie._id)"></i>
          </div>
        </div>
        
        <article>
          <p> 
            Ämnen: 
              <span> 
                {{ vikarie.amne.length }} 
              </span>
          </p>
          <p> 
            Årskurs: 
              <span v-if="vikarie.klass.length > 1">
                {{ vikarie.klass.length }}+
              </span>
              <span v-else> 
                {{ vikarie.klass.length }} 
              </span>
          </p>
          <p>
            Kommuner: 
              <span v-if="vikarie.kommun.length > 1">
                Flera
              </span>
              <span v-else>
                {{ vikarie.kommun.length }} 
              </span>
          </p>
        </article>
      </section>

    </section>
    
  </main>
</template>

<script>
export default {
  name: 'vikariekortAdmin',
  props: ['vikarie'],
  computed: {
    vikarier() {
      return this.$store.getters.vikarier;
    },
    bokningar() {
      return this.$store.getters.bokningar;
    }
  },
  methods: {
    removeVikarie(vikarie) {
      this.$store.dispatch('removeVikarie', vikarie);
    }
  }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

#vikariekortAdmin {
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .nameEdit{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      
    }
    .fa-user-edit {
      color: $purple;
      opacity: .7;
      margin: 5px;
    }
    .fa-user-minus {
      color: rgb(189, 58, 108);
      opacity: .7;
      margin: 5px;
    }

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
        color: #073454;
        font-family: 'Roboto';
        font-weight: lighter;
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
              color: #685BF8;
              font-size: 1.2em;
              margin: 5px;
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
