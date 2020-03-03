const mongoose = require('mongoose');
const General_Portfolio_Plan = mongoose.model('General_Portfolio_Plan');
const { flattenErrorsToArr } = require('../../helpers');

module.exports = {
  all(request, response) {
    // find all
    General_Portfolio_Plan.find()
      .then((general_portfolio_plans) => {
        response.json({ general_portfolio_plans: general_portfolio_plans });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  getOne(request, response) {
    General_Portfolio_Plan.findById(request.params.id)
      .then((general_portfolio_plan) => {
        response.json({ general_portfolio_plan: general_portfolio_plan });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  create(request, response) {
    General_Portfolio_Plan.create(request.body)
      .then((newGeneral_Portfolio_Plan) => {
        response.json({ general_portfolio_plan: newGeneral_Portfolio_Plan });
      })
      .catch((errors) => {
        response.json({ errors: flattenErrorsToArr(errors) });
      });
  },

  delete(request, response) {
    General_Portfolio_Plan.findByIdAndDelete(request.params.id)
      .then((deletedGeneral_Portfolio_Plan) => {
        response.json({ general_portfolio_plan: deletedGeneral_Portfolio_Plan });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  update(request, response) {
    General_Portfolio_Plan.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true, // to return updated doc
        runValidators: true
      }
    )
      .then((updatedGeneral_Portfolio_Plan) => {
        response.json({ general_portfolio_plan: updatedGeneral_Portfolio_Plan });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  }
}