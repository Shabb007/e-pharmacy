import styled from "styled-components";

export const FilterSectionWrapper = styled.div`
  display: flex;
  gap: 13px;
  margin-bottom: 120px;
`;

export const FilterInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .search-icon {
    position: absolute;
    left: 14px;
    color: rgba(29, 30, 33, 0.4);
  }
`;

export const FilterInput = styled.input`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  background: rgb(255, 255, 255);
  color: rgba(29, 30, 33, 0.4);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  padding: 14px 14px 14px 36px;
  height: 38px;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  border-radius: 60px;
  background: rgb(89, 177, 122);
  padding: 13px 30px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  height: 38px;
`;
export const FilterTitle = styled.h1`
  color: rgb(29, 30, 33);
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-top: 100px;
  margin-bottom: 40px;
`;
export const FilterMedicineCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 40px;
`;
