import React, { useState } from "react";
import ProductChecker from "../ProductChecker/ProductChecker";
import { useDispatch } from "react-redux";
import { removeItemBasket } from "../../redux/Basket/basket-operations";

const BasketItem = (props) => {
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
  return (
    <BasketWraperCard>
      <BasketWraperItem>
        <BasketItemImg
          src={props.basketCards.photo}
          alt={props.basketCards.name}
          width={"133px"}
        />
      </BasketWraperItem>
      <BasketWraperTitle>
        <BasketItemsTitle>{props.basketCards.name}</BasketItemsTitle>
        <BasketItemSubTitle>{props.basketCards.category}</BasketItemSubTitle>
        <div style={{ marginTop: "38px" }}>
          <ProductChecker
            count={count}
            increment={increment}
            decrement={decrement}
          />
        </div>
      </BasketWraperTitle>
      <BasketWraperRemove>
        <BasketItemPryce>{props.basketCards.price}</BasketItemPryce>

        <BaskeItemRemove
          onClick={(e) => {
            dispatch(removeItemBasket({ id: props.basketCards.id }));
          }}
        >
          Remove
        </BaskeItemRemove>
      </BasketWraperRemove>
    </BasketWraperCard>
  );
};
export default BasketItem;
import styled from "styled-components";

export const BasketItemsTitle = styled.h4`
  color: rgba(29, 30, 33, 1);
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: left;
`;

export const BasketWraperCard = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);
  padding-bottom: 20px;
`;

export const BasketWraperTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BasketWraperRemove = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

export const BasketItemSubTitle = styled.p`
  color: rgba(106, 106, 111, 1);
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: left;
`;

export const BasketItemPryce = styled.p``;

export const BaskeItemRemove = styled.button`
  color: rgba(232, 80, 80, 1);
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 0px;
  letter-spacing: -5%;
  text-align: center;
  border-radius: 40px;
  background: rgba(232, 80, 80, 0.1);
  padding: 12px 8px;
`;

export const BasketItemImg = styled.img`
  box-sizing: border-box;
  border: 1.15px solid rgba(241, 241, 241, 1);
  border-radius: 27px;
  height: 133px;
  width: 133px;
`;

export const BasketWraperItem = styled.div``;
