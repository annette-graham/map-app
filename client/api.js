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
