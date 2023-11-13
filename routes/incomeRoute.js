const express = require('express');
const incomeRouter = express.Router();
const cors = require('cors');

const {
  addCustomerIncome,
  updateCustomerIncome,
  getCustomerIncomes,
  totalIncome,
  undo
} = require('../controller/income.controller'); 

incomeRouter.post('/customerIncomes', addCustomerIncome); 
incomeRouter.put('/customerIncomes/:id', updateCustomerIncome); 
incomeRouter.get('/', getCustomerIncomes); 
incomeRouter.get('/customerIncomes/undo', undo); 
incomeRouter.get('/getTotalIncome', (req, res) => { res.json({totalIncome});});


module.exports = incomeRouter;
