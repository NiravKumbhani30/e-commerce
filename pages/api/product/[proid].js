import Product from "../../../models/product";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await Getproduct(req, res);
      break;
  }
};

const Getproduct = async (req, res) => {
  const { proid } = req.query;
  const product = await Product.findById({ _id: proid });
  res.status(200).json(product);
};
