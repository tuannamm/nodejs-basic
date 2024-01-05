const path = require("path");

const uploadSingleFile = async (file) => {

  const uploadPath = path.resolve(__dirname, "../assets/images")
  const extensionName = path.extname(file.name);
  const baseName = path.basename(file.name, extensionName);

  const finalName = `${baseName}-${Date.now()}${extensionName}`;
  const finalPath = `${uploadPath}/${finalName}`;

  try {
    await file.mv(finalPath);
    return {
      status:'success',
      path: uploadPath,
      error: null,
    }
  } catch(error) {
    return {
      status: "error",
      path: null,
      error: JSON.stringify(error),
    }
  }
};

const uploadMultipleFile = async (files) => {
  const uploadPath = path.resolve(__dirname, "../assets/images");
  const resultArray = [];
  const countSuccess = 0;
  try {
    for(let i = 0; i <= files.length; i++) {
      const extensionName = path.extname(files[i].name || "");
      const baseName = path.basename(files[i].name || "", extensionName);
      const finalName = `${baseName}-${Date.now()}${extensionName}`;
      const finalPath = `${uploadPath}/${finalName}`;
      try {
        await files[i].mv(finalPath);
        countSuccess += 1;
        resultArray.push({
          status: "success",
          path: finalPath,
          fileName: files[i].name,
          error: null
        });
      } catch(error) {
        resultArray.push({
          status: "error",
          path: finalPath,
          fileName: files[i].name,
          error: JSON.stringify(error),
        })
      }
    }
    return {
      countSuccess,
      detail: [...resultArray],
    }
  } catch (error) {
    console.log("error", error);
  }

};

module.exports = {uploadSingleFile, uploadMultipleFile}