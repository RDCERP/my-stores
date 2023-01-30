import jwt from 'jsonwebtoken';

const secret = 'PROJECT3PROJECT';
const expiration = '2h';

// const authMiddleware = ({ req }) => {
//   // allows token to be sent via req.body, req.query, or headers
//   let token = req.body.token || req.query.token || req.headers.authorization;

//   // ["Bearer", "<tokenvalue>"]
//   if (req.headers.authorization) {
//     token = token.split(' ').pop().trim();
//   }

//   if (!token) {
//     return req;
//   }

//   try {
//     const { data } = jwt.verify(token, secret, { maxAge: expiration });
//     req.user = data;
//   } catch {
//     console.log('Invalid token');
//   }

//   return req;
// };

// function for our authenticated routes
const authMiddleware =  function (req, res, next) {
  // allows token to be sent via  req.query or headers
  let token = req.query.token || req.headers.authorization;

  // ["Bearer", "<tokenvalue>"]
  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return res.status(400).json({ message: 'You have no token!' });
  }

  // verify token and get user data out of it
  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log('Invalid token');
    return res.status(400).json({ message: 'invalid token!' });
  }

  // send to next endpoint
  next();
}

const signToken = ({ username, email, _id }) => {
  const payload = { username, email, _id };

  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

export { authMiddleware, signToken };
