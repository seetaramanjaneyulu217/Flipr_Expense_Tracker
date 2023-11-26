const JWT = require('jsonwebtoken')
const dotenv = require('dotenv')

// Configurations
dotenv.config()

function AuthorizeUser(req, res, next) {

  const authHeader = req.headers['authorization']

  if (!authHeader) {
    return res.json({ msg: 'Unauthorized' })
  }

  const [scheme, token] = authHeader.split(' ')

  if (scheme !== 'Bearer') {
    return res.json({ msg: 'Unauthorized' })
  }

  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET)
    req.user = decoded.user
    next()
  } catch (err) {
    return res.json({ msg: 'Unauthorized' })
  }
}

module.exports = AuthorizeUser