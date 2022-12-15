const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const dbTagData = Tag.findAll({
      include: [
        {
          model: Product,
          attributes: ['product_name','price','stock','category_id']
        }
      ]
    })

    
      res.status(200).json(dbTagData);
    
  }
  catch(err){
    console.log(err);
    res.status(500).json(err)
  }
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const dbTagData = Tag.findByPk(req.params.id,{
      include: [
        {
          model: Product,
          attributes: ['product_name','price','stock','category_id']
        }
      ]
    })

    
      res.status(200).json(dbTagData);
    
  }
  catch(err){
    console.log(err);
    res.status(500).json(err)
  }
});

router.post('/', async(req, res) => {
  // create a new tag
  try{
    const dbTagData = await Tag.create({tag_name: req.body.tag_name})
    res.status(200).json(dbTagData);
  }catch(err){
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
