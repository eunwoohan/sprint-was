'use strict'

const { createOne } = require('../../model')

module.exports = async function (app, opts) {
  app.post('/', async function (request, reply) {

    const result = await createOne(this.mongo, request.body)
    if(result === []){
      reply
        .code(404)
        .header('Content-Type','application/json')
        .send("error : Not Found")
    }else{
    reply
      .code(200)
      .header('Content-Type','application/json')
      .send({id : result.insertedId})
    }
  })
}
