const getAlljobs = async (req, res) => {
    res.send('get all jobs')
}
const getjob = async (req, res) => {
    res.send('get job')
}
const createJob = async (req, res) => {
    res.json(req.user)
}
const updateJob = async (req, res) => {
    res.send('update job')
}
const deleteJob = async (req, res) => {
    res.send('Delete job')
}

module.exports = {
    getAlljobs,
    getjob,
    createJob,
    updateJob,
    deleteJob
}