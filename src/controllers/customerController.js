const { uploadSingleFile } = require("../services/fileService");

const { createCustomerService, createListCustomersService, getAllCustomersService } = require("../services/customerService");

const getAllCustomers = async (req, res) => {
  const result = await getAllCustomersService();
  return res.status(200).json({
    errorCode: result ? 0 : -1,
    message: result ? "Get all customers success" : "Get all customers failed",
    data: result
  })
}

const postCreateCustomer = async (req, res) => {
  const {name, address, phone, email, description} = req.body;
  let linkUrl = "";
  if(req.files || Object.keys(req.files).length >= 0) {
    const result = await uploadSingleFile(req.files.image);
    linkUrl = result.path;
  }
  const result = await createCustomerService({name, address, phone, email, description, image: linkUrl});
  return res.status(200).json({
    errorCode: result ? 0 : -1,
    message: result ? "Create customer success" : "Create list customer failed",
    data: result
  })
};

const postCreateListCustomers = async (req, res) => {
  const result = await createListCustomersService(req.body.customers);
  return res.status(200).json({
      errorCode: result ? 0 : -1,
      message: result ? "Create list customers success" : "Create list customers failed",
      data: result
    })
}

module.exports = {
  getAllCustomers,
  postCreateCustomer,
  postCreateListCustomers
}