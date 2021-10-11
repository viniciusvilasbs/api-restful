// verbos HTTP (4 tipos)
// get - obter dados
// post - enviar/receber dados
// put - atualizar dados
// delete - deletar dados

const router = require('express').Router()

const ProductController = require('../controllers/products')


router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
// router.put('/products/:id', ProductController.put)
// router.delete('/products/:id', ProductController.delete)



module.exports = router