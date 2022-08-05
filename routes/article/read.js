'use strict'

const { readAll, readOne } = require('../../model')

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    const result = await readAll(this.mongo)



    if(result === []){
      reply
        .code(404)
        .header('Content-Type','application/json')
        .send("error : Not Found")
    }else{
     reply
      .code(200)
      .header('Content-Type','application/json')
      .send(result)
    }

}

)

  app.get('/:id', async function (request, reply) {

    const result = await readOne(this.mongo,request.params.id)

    if(result === []){
      reply
        .code(404)
        .header('Content-Type','application/json')
        .send("error : Not Found")
    }else{
      reply
      .code(200)
      .header('Content-Type','application/json')
      .send(result)
    }
  } 
  )
}
