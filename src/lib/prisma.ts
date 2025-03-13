import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: 'dev' === 'dev' ? ['query'] : [],
})
