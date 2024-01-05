const Customer = require("../models/Customer");

const createCustomerService = async ({name, address, phone, email, description, image}) => {
  try {
    return await Customer.create({name, address, phone, email, description, image});
  } catch(error) {
    console.log(error);
    return null;
  }
} 

module.exports = {
  createCustomerService
}