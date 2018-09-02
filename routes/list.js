'use strict'

import express from 'express'
import List from '../controller/list'

const router = express.Router()

router.get('/queryListAll', List.queryListAll);

export default router;