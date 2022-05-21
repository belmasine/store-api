const Product = require('../models/product');
const getProducts = async (req, res) => {
  const objectQuery = {};
  const { name, company, sort, fields, page } = req.query;
  if (name) {
    objectQuery.name = { $regex: name, $options: 'i' };
  }
  if (company) {
    objectQuery.company = company;
  }
  let result = Product.find(objectQuery);

  if (fields) {
    const select = fields.split(',').join(' ');
    result = result.select(select);
  }
  if (sort) {
    const sortFields = sort.split(',').join(' ')
    result = result.sort(sortFields);
  } else {
    result = result.sort('createdAt');
  }

  let currentPage = !isNaN(page) ? parseInt(page) : 1;
  // pagination de 10 items
  const limit = 10;
  const skip = (currentPage - 1) * limit;
  
  result = result
    .skip(skip)
    .limit(limit);

  const products = await result;
  res.status(200).json({ products, total: products.length })
}

module.exports = { getProducts };
