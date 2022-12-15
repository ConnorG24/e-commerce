const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const dbCategoryData = Category.findAll({
      include: [
        {
          model: Product,
          attribute: ['id','product_name','price','stock','category_id']
        }
      ]
    })

    if(dbCategoryData){
      res.status(200).json(dbCategoryData);
    }else{
      res.status(404).json({message:'The category you are looking for does not exist'})
    }
  }
  catch(err){
    console.log(err);
    res.status(500).json(err)
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const dbCategoryData = Category.findByPk(req.params.id,{
      include: [
        {
          model: Product,
          attribute: ['id','product_name','price','stock','category_id']
        }
      ]
    })

    if(dbCategoryData){
      res.status(200).json(dbCategoryData);
    }else{
      res.status(404).json({message:'The category you are looking for does not exist'})
    }
  }
  catch(err){
    console.log(err);
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
