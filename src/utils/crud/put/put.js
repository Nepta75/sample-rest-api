import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const updateOneById = (route, table) => {
  route.put('/:id', async (req, response, next) => {
    try {
      const { params, body } = req
      const data = await prisma[table].update({
        data: body,
        where: {
          id: Number(params.id),
        }
      })
      response.json({ message: 'Utilisateur modifié !', [table]: data })
    } catch (error) {
      next(error)
    }
  })
}