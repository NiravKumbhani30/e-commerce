import Link from "next/link";
import baseUrl from "../helper/baseUrl";

const index = ({ products }) => {
  console.log(products)
  const productList = products.map((product) => {
    return (
      <div className="card mt-3" style={{ width: "20rem" }}>
        <img
          className="card-img-top"
          src={product.mediaUrl}
          alt="Card image cap"
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{product.name}</h5>
            <h6 className="card-title">₹{product.price}/-</h6>
          </div>
          <p className="card-text">{product.description}</p>
          <Link
            href={"/product/[id]"}
            as={`/product/${product._id}`}
            className="btn btn-secondary w-100"
          >
            View
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row justify-content-between">{productList}</div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/api/products`);
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
}

export default index;
