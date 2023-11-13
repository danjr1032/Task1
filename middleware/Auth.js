const checkName = (req, res, next) => {
    const { name } = req.body; 

    if (!name) {
        return res.status(400).send('Name is required');
    } else {
        next(); 
    }
};

const checkIncome = (req, res, next) => {
    const { income } = req.body; 

    if (!income || isNaN(income)) {
        return res.status(400).send('Income is required and should be a number');
    } else {
        next(); 
    }
};


module.exports = {checkName, checkIncome};