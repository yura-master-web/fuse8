<template>
    <div id="app" class="page">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="stylus">
#app
    margin-top 60px
    font-family Avenir, Helvetica, Arial, sans-serif
    text-align center
    color #2c3e50
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
</style>
