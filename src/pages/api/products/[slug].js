import Product from "@/models/Product";
import db from "@/utils/db";

const handler = async (req, res) => {
  await db.connect();
  //const product = await Product.findById(req.query.id);
  const product = await Product.findOne({
    $or: [{ slug: req.query.slug }],
  });
  await db.disconnect();
  res.send(product);
};

export default handler;
