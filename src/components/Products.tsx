import { FunctionComponent, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getProducts } from "../services/productsService";
import Product from "../interfaces/Product";
import { Link } from "react-router-dom";

interface ProductsProps {
  userInfo: any;
}

const Products: FunctionComponent<ProductsProps> = ({ userInfo }) => {
  let [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>Products</h1>
      {userInfo.isAdmin && (
        <Link to="" className="btn btn-success">
          <i className="fa-solid fa-plus"></i> Add Product
        </Link>
      )}
      {products.length ? (
        <div className="container">
          <div className="row">
            {products.map((product: Product) => (
              <div
                key={product.id}
                className="card col-md-4 mx-2"
                style={{ width: "18rem" }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ width: "16.5rem", height: "16.5rem" }}
                />
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    {product.category}
                  </h6>
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text text-success">{product.price} ₪</p>
                  <a href="#" className="btn btn-primary">
                    <i className="fa-solid fa-cart-shopping"></i> Add to Cart
                  </a>
                  {userInfo.isAdmin && (
                    <>
                      <Link to="" className="btn btn-warning mx-1">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                      <Link to="" className="btn btn-danger">
                        <i className="fa-solid fa-trash"></i>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No products</p>
      )}
    </>
  );
};

export default Products;
