'use strict'

import express from 'express'
import Poety from '../controller/poety'

const router = express.Router()

router.post('/queryPoety', Poety.queryPoety);
router.post('/addPoety', Poety.addPoety);
router.post('/poetyDetail', Poety.poetyDetail);
router.get('/removePoety', Poety.removePoety);
router.get('/savePoetyJson', Poety.savePoetyJson);
router.get('/readPoetyJson', Poety.readPoetyJson);

export default router;