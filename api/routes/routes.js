const controller = require('../controller/maincontroller')
module.exports = function (app) {
  app.get('/repos/:username',controller.getRepos);
}