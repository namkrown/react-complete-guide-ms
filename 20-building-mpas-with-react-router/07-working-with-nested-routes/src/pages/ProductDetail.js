import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log("params", params);
  const productId = params.productId;
  console.log("productId", productId);
  return (
    <section>
      <h1>Product Detail</h1>
      <p>{productId}</p>
    </section>
  );
};

export default ProductDetail;
