import styled from "styled-components";
import photoPreview from "../../img/homemg-1x.png";

export const HomeWrapperSection = styled.div`
  background: rgb(89, 177, 122);
  margin-bottom: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 140px;
`;

export const HomeWrapperImg = styled.div`
  position: relative;
  background-image: url(${photoPreview});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 508px;
  width: 749px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeWrapperSectionTitle = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 74px;
  font-weight: 600;
  line-height: 74px;
  position: absolute;
  top: 20%;
  left: 10%;
  max-width: 609px;
`;

export const HomeWrapperSectionDesc = styled.p`
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  position: absolute;
  top: 60%;
  left: 60%;
  max-width: 200px;
`;

export const HomeMain = styled.div``;

export const HomeBanersList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const HomeBanersCardPercentWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 28px;
`;

export const HomeBanersListItem = styled.li`
  box-sizing: border-box;
  border: 1.15px solid rgb(241, 241, 241);
  border-radius: 27px;
  box-shadow: 0px -1px 13.86px 0px rgba(29, 30, 33, 0.02);
  background: rgb(253, 253, 253);
  padding: 18px 100px 18px 18px;
`;

export const HomeBanersCardWarperTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding-bottom: 14px;
`;

export const HomeBanersCardSpan = styled.span`
  color: rgb(89, 177, 122);
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  background: rgba(231, 241, 237, 0.4);
  padding: 23px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 74px;
`;
export const HomeBanersCardTitle = styled.h4`
  color: rgb(37, 37, 57);
  font-size: 20px;
  font-weight: 500;
  line-height: 140%;
`;
export const HomeBanersCardPercent = styled.p`
  color: rgb(37, 37, 57);
  font-size: 36px;
  font-weight: 500;
  line-height: 140%;
`;

export const HomeBanersCardButton = styled.button`
  color: rgb(147, 147, 154);
  font-size: 13px;
  font-weight: 400;
  line-height: 140%;
`;
export const HomeSectionStore = styled.div`
  color: rgb(147, 147, 154);
  font-size: 13px;
  font-weight: 400;
  line-height: 140%;
  margin-top: 120px;
`;

export const HomeSectionStoreTitle = styled.h2`
  color: rgb(29, 30, 33);
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  text-align: center;
  margin-bottom: 14px;
`;

export const HomeSectionStoreDesc = styled.p`
  color: rgb(147, 147, 154);
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 20px;
  margin-bottom: 64px;
`;

export const PromoSectionWrapper = styled.div`
  background: rgb(89, 177, 122);
  padding: 40px;
  border-radius: 32px;
  display: flex;
  margin-bottom: 64px;
  justify-content: space-between;
`;

export const PromoSectionWrapperTitle = styled.div`
  max-width: 501px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
`;
export const PromoSectionTitle = styled.h2`
  color: rgb(241, 241, 241);
  font-size: 48px;
  font-weight: 600;
  line-height: 55px;
  margin-bottom: 30px;
`;

export const PromoSectionImg = styled.img`
  max-width: 100%;
  height: auto;
  @media (max-width: 768px) {
    width: 633px;
  }
`;

export const PromoSectionDescr = styled.p`
  color: rgb(241, 241, 241);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;
