const http = require('https')
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
    const client = http.request(option, (res) => {
        res.on('error', (err) => {
            errorCallback(err)
        })

        let chunks = [];
        res.on('data', (chunk) => {
            chunks.push(chunk)
        })

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
            if (res.statusCode != 200) {
                errorCallback(body.toString)
                return
            } else {
                if (res_data == '') {
                    ApiRequest(host, path, method, data, okCallback, errorCallback);
                    return
                } else {
                    okCallback(res_data)
                }
            }
        });


    })
    client.write(qs.stringify(data))
    client.end();
}

module.exports = ApiRequest;