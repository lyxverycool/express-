'use strict'

import express from 'express'
import Poety from '../controller/poety'

const router = express.Router()

router.post('/addPoety', Poety.addPoety);
router.get('/queryPoety', Poety.queryPoety);

export default router;