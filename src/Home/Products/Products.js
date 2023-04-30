import useProducts from "../../SharedAPI/useProducts";
import SingleProduct from "./SingleProduct/SingleProduct";

const Products = () => {
  const [products] = useProducts();
  console.log(products);
  return (
    <div>
      <h2 className="text-3xl text-center m-5 text-warning">
        Choose Your Product
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 m-5 p-6">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;
