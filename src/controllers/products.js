const ProductsModel = require('../models/products')

async function get(req, res){
    const {id} = req.params

    /* esses comandos abaixo são a mesma coisa que: "const obj = id?{ _id: id } : null", mas assim fica mais adequado
    
    let obj = {}

    if (id){
        obj._id = id
    }
    */ 

    const obj = id?{ _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res){
     const {
         name,
         brand,
         price,
     } = req.body

     const product = new ProductsModel({
         name,
         brand,
         price,
     })

     product.save()

     res.send({
         message: 'Success'
     })
}

async function put(req, res){
    const {id} = req.params

    const product = await ProductsModel.findOneAndUpdate({_id: id}, req.body, {new: true})

    res.send({
        message: 'Success!',
        product,
    })

/*  Trecho de código que atualiza a informação do item e retorna os dados do item ANTES de ser modificado

    const product = await ProductsModel.findOne({_id: id})

    await product.updateOne(req.body)

    res.send({
        message: 'Success!',
        product,
    }) */


}

async function remove(req, res){
    const {id} = req.params

    const remove = await ProductsModel.deleteOne({ _id: id})

    const message = remove.ok? 'Success!' : 'Error!'

  /*   Uma maneira de verificar se o item foi deletado, dando como resposta sucesso ou erro

    let message = 'Success!'

    if (!remove.ok) {
        message = 'Error!'
    }
 */
    res.send({
        message,
    })
}

module.exports = {
    get,
    post,
    put,
    remove,
}