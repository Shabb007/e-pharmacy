import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../Container/container.styled";
import {
  HomeBanersCardButton,
  HomeBanersCardPercent,
  HomeBanersCardPercentWrapper,
  HomeBanersCardSpan,
  HomeBanersCardTitle,
  HomeBanersCardWarperTitle,
  HomeBanersList,
  HomeBanersListItem,
  HomeMain,
  HomeSectionStore,
  HomeSectionStoreDesc,
  HomeSectionStoreTitle,
  HomeWrapperImg,
  HomeWrapperSection,
  HomeWrapperSectionDesc,
  HomeWrapperSectionTitle,
  PromoSectionDescr,
  PromoSectionImg,
  PromoSectionTitle,
  PromoSectionWrapper,
  PromoSectionWrapperTitle,
} from "./HomePreview.styled";
import MedicineStoreCardComponent from "../PromoBanners/PromoBanners"; // Renamed import for clarity

import Promoimg from "../../img/PromoImg-1x.png";
import { PiLightning } from "react-icons/pi";
import Reviews from "../Reviews/Reviews";
import { HeaderListAuthButtonRegister } from "../Header/Header.styled";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchStoreCard } from "../../redux/cardStore/cardStore-operations";
import {
  useCardsStore,
  useErrorCardsStore,
  useStatusCardsStore,
} from "../../redux/cardStore/cardStore-selectors";
const HomePreview = () => {
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
    <>
      <HomeWrapperSection>
        <Container>
          <HomeWrapperImg>
            <HomeWrapperSectionTitle>
              Your medication delivered
            </HomeWrapperSectionTitle>
            <HomeWrapperSectionDesc>
              Say goodbye to all your healthcare worries with us
            </HomeWrapperSectionDesc>
          </HomeWrapperImg>
        </Container>
      </HomeWrapperSection>
      <HomeMain>
        <Container>
          <HomeBanersList>
            <HomeBanersListItem>
              <HomeBanersCardWarperTitle>
                <HomeBanersCardSpan>1</HomeBanersCardSpan>
                <HomeBanersCardTitle>Huge Sale</HomeBanersCardTitle>
              </HomeBanersCardWarperTitle>
              <HomeBanersCardPercentWrapper>
                <HomeBanersCardPercent>70%</HomeBanersCardPercent>
                <HomeBanersCardButton>Shop now</HomeBanersCardButton>
              </HomeBanersCardPercentWrapper>
            </HomeBanersListItem>
            <HomeBanersListItem>
              <HomeBanersCardWarperTitle>
                <HomeBanersCardSpan>2</HomeBanersCardSpan>
                <HomeBanersCardTitle>Secure delivery</HomeBanersCardTitle>
              </HomeBanersCardWarperTitle>
              <HomeBanersCardPercentWrapper>
                <HomeBanersCardPercent>100%</HomeBanersCardPercent>
                <HomeBanersCardButton>Read more</HomeBanersCardButton>
              </HomeBanersCardPercentWrapper>
            </HomeBanersListItem>
            <HomeBanersListItem>
              <HomeBanersCardWarperTitle>
                <HomeBanersCardSpan>3</HomeBanersCardSpan>
                <HomeBanersCardTitle>Off</HomeBanersCardTitle>
              </HomeBanersCardWarperTitle>
              <HomeBanersCardPercentWrapper>
                <HomeBanersCardPercent>35%</HomeBanersCardPercent>
                <HomeBanersCardButton>Shop now</HomeBanersCardButton>
              </HomeBanersCardPercentWrapper>
            </HomeBanersListItem>
          </HomeBanersList>
        </Container>
        <HomeSectionStore>
          <Container>
            <HomeSectionStoreTitle>
              Your Nearest Medicine Store
            </HomeSectionStoreTitle>
            <HomeSectionStoreDesc>
              Search for Medicine, Filter by your location
            </HomeSectionStoreDesc>

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
            <PromoSectionWrapper>
              <PromoSectionWrapperTitle>
                <div>
                  <PromoSectionTitle>
                    Add the medicines you need online now
                  </PromoSectionTitle>
                  <PromoSectionDescr>
                    Enjoy the convenience of having your prescriptions filled
                    from home by connecting with your community pharmacy through
                    our online platform.
                  </PromoSectionDescr>
                </div>
                <HeaderListAuthButtonRegister>
                  Buy medicine
                </HeaderListAuthButtonRegister>
              </PromoSectionWrapperTitle>
              <PromoSectionImg src={Promoimg} />
            </PromoSectionWrapper>
          </Container>
        </HomeSectionStore>
        <PromoSectionFeatures>
          <Container>
            <PromoSectionFeaturesList>
              <PromoSectionFeaturesItem>
                <PiLightning color="rgb(89, 177, 122)" />
                Take user orders form online
              </PromoSectionFeaturesItem>

              <PromoSectionFeaturesItem>
                <PiLightning color="rgb(89, 177, 122)" />
                Create your shop profile
              </PromoSectionFeaturesItem>

              <PromoSectionFeaturesItem>
                <PiLightning color="rgb(89, 177, 122)" />
                Manage your store
              </PromoSectionFeaturesItem>

              <PromoSectionFeaturesItem>
                <PiLightning color="rgb(89, 177, 122)" />
                Get more orders
              </PromoSectionFeaturesItem>

              <PromoSectionFeaturesItem>
                <PiLightning color="rgb(89, 177, 122)" />
                Storage shed
              </PromoSectionFeaturesItem>
            </PromoSectionFeaturesList>
          </Container>
        </PromoSectionFeatures>

        <Reviews />
      </HomeMain>
    </>
  );
};

export default HomePreview;

export const PromoSectionFeatures = styled.div`
  padding-bottom: 150px;
`;

export const PromoSectionFeaturesList = styled.ul`
  display: flex;
  justify-content: space-around;
`;
export const PromoSectionFeaturesItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: 800;
  gap: 8px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  justify-content: center;
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
