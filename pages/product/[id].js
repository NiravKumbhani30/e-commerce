import { useRouter } from "next/router";
import baseUrl from "../../helper/baseUrl";

const ProductDetail = ({ product }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img data-image="black" src="images/black.png" alt="" />
          <img data-image="blue" src="images/blue.png" alt="" />
          <img
            className="active detailImg"
            src={product.mediaUrl}
            alt="Card image cap"
          />
        </div>

        <div className="col-6">
          <div className="product-description">
            <h1>{product.name}</h1>
            <h3>₹{product.price}/-</h3>
            <p>{product.description}</p>
          </div>

          <div className="product-configuration">
            <div className="cable-config">
              <span>Item quantity</span>
              <br />
              <br />

              <button className="btn btn-danger me-2 px-3">Remove</button>
              <input
                type="number"
                min="1"
                max="10"
                style={{
                  width: "70% ",
                  height: "35px",
                  border: "none",
                  borderRadius: "4px",
                  paddingLeft: "8px",
                }}
                placeholder="Quantity"
              />
              <button className="btn btn-success ms-2 px-4">Add</button>
              <br />

              <a href="#">How to configurate your {product.name}</a>
            </div>

            <div className="cable-config">
              <span>Cable configuration</span>

              <div className="cable-choose d-flex mt-3 gap-2">
                <button>L</button>
                <button>M</button>
                <button>XL</button>
              </div>

              <a href="#">How to configurate your headphones</a>
            </div>
          </div>
          <a href="#" className="cart-btn">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`${baseUrl}/api/product/${id}`);
  const data = await res.json();
  return {
    props: { product: data },
  };
}

export default ProductDetail;
