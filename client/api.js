import request from 'superagent'

const mapUrl = '/api'

export function getCountryCode (countryCode, callback) {
  console.log("Hiiiii")
    request
        .get(`${mapUrl}/${countryCode}`)
        .end((err, res) => {
            callback(err, res.body)
      })
    console.log("Yep you work")
}
