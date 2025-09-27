import { TiThMenuOutline } from "react-icons/ti";

import { MedicineStoreCardButton } from "../PromoBanners/PromoBanners.styled";
import PropTypes from "prop-types";
import {
  MedicineProductCardItemButtonDetalisWrapperDetalis,
  MedicineProductCardItemDecrDetalis,
  MedicineProductCardItemDescWrapperDetalis,
  MedicineProductCardItemDescWrapperTablDetalis,
  MedicineProductCardItemDetalis,
  MedicineProductCardItemNameDetalis,
  MedicineProductCardItemPhotoDetalis,
  MedicineProductCardItemTablDetalis,
} from "./CardDetalis.styled";
import ProductChecker from "../ProductChecker/ProductChecker";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemBasket } from "../../redux/Basket/basket-operations";
const CardDetalis = (props) => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count == 0) {
      return;
    }
    setCount(count - 1);
  };

  const dispatch = useDispatch();

  const addCardBasket = (e) => {
    console.log(e);
    dispatch(addItemBasket({ id: e, price: count }));
  };

  return (
    <MedicineProductCardItemDetalis>
      <MedicineProductCardItemPhotoDetalis src={props.photo} width={"20px"} />
      <MedicineProductCardItemDescWrapperDetalis>
        <MedicineProductCardItemDescWrapperTablDetalis>
          <div>
            <MedicineProductCardItemNameDetalis>
              {props.name}
            </MedicineProductCardItemNameDetalis>
            <MedicineProductCardItemDecrDetalis>
              {props.suppliers}
            </MedicineProductCardItemDecrDetalis>
          </div>
          <MedicineProductCardItemTablDetalis>
            <TiThMenuOutline />
            {props.stock}
          </MedicineProductCardItemTablDetalis>
        </MedicineProductCardItemDescWrapperTablDetalis>
        <MedicineProductCardItemButtonDetalisWrapperDetalis>
          <ProductChecker
            count={count}
            increment={increment}
            decrement={decrement}
          />

          <MedicineStoreCardButton
            onClick={() => addCardBasket(props.id)}
            style={{ padding: "14px 30px 14px 30px", borderRadius: "60px" }}
          >
            Add to cart
          </MedicineStoreCardButton>
        </MedicineProductCardItemButtonDetalisWrapperDetalis>
      </MedicineProductCardItemDescWrapperDetalis>
    </MedicineProductCardItemDetalis>
  );
};

CardDetalis.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  suppliers: PropTypes.string.isRequired,
  stock: PropTypes.string.isRequired,
};

export default CardDetalis;
