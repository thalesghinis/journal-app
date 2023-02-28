// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { createUser, findUser, findUserWithEmail } from '../../services/UserService';

type Data = {
  name: Object,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // TODO Validate request. Email, password, name are required
  const { email, password, name } = req.body;

  if (!email  || !password) {
    // TODO Modify API spec with error and message. We need individual error messages per field.
    return res.status(300).json({error: 'Invalid parameters'})
  }
  
  // TODO Find user only with email
  let user = await findUserWithEmail(email);
  console.log(user);

  if (user) {
    throw new Error('User already exists');
  }
  
  user = await createUser(email, password, name);
  res.status(200).json({user})
}




