<template>
    <div class="home">
        <h1 class="main-title fw-b tx-xs-a-c cl-green">Our Latest Developments</h1>
        <FilterComponent />
        <div class="cards-sales row" v-if="cardsList.length">
            <CardSale v-for="card in cardsList" :key="card.id" :card="card" />
        </div>
        <div class="tx-xs-center w-100 mt-sm-6 mt-xs-3 d-xs-flex justify-content-xs-center">
            <a class="btn-more fw-b tdn" href="javascript:void(0);">
                See more
                <svg class="btn-more__icon pos-rel">
                    <use xlink:href="/images/icon.svg#icon_chevron"></use>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
import CardSale from '@/components/CardSale.vue'
import FilterComponent from '@/components/FilterComponent.vue'
import {mapGetters} from 'vuex'

export default {
    name: 'HomePage',
    components: {FilterComponent, CardSale},
    computed: {
        ...mapGetters('sales', ['cardsList']),
    },
    created() {
        // console.log(this.$store)
        // this.$store.dispatch('sales/fetchCards')
        // this.$store.actions.sales.fetchCards()
    },
}
</script>

<!-- <style lang="stylus" src="./front/styles/app.styl"></style> -->
