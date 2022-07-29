import dbConnect from "../../utils/mongo";
import Product from "../../models/product";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token

   dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.find();
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}