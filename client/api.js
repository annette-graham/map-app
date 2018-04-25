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


export function editNotes (note) {
  return request.put(`${mapUrl}/${countryCode}`)
    .send(note)
    .then(data => {
      const editedNotes = data.body
      return editedNotes
    })
    .catch(err => {
      console.log(err)
      throw Error('Cannot PUT edit!')
  })
}
