<template>
    <div class="home">
        <h1 class="main-title fw-b tx-xs-a-c cl-green">Our Latest Developments</h1>
        <FilterComponent @search="search" />
        <div class="cards-sales row" v-if="cardsList.length">
            <CardSale v-for="card in filterCardList" :key="card.id" :card="card" />
        </div>
        <div class="tx-xs-center w-100 mt-sm-6 mt-xs-3 d-xs-flex justify-content-xs-center">
            <a class="btn-more fw-b tdn" href="javascript:void(0);">
                See more
                <svg class="btn-more__icon pos-rel">
                    <use :href="'images/icon.svg#icon_chevron' | imgPath"></use>
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
    data() {
        return {
            searchString: '',
        }
    },
    computed: {
        ...mapGetters('sales', ['cardsList']),
        filterCardList() {
            return this.cardsList.filter(card => {
                return card.title.toLowerCase().includes(this.searchString.toLowerCase())
            })
        },
    },
    methods: {
        search(searchString) {
            this.searchString = searchString
        },
    },
}
</script>

<!-- <style lang="stylus" src="./front/styles/app.styl"></style> -->
