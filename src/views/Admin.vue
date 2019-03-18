<template>
    <main id="admin">
        <h1>Logga in som Admin</h1>
        <section class="login">
            <input v-model="username" type="text" class="username" placeholder="username">
            <input v-model="password" type="password" placeholder="password">
            <a href="#" @click="login" class="btn">Login</a>
        </section>
        <span v-if="!validPassword && !validUsername">Fel användarnamn eller lösenord.</span>
    </main>
</template>

<script>
export default {
    name: 'admin',
    data(){
        return {
            username: '',
            password: '',
            validUsername: true,
            validPassword: true
        }
    },
    methods: {
        login(){
            if(this.validUsername && this.validPassword){
                this.$store.dispatch('login', {username: this.username, password: this.password });
                console.log(this.$store.state.activeAdmin);
                this.$router.push('/panel');
            }
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

    .login {
        @extend %center;
        width: 50vw;
        flex-direction: column;
        margin: auto;
    }
}

</style>
