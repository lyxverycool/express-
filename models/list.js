'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const listSchema = new Schema({
    text: String, href: String
})

const list = mongoose.model("lists", listSchema)

export default list