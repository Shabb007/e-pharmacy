import styled from "styled-components";

export const MedicineStoreCardItem = styled.li`
  box-sizing: border-box;
  border: 1.15px solid rgb(241, 241, 241);
  border-radius: 27px;
  background: rgb(231, 241, 237);
  width: 360px;

  height: 276px;

  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MedicineStoreCardTitle = styled.h3`
  color: rgb(29, 30, 33);
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
`;

export const MedicineStoreCardAddress = styled.p`
  color: rgb(147, 147, 154);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
`;

export const MedicineStoreCardTel = styled.p`
  color: rgb(147, 147, 154);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  display: flex;
  gap: 10px;
`;

export const MedicineStoreCardButton = styled.button`
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  border-radius: 24px;
  background: rgb(89, 177, 122);
  padding: 10px 16px;
`;

export const MedicineStoreCardOpen = styled.div`
  color: rgb(89, 177, 122);
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -2%;
  text-align: center;
  text-transform: uppercase;
  border-radius: 8px;
  background: rgba(89, 177, 122, 0.1);
  padding: 8px 16px;
`;

export const MedicineStoreCardButtonWapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MedicineStoreCardRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const MedicineStoreCardAdressWraper = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
`;
