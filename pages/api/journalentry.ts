// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { sendText } from '../../services/UserService';

type Data = {
  text: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    return createEntry(req, res);
  }

  return readAllEntries(req, res);
  /**
   * IF POST: 
   * createEntry
   * 
   * ELSE
   * 
   * LER
   */
}

const readAllEntries = async (req, res) => {
  const prisma = new PrismaClient();

  const entry = await prisma.journalEntry.findMany({
    authorId: 1
  })

  return entry;
}

const createEntry = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(300).json({data: 'Vc não digitou nada'})
  }

  const prisma = new PrismaClient();

  const entry = await prisma.journalEntry.create({
    data: {
      title: text,
      entry: text,
      authorId: 1,
    }
  });

  console.log('Entry foi criada com ID', entry.id);

  return res.status(200).json({data: entry })
}