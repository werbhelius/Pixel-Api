const https = require('https')
const qs = require("querystring");

function ApiRequest(host, path, method, data, okCallback, errorCallback) {
    let option = {
        hostname: host,
        method: method,
        path: path,
        port: null,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    const client = https.request(option, (res) => {
        res.on('error', (err) => {
            errorCallback(err)
        })

        let chunks = [];
        res.on('data', (chunk) => {
            chunks.push(chunk)
        })

        res.on("end", function () {
            let body = Buffer.concat(chunks)
            let response = body.toString()
            console.log(response)
            res.setEncoding('utf8')
            okCallback(response, res.statusCode)
        });


    })
    client.write(qs.stringify(data))
    client.end();
}

module.exports = ApiRequest;