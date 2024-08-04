import { useEffect } from "react";
import { useProducts } from "../context/ProductContext";
import { Product } from "./Product";
import { useSearchParams } from "react-router-dom";
import { Skeletonloader } from "./SkeletonLoader";

export const Products = () => {
  const [searchParams] = useSearchParams();
  const {products, setCategory} = useProducts();
  const category = searchParams.get("category");

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);


  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">{category}</h2>
        <ul className="products__list">
          {products.length ? (
            products.map((item) => <Product key={item.id} data={item} />)
            ) : ( 
              <Skeletonloader />
            )
          }
        </ul>
      </div>
    </section>
  )
}