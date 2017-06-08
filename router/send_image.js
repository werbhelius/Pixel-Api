const express = require('express')
const router = express();
const ApiRequest = require('../service/api_service')
const ApiConfig = require('../api/api_config')
const multer = require('multer');
const upload = multer({ dest: './public/images/user' });


router.post("/", upload.single('pic'), (req, res) => {

    const data = {
        access_token: req.body.access_token,
        status: req.body.status,
        pic: req.body.pic
    }

    ApiRequest(
        ApiConfig.HOST_CONCIG.host,
        ApiConfig.API_ROUTER_CONFIG.send_image,
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
