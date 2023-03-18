import Product from "@/models/Product";
import db from "@/utils/db";

// function convertDocToObj(doc) {
//   doc._id = doc._id.toString();
//   doc.createdAt = doc.createdAt.toString();
//   doc.updatedAt = doc.updatedAt.toString();
//   return doc;
// }

const handler = async (req, res) => {
  await db.connect();
  const products = await Product.find().lean();
  await db.disconnect();
  res.send(products);
  //res.status(200).json(products.map(convertDocToObj));
};
export default handler;
