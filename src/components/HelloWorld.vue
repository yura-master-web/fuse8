<template lang="pug">
<div class="hello">
    .container
        .row
            .col-xs-6
                h1 {{ msg }}
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            default: '',
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
h3
    margin 40px 0 0
    transition .3 margin

ul
    padding 0
    list-style-type none

li
    margin 0 10px
    display inline-block

a
    color #42b983
</style>
