const { uploadSingleFile } = require("../services/fileService");

const { createCustomerService } = require("../services/customerService");

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


module.exports = {
  postCreateCustomer
}