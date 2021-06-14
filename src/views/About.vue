<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.about
    +media-breakpoint-down('sm')
        display block

    +media-breakpoint-down('xs')
        display none

.title
    display none

    +media-breakpoint-down('sm')
        display block
</style>
