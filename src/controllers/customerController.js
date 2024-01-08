const { uploadSingleFile } = require('../services/fileService');

const {
  createCustomerService,
  createListCustomersService,
  getAllCustomersService,
  updateCustomerService,
  deleteCustomerService,
  deleteCustomersService
} = require('../services/customerService');

const getAllCustomers = async (req, res) => {
  const { limit, page, name } = req.query;
  const result = await getAllCustomersService(+limit, +page, name);
  return res.status(200).json({
    errorCode: result ? 0 : -1,
    message: result ? 'Get all customers success' : 'Get all customers failed',
    data: result
  });
};

const postCreateCustomer = async (req, res) => {
  const { name, address, phone, email, description } = req.body;
  let linkUrl = '';
  if (req.files || Object?.keys(req.files).length >= 0) {
    const result = await uploadSingleFile(req.files.image);
    linkUrl = result.path;
  }
  const result = await createCustomerService({ name, address, phone, email, description, image: linkUrl });
  return res.status(200).json({
    errorCode: result ? 0 : -1,
    message: result ? 'Create customer success' : 'Create list customer failed',
    data: result
  });
};

const postCreateListCustomers = async (req, res) => {
  const result = await createListCustomersService(req.body.customers);
  return res.status(200).json({
    errorCode: result ? 0 : -1,
    message: result ? 'Create list customers success' : 'Create list customers failed',
    data: result
  });
};

const putUpdateCustomer = async (req, res) => {
  const result = await updateCustomerService(req.body);
  return res.status(200).json({
    errorCode: result ? 0 : -1,
    message: result ? 'Update customer success' : 'Update customer failed',
    data: result
  });
};

const deleteCustomer = async (req, res) => {
  const result = await deleteCustomerService(req.body._id);
  return res.status(200).json({
    errorCode: result ? 0 : -1,
    message: result ? 'Delete customer success' : 'Delete customer failed',
    data: result
  });
};

const deleteCustomers = async (req, res) => {
  const result = await deleteCustomersService(req.body.ids);
  return res.status(200).json({
    errorCode: result ? 0 : -1,
    message: result ? 'Delete customers success' : 'Delete customers failed',
    data: result
  });
};

module.exports = {
  getAllCustomers,
  postCreateCustomer,
  postCreateListCustomers,
  putUpdateCustomer,
  deleteCustomer,
  deleteCustomers
};
