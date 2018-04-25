import request from 'superagent'

const mapUrl = '/api'

export function getCountryCode (countryCode, callback) {
    request
        .get(`${mapUrl}/${countryCode}`)
        .end((err, res) => {
            callback(err, res.body)
      })
}

export function apiEditNotes (countryCode, notes, callback) {
  return request.put(`${mapUrl}/${countryCode}`)
    .send(notes)
    .then(data => {
      const editedNote = data.body
      return callback(editedNote)
    })
    .catch(err => {
      console.log(err)
      throw Error('Cannot PUT edit!')
  })
}
