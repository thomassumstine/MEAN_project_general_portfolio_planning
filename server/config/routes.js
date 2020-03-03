const general_portfolio_plansController = require('../controllers/general_portfolio_plans');

module.exports = function (app) {
  app.get('/api/general_portfolio_plans', general_portfolio_plansController.all);
  app.get('/api/general_portfolio_plans/:id', general_portfolio_plansController.getOne);
  app.post('/api/general_portfolio_plans', general_portfolio_plansController.create);
  app.delete('/api/general_portfolio_plans/:id', general_portfolio_plansController.delete);
  app.put('/api/general_portfolio_plans/:id', general_portfolio_plansController.update);
}