const Customer = require("../models/Customer");

const getAllCustomersService = async () => {
  try {
    return await Customer.find({});
  } catch(error) {
    console.log(error);
    return null;
  }
} 

const createCustomerService = async ({name, address, phone, email, description, image}) => {
  try {
    return await Customer.create({name, address, phone, email, description, image});
  } catch(error) {
    console.log(error);
    return null;
  }
}

const createListCustomersService = async (listCustomers) => {
  try {
    return await Customer.insertMany(listCustomers);
  } catch(error) {
    console.log(error);
    return null;
  }
}

const updateCustomerService = async (req) => {
  const {_id, name, address, phone, email, description} = req;
  try {
    return await Customer.updateOne({filter: _id}, {name, address, phone, email, description});
  } catch(error) {
    console.log(error);
    return null;
  }
}

module.exports = {
  createCustomerService,
  createListCustomersService,
  getAllCustomersService,
  updateCustomerService
}