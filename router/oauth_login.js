const express = require('express')
const router = express();
const ApiRequest = require('../service/api_service')

router.post("/", (req, res) => {
    const data = {
        client_id: req.body.client_id,
        client_secret: req.body.client_secret,
        grant_type: req.body.grant_type,
        code: req.body.code,
        redirect_uri: req.body.redirect_uri,
    }
    console.log(data);
    ApiRequest(
        'api.weibo.com',
        '/oauth2/access_token',
        'POST',
        data,
        (res_data) => {
            console.log(JSON.stringify(res_data))
            res.status(200).send(res_data)
        },
        (err) => {
            console.log(err);
            res.status(502).send(JSON.stringify(err))
        }
    )

})

module.exports = router;
