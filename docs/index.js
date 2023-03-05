const basicInfo = require('./basicInfo');
const server = require('./server');
const components = require('./components');
const tags = require('./tags');
const jobs = require('./jobs')

module.exports = {
    ...basicInfo,
    ...server,
    ...components,
    ...tags,
    ...jobs,
}
