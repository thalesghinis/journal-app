// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { sendText } from '../../services/UserService';
import { PrismaClient } from '@prisma/client'

type Data = {
  text: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {  
  
  
  const { text } = req.body;

  if (!text) {
    return res.status(300).json({error: 'Vc não digitou nada'})
  }  
  
  const prisma = new PrismaClient()

  const entry = await prisma.journalEntry.create({
    data: {
      title: 'teste',
      entry: 'teste',
      authorId: 1,
    }
  });

  console.log('entry foi criada com ID ', entry.id)

  return res.status(200).json({data: entry}) 

}

/*

A partir daqui escrever....

const createEntry = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(300).json({error: 'Vc não digitou nada'})
  }  
  
  const prisma = new PrismaClient()

  const entry = await prisma.journalEntry.create({
    data: {
      title: 'teste',
      entry: 'teste',
      authorId: 1,
    }
  });

  console.log('entrey foi criada com ID ', entry.id)

  return res.status(200).json({data: entry}) 

} */