'use strict'

const { deleteOne } = require('../../model')

module.exports = async function (app, opts) {
  app.delete('/:id', async function (request, reply) {
    const result = await deleteOne(this.mongo,request.params.id)


    if(result.value === null){
      reply
        .code(204)
        .header('Content-Type','application/json')
        .send({value : null,ok : result.ok})
    }else{
     reply
      .code(200)
      .header('Content-Type','application/json')
      .send({value : result.value,ok : result.ok})
    }
  })
}
