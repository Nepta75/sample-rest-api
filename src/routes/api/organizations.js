import { Router } from 'express'
import { crud } from '../../utils/crud/crud'

const api = Router()
crud(api, 'organization');

export default api
