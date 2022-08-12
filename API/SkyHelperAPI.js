const axios = require('axios')
const config = require('../../../config.json')

async function getProfiles(username) {
    try {
        return (await axios.get(`${config.api.skyHelperAPI}/profiles/${username}?key=${config.api.skyHelperKey}`)).data
    } catch (error) {
        return error
    }
}

async function getProfile(username, profile) {
    try {
        return (await axios.get(`${config.api.skyHelperAPI}/profile/${username}/${profile}?key=${config.api.skyHelperKey}`)).data
    } catch (error) {
        return error
    }
}

async function getFetchur() {
    return await axios.get(`${config.api.skyHelperAPI}/fetchur?key=${config.api.skyHelperKey}`).data
}

module.exports = { getFetchur, getProfiles, getProfile }
