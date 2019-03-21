<template>
  <main id="vikariekort">

     <section class="card" @click="$router.push(`/vikarielista/${vikarie._id}`)">

      <aside>
        <img class="vikariebild" src="../assets/avatar.png" alt="Bild av vikarie" />
      </aside>

      <section class="info">
        <h2> {{ vikarie.namn }} </h2>
        <section v-if="!bokning || bokning != undefined && new Date(bokning.datum.till).getUnixTime() < this.$store.state.today.toFixed()" class="messages">
          <span class="greenTxt"> Tillgänglig </span>
        </section>
        <section v-if="bokning && new Date(bokning.datum.till).getUnixTime() > this.$store.state.today.toFixed()" class="messages">
          <span class="redTxt"> Bokad fram till {{ bokning.datum.till }} </span>
        </section>

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
    bokningar() {
      return this.$store.getters.bokningar
    },
    bokning() {
      let avbokning = this.$store.state.bokningar.filter(bokning => bokning.vikarie._id.match(this.vikarie._id));
      return avbokning[0];
    },
  }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

#vikariekort {
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
    border-left: solid 5px rgb(166, 94, 180);

    .info {
      display: flex;
      flex-direction: column;
      margin-left: .5rem;
      flex: 7;

        & span {
          font-size: .75em;
          display: flex;
        }

        .greenTxt {
          color: green;
          margin-top: .25rem;
        }

        .redTxt {
          color: rgb(253, 119, 104);
           margin-top: .25rem;
        }

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
        color: #444;
        font-weight: 400;

        p {
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
      font-size: 1em;

      .info {

        article {
          font-size: .75em;
        } 

        h2 {
          font-size: 1.2em;
        }
      }
    }
  }
}


</style>
