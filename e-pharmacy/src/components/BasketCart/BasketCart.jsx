import React, { useState } from "react";
import { Container } from "../Container/container.styled";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  useBasketCard,
  useBasketHeader,
} from "../../redux/Basket/basket-selectors";
import { fetchCardBasket } from "../../redux/Basket/basket-operations";
import BasketItem from "../BasketItem/BasketItem";

const BasketCart = () => {
  const [Pryce, setPryce] = useState(0);

  const SubmitButton = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      payment: formData.get("payment"),
    };
    console.log("Form data:", data);
  };
  const dispatch = useDispatch();
  const userbasket = useBasketHeader();
  const BasketCard = useBasketCard();
  useEffect(() => {
    if (userbasket) {
      dispatch(fetchCardBasket(userbasket));
    }
  }, [dispatch, userbasket]);

  return (
    <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
      <BasketCartTitle>Card</BasketCartTitle>

      <BasketPaymentCardWrapperTable>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <BasketPaymentCardWrapper onSubmit={SubmitButton}>
              <BasketPaymentCardTitle>
                Enter shipping info{" "}
              </BasketPaymentCardTitle>
              <BasketPaymentCardSubtitle>
                Enter your delivery address where you get the product. You can
                also send any other location where you send the products.
              </BasketPaymentCardSubtitle>
              <BasketPaymentCardInputList>
                <BasketPaymentCardInputItem>
                  <BasketPaymentCardInputItemTitle>
                    Name
                  </BasketPaymentCardInputItemTitle>
                  <BasketPaymentCardInput
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </BasketPaymentCardInputItem>

                <BasketPaymentCardInputItem>
                  <BasketPaymentCardInputItemTitle>
                    Email
                  </BasketPaymentCardInputItemTitle>
                  <BasketPaymentCardInput
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </BasketPaymentCardInputItem>

                <BasketPaymentCardInputItem>
                  <BasketPaymentCardInputItemTitle>
                    Phone
                  </BasketPaymentCardInputItemTitle>
                  <BasketPaymentCardInput
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone"
                    required
                  />
                </BasketPaymentCardInputItem>

                <BasketPaymentCardInputItem>
                  <BasketPaymentCardInputItemTitle>
                    Address
                  </BasketPaymentCardInputItemTitle>
                  <BasketPaymentCardInput
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    required
                  />
                </BasketPaymentCardInputItem>
              </BasketPaymentCardInputList>
              <BasketPaymentCardLines />
              <BasketPaymentCardTitle style={{ marginTop: "40px" }}>
                Payment method
              </BasketPaymentCardTitle>
              <BasketPaymentCardSubtitle>
                You can pay us in a multiple way in our payment gateway system.
              </BasketPaymentCardSubtitle>

              <BasketPaymentCardInputRadioList>
                <BasketPaymentCardInputRadioListItem>
                  <BasketPaymentCardInputRadio
                    type="radio"
                    name="payment"
                    value="cash"
                    required
                  />
                  <BasketPaymentCardInputRadioLabel htmlFor="cash">
                    Cash On Delivery
                  </BasketPaymentCardInputRadioLabel>
                </BasketPaymentCardInputRadioListItem>

                <BasketPaymentCardInputRadioListItem>
                  <BasketPaymentCardInputRadio
                    type="radio"
                    name="payment"
                    value="bank"
                    required
                  />
                  <BasketPaymentCardInputRadioLabel htmlFor="bank">
                    Bank
                  </BasketPaymentCardInputRadioLabel>
                </BasketPaymentCardInputRadioListItem>
              </BasketPaymentCardInputRadioList>
              <BasketPaymentCardLines style={{ marginTop: "40px" }} />

              <BasketPaymentCardTitle style={{ marginTop: "40px" }}>
                Order details
              </BasketPaymentCardTitle>
              <BasketPaymentCardSubtitle>
                Shipping and additionnal costs are calculated based on values
                you have entered.
              </BasketPaymentCardSubtitle>
              <BasketPaymentCardTotalWrapper>
                <BasketPaymentCardTotalTitle>
                  Total:
                </BasketPaymentCardTotalTitle>
                <BasketPaymentCardTotalPryce>
                  ${Pryce}
                </BasketPaymentCardTotalPryce>
              </BasketPaymentCardTotalWrapper>

              <BasketPaymentCardSubmit type="submit">
                Place order
              </BasketPaymentCardSubmit>
            </BasketPaymentCardWrapper>
          </div>
          <BasketListWrapper>
            <BasketList>
              {BasketCard?.map((cardDetails) => (
                <BasketListItem key={cardDetails.id}>
                  <BasketItem basketCards={cardDetails} />
                </BasketListItem>
              ))}
            </BasketList>
          </BasketListWrapper>
        </div>
      </BasketPaymentCardWrapperTable>
    </Container>
  );
};

export default BasketCart;

export const BasketListWrapper = styled.div``;

export const BasketList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BasketListItem = styled.li``;

export const BasketListItemPhoto = styled.img``;

export const BasketListItemTitle = styled.h4``;

export const BasketListItemSubTitle = styled.p``;

export const BasketListItemPryce = styled.p``;

export const BasketListItemButton = styled.button``;

export const BasketPaymentCardWrapperTable = styled.div``;

export const BasketPaymentCardTotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  background: rgb(231, 241, 237);
  padding: 20px;
  margin-top: 20px;
`;

export const BasketPaymentCardTotalTitle = styled.div``;

export const BasketPaymentCardTotalPryce = styled.div`
  display: flex;
`;

export const BasketPaymentCardInputRadio = styled.input`
  display: flex;
`;
export const BasketPaymentCardInputRadioLabel = styled.label`
  display: flex;
  color: rgb(29, 30, 33);
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
`;

export const BasketPaymentCardInputRadioList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 21px;
`;
export const BasketPaymentCardInputRadioListItem = styled.li`
  display: flex;
  gap: 9px;
`;

export const BasketPaymentCardInputList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 20px;
  margin-bottom: 40px;
`;
export const BasketPaymentCardInputItem = styled.li``;
export const BasketPaymentCardInputItemTitle = styled.p`
  margin-bottom: 8px;
  margin-left: 20px;
  color: rgb(29, 30, 33);
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
`;
export const BasketPaymentCardInput = styled.input`
  box-sizing: border-box;
  border: 1px solid rgba(29, 30, 33, 0.2);
  border-radius: 60px;
  height: 44px;
  color: rgba(29, 30, 33, 0.6);
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  padding-left: 20px;
  width: 260px;
`;

export const BasketPaymentCardWrapper = styled.form`
  border-radius: 27px;
  background: rgb(255, 255, 255);
  padding: 40px;
  max-width: 630px;
`;

export const BasketPaymentCardSubmit = styled.button`
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: left;
  border-radius: 60px;
  background: rgb(89, 177, 122);
  padding: 13px 32px;
  margin-top: 20px;
`;
export const BasketPaymentCardLines = styled.div`
  border: 1px solid rgba(29, 30, 33, 0.1);
`;

export const BasketPaymentCardTitle = styled.h2`
  color: rgb(29, 30, 33);
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 14px;
`;

export const BasketPaymentCardSubtitle = styled.p`
  color: rgb(106, 106, 111);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

export const BasketCartTitle = styled.h1`
  color: rgb(29, 30, 33);
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 40px;
`;
