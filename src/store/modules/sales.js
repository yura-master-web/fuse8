import Sale from '@/api/cards-sales'
import mutations from '@/store/mutations'

const {FETCH_CARDS} = mutations

const cntViews = {
    namespaced: true,
    state: {
        cards: {},
    },
    getters: {
        cardsList: ({cards}) => cards,
    },
    mutations: {
        [FETCH_CARDS](state, value) {
            state.cards = value
        },
    },
    actions: {
        initSalesStore: {
            handler({dispatch}) {
                dispatch('fetchCards')
            },
            root: true,
        },
        async fetchCards({commit}) {
            try {
                const res = await Sale.fetchCards()
                console.log('res:', res)
                commit(FETCH_CARDS, res)
            } catch (err) {
                console.warn(err)
            }
        },
    },
}

export default cntViews
