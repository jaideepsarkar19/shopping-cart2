import React from "react";
import "../css/styles.css";
import {useEffect,useState} from "react";
import ProductsJSON from "../Products.json";

export default function Section(props) {
  const [dis, setDis] = useState(false);
  const [Products, setproducts] = useState(ProductsJSON);

  const setArrayValue = (id) => {
    console.log("setArrayValue:", id);
    var tempIndex = Products.findIndex((x) => x.id == id);
    Products[tempIndex].isAddedToCart = true;
    setproducts(Products);
    var count = Products.filter((i) => i.isAddedToCart == true).length;
    props.addToCart(count);
  };
  const [productData, setProductData] = useState({});
  useEffect(() => {
    // console.log("useeffect: ", props.productData);
    setProductData(productData);
  }, []);

  // const setArrayValue = (id) => {
  //   console.log("ID-->, ", id);
  //   props.setArrayValue(id);
  // };

  return (
    <div>
      {console.log("Products: ", Products)}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {Products.map((i, v) => (
              <>
                {/* {console.log("Section:", i, v)} */}
                {/* <ProductCard productData={i} setArrayValue={setArrayValue} /> */}
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const ProductCard = (props) => {

  return (
    <>
      {/* {console.log("ProductCard: ", ProductCard)} */}
      <div className="col mb-5">
        <div className="card h-100">
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>

          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />

          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">
                {productData.Name} {productData.id}
              </h5>
              <h5 className="fw-bolder">Special Item</h5>
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
              </div>
              <span className="text-muted text-decoration-line-through">
                $20.00
              </span>
              $18.00
            </div>
          </div>

          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => setArrayValue(productData.id)}
              >
                {productData.isAddedToCart ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

