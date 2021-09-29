import { Router } from 'express'
import users from './users'
import organizations from './organizations'

const api = Router()

api.use('/users', users);
api.use('/organizations', organizations);

export default api
