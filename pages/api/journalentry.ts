// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { sendText } from '../../services/UserService';

type Data = {
  text: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {  
  console.log(req.body, 'teste')
  /*const { text } = req.body;

  if (!text) {
    return res.status(300).json({error: 'Vc não digitou nada'})
  }
  
  let typedText = await sendText(text);
  console.log(typedText);
  
  typedText = await sendText(text);
  res.status(200).json({typedText}) 
  */
}




