const axios = require('axios')
const config = require('../config.json')

async function getProfile(username) {
    const response = await axios.get(`${config.api.skyHelperAPI}/profiles/${username}?key=${config.api.skyHelperKey}`)
    if(response.data.status == 404){return 'There is no player with the given UUID or name or the player has no Skyblock profiles'}
    return response.data
}

async function getFetchur() {
    const response = await axios.get(`${config.api.skyHelperAPI}/fetchur?key=${config.api.skyHelperKey}`)
    if(response.status == 404){return 'Something went wrong, try again later.'}
    return response.data
}

module.exports = {getFetchur, getProfile};

