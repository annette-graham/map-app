import request from 'superagent'

const mapUrl = '/'

export function getMap (callback) {
    request
        .get(mapUrl)
        .end((err, res) => {
            callback(err, res.body)
        })
}
