import React, { useState } from "react";
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
  const [cityFilter, setCityFilter] = useState("");
  const [openFilter, setOpenFilter] = useState("all");

  useEffect(() => {
    dispatch(fetchStoreCard());
    return () => {};
  }, []);

  const filteredCards = cards.filter(item => {
    const cityMatch = cityFilter ? item.city.toLowerCase().includes(cityFilter.toLowerCase()) : true;
    const openMatch = openFilter === "all" ? true : item.open === (openFilter === "open");
    return cityMatch && openMatch;
  });

  return (
    <Container>
      <MedicineStoreWrapper>
        <MedicineStoreTitle>Medicine store</MedicineStoreTitle>
        
        {/* Filter UI */}
        <FilterWrapper>
          <FilterInput
            type="text"
            placeholder="Filter by city"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
          />
          <FilterSelect value={openFilter} onChange={(e) => setOpenFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </FilterSelect>
        </FilterWrapper>

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
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && (
            <p style={{ color: "#c0392b" }}>
              Failed to load stores{error ? `: ${error}` : "."}
            </p>
          )}
          {status === "succeeded" && filteredCards.length === 0 && (
            <p>No stores found.</p>
          )}
          {status === "succeeded" &&
            filteredCards.length > 0 &&
            filteredCards.map((item) => (
              <MedicineStoreCardComponent
                key={item.id}
                name={item.name}
                city={item.city}
                address={item.address}
                phone={item.phone}
                rating={item.rating}
                open={item.open}
              />
            ))}
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

export const FilterWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  margin-left: 50px;
  align-items: center;
`;

export const FilterInput = styled.input`
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  min-width: 200px;
`;

export const FilterSelect = styled.select`
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  background: white;
`;