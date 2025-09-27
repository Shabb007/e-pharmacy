import styled from "styled-components";

export const DescriptionDetailWrapper = styled.div`
  border-radius: 27px;
  background: rgb(255, 255, 255);
  padding: 40px;
  max-width: 800px;
`;

export const DescriptionDetailWrapperButton = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
`;

export const DescriptionDetailButton = styled.button`
  border-radius: 40px;
  background: rgb(89, 177, 122);
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  text-align: center;
  padding: 8px 25px;
`;

export const DescriptionDetailDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  color: rgb(106, 106, 111);
  margin-bottom: 20px;
`;

export const DescriptionDetailList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const DescriptionDetailListItem = styled.li``;

export const DescriptionDetailTitleSpan = styled.span`
  margin-right: 5px;
  display: inline;
  white-space: nowrap;
  color: rgb(106, 106, 111);
`;

export const DescriptionDetailSubtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  display: inline;
  margin-left: 5px;
  color: rgb(29, 30, 33);
`;

export const DescriptionDetailButtonActive = styled.button`
  border-radius: 40px;
  background: rgba(89, 177, 122, 0.1);
  color: rgb(89, 177, 122);
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  text-align: center;
  padding: 8px 25px;
`;
