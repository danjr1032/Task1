const express = require('express');
const router = express.Router();

const {
  addCustomerExpenditure,
  updateCustomerExpenditure,
  getCustomerExpenditure,
  totalExpenditure,
} = require('../controller/expend.controller');

router.post('/add', addCustomerExpenditure); 
router.put('/update/:id', updateCustomerExpenditure);
router.get('/', getCustomerExpenditure); 
router.get('/add/undo', getCustomerExpenditure); 
router.get('/getTotalExpenditure', (req, res) => {
    res.json({totalExpenditure});
});

module.exports = router;
