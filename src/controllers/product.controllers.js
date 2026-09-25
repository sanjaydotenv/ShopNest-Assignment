import productModel from "../models/product.model.js";
import uploadFileOnImageKit from "../services/imageKit.js";

const createProductController = async (req, res) => {
  const { title, price } = req.body;

  const file = req.file;

  const image = await uploadFileOnImageKit(file.buffer, file.originalname);

  if (!image) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }

  const productCreated = await productModel.create({
    title,
    price,
    image: image.url,
  });

  res.status(201).json({
    message: "Product Created Successfully",
    data: {
      product: {
        id: productCreated._id,
        title: productCreated.title,
        price: productCreated.price,
        image: productCreated.image,
      },
    },
  });
};

export default { createProductController };
