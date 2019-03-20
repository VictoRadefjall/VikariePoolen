<template>
    <main id="admin">
        <h1 @click="$router.push('/')">Logga in som Admin</h1>
        <section class="login">
            <input v-model="username" type="text" class="username" placeholder="username">
            <input v-model="password" type="password" placeholder="password">
            <a href="#"  @click="login" class="btn">Login</a>
        </section>
    </main>
</template>






<script>
export default {
    name: 'admin',
    data(){
        return {
            username: 'admin',
            password: 'poolare123',
            validUsername: true,
            validPassword: true
        }
    },
    methods: {
        login(){
            if(this.validUsername && this.validPassword) {
                this.isLoggedIn = true;
                this.$store.dispatch('login', {username: this.username, password: this.password });
            } 
        }
    },
    computed: {
        admin() {
            return this.$store.state.activeAdmin;
        },
        loggedIn() {
            return this.$store.state.loggedIn;
        }
    }
}
</script>

<style lang="scss">
@import '../scss/main';

#admin {
    display: flex;
    flex-direction: column;
    width: 100vw;
    color: white;

    .rejected {
        color: red;
    }
    .rejected:visited {
  background: red;
}

    & h1 {
        font-family: 'Sansita';
        font-style: italic;
        text-transform: uppercase;
        cursor: pointer;
    }

    .login {
        @extend %center;
        width: 50vw;
        flex-direction: column;
        margin: auto;

        .btn {
            @extend %center;
            width: 12rem;
            font-size: 1.25em;
            padding: 1rem;
            margin-top: 1rem;
            text-decoration: none;
            font-weight: 600;
            color: white;
            border-radius: 4px;
            background: #222;
            box-sizing: border-box;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        input {
            background: $purple;
            margin: .25rem;
            height: 2rem;
            width: 15rem;
            font-size: 1em;
            color: white;
            border: $purple 2px solid;
            border-radius: 3px;
            padding: .25rem;
             
            &::placeholder {
                color: #ccc;
            }
        }

    }
}

</style>
