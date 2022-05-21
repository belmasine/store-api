const errorHandler = async (err, req, res, next) => {
  console.log('***********')
  console.log('***********')
  console.log('***********')
  console.log(err)
  return res.status(500).json({ msg: 'Something wrong, please try again ...' })
}

module.exports = errorHandler;
