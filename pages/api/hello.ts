// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { findUser } from '../../services/UserService';
type Data = {
  name: Object
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // TODO Validate request. Email, password, name are required
  const { email, password } = req.query;

  const user = await findUser(email, password)
  res.status(200).json({user})
}
