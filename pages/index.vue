<template>
    <div>
        <!-- content goes here -->
        <h1>Internet points</h1>

        <button @click="facebookLogin">Login with Facebook</button>
    </div>
</template>

<script>
export default {
    data () {
        return {}; // data goes here
    },
    methods: {
        facebookLogin () {
            this.$auth.loginWith('facebook');
        }
    }
};
</script>

<style scoped>
/* CSS goes here */
</style>
