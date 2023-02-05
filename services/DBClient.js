// Exporting a single prisma client. Each time we call new PrismaClient() there's a new connection to the DB.
import { PrismaClient } from '@prisma/client'
let debugOptions = [];

if (process.env.DEBUG_DB) {
    debugOptions = [{
        emit: 'event',
        level: 'query',
        },
        {
        emit: 'stdout',
        level: 'error',
        },
        {
        emit: 'stdout',
        level: 'info',
        },
        {
        emit: 'stdout',
        level: 'warn',
        }];
}


const prisma = new PrismaClient({
    log: debugOptions,
})
  
prisma.$on('query', (e) => {
    console.log('Query: ' + e.query)
    console.log('Params: ' + e.params)
    console.log('Duration: ' + e.duration + 'ms')
})

export default prisma;