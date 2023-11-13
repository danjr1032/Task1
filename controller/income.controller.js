const maxCapacity = 4;
const customerIncomes = [];

// Add a customer income
exports.addCustomerIncome = (req, res) => {
    if (customerIncomes.length >= maxCapacity) {
        return res.status(403).send('Cannot add more income');
    }
    const { name, income } = req.body;

    if (!name || !income) {
        return res.status(400).json({ message: "Name and income are required" });
    }

    const id = customerIncomes.length + 1;
    const newIncome = { id, name, income };
    customerIncomes.push(newIncome);
    res.json({ message: "Added successfully" });
};

// Update a customer income by ID
exports.updateCustomerIncome = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, income } = req.body;

    if (!name || !income) {
        return res.json({ message: "Name and income are required" });
    }

    const existingIncome = customerIncomes.find((income) => income.id === id);

    if (existingIncome) {
        existingIncome.name = name;
        existingIncome.income = income;
        res.json({ message: "Updated successfully" });
    } else {
        res.json({ message: "Income not found." });
    }
};



exports.undo = (req, res) => {
    if (customerIncomes.length === 0) {
      return res.status(404).send('Nothing to undo.');
    }
    // Remove the last operation
    const lastOperation = customerIncomes.pop();
    res.send(`Last operation ${lastOperation} reverted.`);
  };

// Get all customer incomes
exports.getCustomerIncomes = (req, res) => {
    res.json(customerIncomes);
};





exports.totalIncome = customerIncomes.reduce((sum, income) => sum + income.income, 0);

