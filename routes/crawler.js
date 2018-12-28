'use strict'

import express from 'express'
import Crawler from '../controller/crawler'

const router = express.Router()

router.get('/getQQWeibo', Crawler.getQQWeibo);
router.get('/getCnblogs', Crawler.getCnblogs);
router.get('/getZhihuImgs', Crawler.getZhihuImgs);

export default router;