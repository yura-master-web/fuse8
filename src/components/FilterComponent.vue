<template>
    <form class="filter" @submit.prevent="() => {}">
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
            set(searchString) {
                const query = searchString.length >= 3 ? searchString : ''
                this.$emit('search', query)
            },
        },
    },
}
</script>
