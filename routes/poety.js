'use strict'

import express from 'express'
import Poety from '../controller/poety'

const router = express.Router()

router.get('/queryPoety', Poety.queryPoety);
router.post('/addPoety', Poety.addPoety);
router.post('/poetyDetail', Poety.poetyDetail);

export default router;