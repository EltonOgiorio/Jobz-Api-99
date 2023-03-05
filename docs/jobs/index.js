
const registerUser = require('./registerUser')
const loginUser = require('./loginUser')
const createJob = require('./createJob')
const getAllJobs = require('./getAllJobs')
const getJob = require('./getJob')
const updateJob = require('./updatejob')
const deleteJob = require('./deleteJob')

module.exports = {

paths: {
    "/auth/register": {
        ...registerUser
    },
    "auth/login": {
        ...loginUser
    },
    "/jobs": {
        ...createJob,
        ...getAllJobs
    },
    "/jobs/:id": {
        ...getJob,
        ...updateJob,
        ...deleteJob,
    }
}
}