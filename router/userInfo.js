const express = require('express')
const router = express();
const ApiRequest = require('../service/api_service')
const ApiConfig = require('../api/api_config')

router.get("/", (req, res) => {

    let access_token = req.query.access_token
    let uid = req.query.uid == null ? "" : req.query.uid
    let screen_name = req.query.screen_name == null ? "" : req.query.screen_name

    const path = ApiConfig.API_ROUTER_CONFIG.userInfo +
        '?access_token=' + access_token +
        '&uid=' + uid +
        '&screen_name=' + screen_name

    ApiRequest(
        ApiConfig.HOST_CONCIG.host,
        path,
        'get',
        null,
        (response, code) => {
            res.status(code).send(response)
        },
        (err) => {
            res.status(500).send(err)
        }
    )

})

module.exports = router;