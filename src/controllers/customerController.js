const { uploadSingleFile } = require("../services/fileService");

const { createCustomerService, createListCustomersService } = require("../services/customerService");

const postCreateCustomer = async (req, res) => {
  const {name, address, phone, email, description} = req.body;
  let linkUrl = "";
  if(req.files || Object.keys(req.files).length >= 0) {
    const result = await uploadSingleFile(req.files.image);
    linkUrl = result.path;
  }
  const result = await createCustomerService({name, address, phone, email, description, image: linkUrl});
  return res.status(200).json({
    errorCode: 0,
    message: "Create customer success",
    data: result
  })
};

const postCreateListCustomers = async (req, res) => {
  const result = await createListCustomersService(req.body.customers);
  if (result) {
    return res.status(200).json({
      errorCode: 0,
      message: "Create list customers success",
      data: result
    })
  } else {
    return res.status(200).json({
      errorCode: -1,
      message: "Create list customers failed",
      data: result
    })
  }

}

module.exports = {
  postCreateCustomer,
  postCreateListCustomers
}