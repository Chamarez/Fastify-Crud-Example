const Product = require("../models/product.model");

const getProduct = async (request, reply) => {
  const products = await Product.find();
  return products;
};

const createProduct = async (request, reply) => {
  const newProduct = new Product(request.body);
  await newProduct.save();
  reply.code(201).send(newProduct);
};

const getById = async (req, reply) => {
  const product = await Product.findById(req.params.id);
  return reply.code(200).send(product);
};

const editProduct = async (req, reply) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return reply.code(200).send(product);
  } catch (err) {
    reply.code(500).send(err);
  }
};

const deleteProduct = async (request, reply) => {
  await Product.findByIdAndDelete(req.params.id);
  return reply.code(204).send();
};

module.exports = {
  getProduct,
  createProduct,
  getById,
  editProduct,
  deleteProduct,
};
