import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const deleteOneById = (route, table) => {
  route.delete('/:id', async (req, response, next) => {
    try {
      const { id } = req.params
      await prisma[table].delete({
        where: {
          id: Number(id),
        }
      })
      response.json({ message: 'Utilisateur supprimé !' })
    } catch (error) {
      next(error)
    }
  })
}