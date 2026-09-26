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

const listAllProductsController = async (req, res) => {
  const products = await productModel.find();

  res.status(200).json({
    message: "all product fetch successfully",
    data: {
      products,
    },
  });
};

const getSingleProductController = async (req, res) => {
  const { productID } = req.params;

  if (!productID) {
    return res.status(401).json({
      message: "ProductId id required",
    });
  }

  const product = await productModel.findById(productID);

  res.status(200).json({
    message: "Single product fetch successfully",
    data: {
      product,
    },
  });
};

const updateProductController = async (req,res) => {

}

export default {
  createProductController,
  listAllProductsController,
  getSingleProductController,
  updateProductController
};
