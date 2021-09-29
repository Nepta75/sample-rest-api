import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const addOne = (route, table) => (
  route.post('/', async (req, response, next) => {
    try {
      const { body } = req;
      const data = await prisma[table].create({
        data: body
      })
      response.json({ message: 'utilisateur ajouté !', [table]: data })
    } catch (error) {
      next(error)
    } 
  })
);