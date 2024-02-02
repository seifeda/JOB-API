const express= require('express')
const router = express.Router()

const {
    getAlljobs,
    getjob,
    createJob,
    updateJob,
    deleteJob
 }=require('../controller/jobs')

    router.route('/').post(createJob).get(getAlljobs)
    router.route('/:id').get(getjob).delete(deleteJob).patch(updateJob)


    module.exports= router