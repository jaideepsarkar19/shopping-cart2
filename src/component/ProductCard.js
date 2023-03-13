import React, { useDebugValue, useEffect, useState } from "react";

const ProductCard = (props) => {
  const [productData, setProductData] = useState({});
  useEffect(() => {
    // console.log("useeffect: ", props.productData);
    setProductData(props.productData);
  }, []);

  const setArrayValue = (id) => {
    console.log("ID-->, ", id);
    props.setArrayValue(id);
  };
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

export default ProductCard;
