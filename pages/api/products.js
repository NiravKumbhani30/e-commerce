import initDB from "../../helper/initDB";
import Product from "../../models/product";

initDB();

export default async (req, res) => {
  Product.find().then((products) => {
    res.status(200).json(products);
  });
};
