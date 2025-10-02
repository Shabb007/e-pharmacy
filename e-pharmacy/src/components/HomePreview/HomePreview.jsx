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
  useEffect(() => {
    dispatch(fetchStoreCard());
    return () => {};
  }, []);

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
              {status === "succeeded" && cards.length === 0 && (
                <p>No stores found.</p>
              )}
              {status === "succeeded" &&
                cards.length > 0 &&
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
