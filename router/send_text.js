const express = require('express')
const router = express();
const ApiRequest = require('../service/api_service')
const ApiConfig = require('../api/api_config')

router.post("/", (req, res) => {
    const data = {
        access_token: req.body.access_token,
        status: req.body.status
    }
    ApiRequest(
        ApiConfig.HOST_CONCIG.host,
        ApiConfig.API_ROUTER_CONFIG.send_text,
        'POST',
        data,
        (response, code) => {
            res.status(code).send(response)
        },
        (err) => {
            res.status(500).send(err)
        }
    )

})

module.exports = router;
