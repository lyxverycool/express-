'use strict'

import express from 'express'
import Poety from '../controller/poety'

const router = express.Router()

router.get('/poety/addPoety', Poety.addPoety);

export default router;