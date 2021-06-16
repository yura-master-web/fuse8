const setParams = config => {
    const params = config.params || {}
    config.params = Object.assign(params, {
        // apikey: process.env.VUE_APP_API_KEY,
        // plot: 'full',
    })
    return config
}

const returnData = res => {
    return res.data
}

export default axios => {
    axios.interceptors.request.use(setParams)
    axios.interceptors.response.use(returnData)
}
