import { Router } from 'express'
import { crud } from '../../utils/crud/crud'

const api = Router()
crud(api, 'user');

export default api
