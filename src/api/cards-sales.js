import axios from '@/plugins/axios'

export default {
    fetchCards() {
        return axios({
            url: '/homes',
            method: 'GET',
        })
    },
}
