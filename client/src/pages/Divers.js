import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productsAction";
import Card from "../components/Product/Card";
import { isEmpty } from "../components/Utils";
import '../styles/card.css'

const Divers = () => {
  const [loadProduct, setLoadProduct] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer);

  useEffect(() => {
    if (loadProduct) {
      dispatch(getProducts());
      setLoadProduct(false);
    }
  }, [loadProduct, dispatch]);

  return (
    <div className="product-container">
      <br/>
      <h3>Divers</h3>
      <ul className="ulProduct">
        {!isEmpty(products[0]) &&
          products.map((product) => {
            if (product.categorie === "divers") {
              return <Card product={product} key={product._id} />
            }
            return null
          })}
      </ul>
    </div>
  );
};
export default Divers;