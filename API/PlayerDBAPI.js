const axios = require('axios')
const config = require('../config.json')

async function getUUID(username) {
    try {
        return (await axios.get(`${config.api.playerDBAPI}/${username}`)).data.data.player.raw_id
    } catch (error) {
        console.log(error)
    }
}

async function getUsername(uuid) {
    try {
        return (await axios.get(`${config.api.playerDBAPI}/${uuid}`)).data.data.player.username
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getUUID, getUsername };