<template>
    <form class="filter">
        <label class="filter__lable fw-b d-xs-flex align-items-xs-center">
            Filter
            <input class="filter__input" type="text" v-model="search" />
        </label>
    </form>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {
        search: {
            get() {
                return ''
            },
            set(val) {
                console.log(val)
            },
        },
    },
}
</script>
