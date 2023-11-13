const maxCapacity = 4;
const customerExpenditure = [];
 
exports.addCustomerExpenditure = (req, res) => {
    if (customerExpenditure.length >= maxCapacity) {
        return res.status(403).send('Cannot add more income');
    }
    const { name, expense } = req.body;
    const id = customerExpenditure.length + 1; // Increment the ID based on the array length
    const newExpenditure = { id, name, expense };
    customerExpenditure.push(newExpenditure);
    res.json({ message: "Added successfully" });
};

exports.updateCustomerExpenditure = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, expense } = req.body;

    const existingExpenditure = customerExpenditure.find((expenditure) => expenditure.id === id);

    if (existingExpenditure) {
        existingExpenditure.name = name;
        existingExpenditure.expense = expense;
        res.json({ message: "Updated successfully" });
    } else {
        res.json({ message: "Expenditure not found." });
    }
};

exports.undo = (req, res) => {
    if (customerExpenditure.length === 0) {
      return res.status(404).send('Nothing to undo.');
    }
    // Remove the last operation
    const lastOperation = customerExpenditure.pop();
    res.send(`Last operation ${lastOperation} reverted.`);
  };


exports.totalExpenditure = customerExpenditure.reduce((sum, expenditure) => sum + expenditure.expenditure, 0);

exports.getCustomerExpenditure = (req, res) => {
    res.json(customerExpenditure);
};
