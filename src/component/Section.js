import react, { useState } from "react";
import "../css/styles.css";
import ProductCard from "./ProductCard";
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

  return (
    <div>
      {console.log("Products: ", Products)}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {Products.map((i, v) => (
              <>
                {/* {console.log("Section:", i, v)} */}
                <ProductCard productData={i} setArrayValue={setArrayValue} />
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
