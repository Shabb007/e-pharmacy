import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 100px;
  padding-right: 100px;
  @media (max-width: 900px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (max-width: 600px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`;
