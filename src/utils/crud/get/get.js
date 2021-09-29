import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getAll = (route, table) => (
  route.get('/', async (_, response, next) => {
    try {
      const data = await prisma[table].findMany();
      response.json({ message: '', [table]: data })
    } catch (error) {
      next(error)
    } 
  })
);

export const getOneById = (route, table) => (
  route.get('/:id', async (req, response, next) => {
    try {
      const { id } = req.params
      const data = await prisma[table].findUnique({
        where: {
          id: Number(id),
        }
      })
      response.json({ message: 'utilisateur trouvé !', [table]: data })
    } catch (error) {
      next(error)
    } 
  })
);