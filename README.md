# Hypixel-API-list

List of the most useful APIs for Hypixel Network. Helpful for people who are making bots related to Hypixel Network. Feel free to use or edit code without my permissions.

<hr>

## Usage

First you import API from folder where it's located.
`const SkyHelperAPI = require('./API/SkyHelperAPI')`

After that You can use every function in the file of API. In this case example I'm gonna use `getFetchur()`

``
SkyHelperAPI.getFetchur().then(response => {
    console.log(`Fetchur Requests: ${response.data.text}`)
})
``

After running code, the response will be current fetchur item, at the time of making this the item was `1x Flint and Steel`

Full code

```
const SkyHelperAPI = require('./API/SkyHelperAPI')

SkyHelperAPI.getFetchur().then(response => {
    console.log(`Fetchur Requests: ${response.data.text}`)
})
```

If u need more help or you have found bug, feel free to DM me on Discord, DuckySoLucky#5181.

## Help

If you are going through API like Hypixel you can get lost so I recommend you using websites like [JSON Path Finder](https://jsonpathfinder.com/), it shows you exact path and it can save a lot of time and suffer

### Powered By
- [Hypixel Network API](http://api.hypixel.net/)
- [Hypixel API Reborn](https://hypixel.stavzdev.me/#/)
- [PlayerDB API](https://playerdb.co/)
- [SkyHelper API](https://github.com/Altpapier/SkyHelperAPI)
- [SkyShiiyu API](https://github.com/SkyCryptWebsite/SkyCrypt)
