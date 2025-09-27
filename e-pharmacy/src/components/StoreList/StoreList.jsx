import styled from "styled-components";
import MedicineStoreCardComponent from "../PromoBanners/PromoBanners";
import { Container } from "../Container/container.styled";
import { useDispatch } from "react-redux";
import { fetchStoreCard } from "../../redux/cardStore/cardStore-operations";
import { useEffect } from "react";
import {
  useCardsStore,
  useErrorCardsStore,
  useStatusCardsStore,
} from "../../redux/cardStore/cardStore-selectors";

const StoreList = () => {
  const dispatch = useDispatch();
  const cards = useCardsStore();
  const status = useStatusCardsStore();
  const error = useErrorCardsStore();
  useEffect(() => {
    dispatch(fetchStoreCard());
    return () => {};
  }, []);
  return (
    <Container>
      <MedicineStoreWrapper>
        <MedicineStoreTitle>Medicine store</MedicineStoreTitle>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            justifyContent: "center",
            marginBottom: "120px",
            alignItems: "center",
          }}
        >
          {cards.length > 0 ? (
            cards.map((item) => (
              <MedicineStoreCardComponent
                key={item.id}
                name={item.name}
                city={item.city}
                address={item.address}
                phone={item.phone}
                rating={item.rating}
                open={item.open}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </MedicineStoreWrapper>
    </Container>
  );
};

export default StoreList;

export const MedicineStoreTitle = styled.h1`
  color: rgb(29, 30, 33);
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-top: 100px;
  margin-bottom: 40px;
  margin-left: 50px;
`;

export const MedicineStoreWrapper = styled.div``;
