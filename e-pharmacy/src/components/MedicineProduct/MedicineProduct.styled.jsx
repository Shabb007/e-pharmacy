import styled from "styled-components";

export const MedicineProductCardItem = styled.li`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const MedicineProductCardItemName = styled.h3`
  color: rgb(29, 30, 33);
  font-size: 18px;
  font-weight: 600;
  line-height: 140%;
  margin-bottom: 8px;
`;

export const MedicineProductCardItemDecr = styled.p`
  color: rgba(29, 30, 33, 0.6);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;
export const MedicineProductCardItemTabl = styled.div`
  display: flex;
  align-items: center;
`;

export const MedicineProductCardItemPhoto = styled.img`
  box-sizing: border-box;
  border: 1.15px solid rgba(89, 177, 122, 0.6);
  border-radius: 20px;
  width: 280px;
`;
export const MedicineProductCardItemButton = styled.button``;

export const MedicineProductCardItemDescWrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 20px;
`;
export const MedicineProductCardItemDescWrapperTabl = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const MedicineProductCardItemButtonDetalis = styled.button`
  color: rgb(29, 30, 33);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  text-decoration-line: underline;
`;

export const MedicineProductCardItemButtonDetalisWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
