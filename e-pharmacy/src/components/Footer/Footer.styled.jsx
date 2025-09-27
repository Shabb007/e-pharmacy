import styled from "styled-components";

export const FooterWrapperSection = styled.div`
  background-color: var(--green-color);
`;
export const FooterWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(247, 248, 250, 0.3);
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const FooterLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FooterNav = styled.nav`
  display: flex;
  gap: 50px;
`;

export const FooterNavLink = styled.a`
  color: rgb(247, 248, 250);
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
`;

export const FooterDesc = styled.p`
  color: rgb(247, 248, 250);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  max-width: 311px;
`;

export const FooterPrivateList = styled.ul`
  display: flex;
  gap: 50px;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const FooterPrivateListItem = styled.li`
  color: rgb(247, 248, 250);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
`;

export const FooterPrivateListItemLink = styled.a`
  color: rgb(247, 248, 250);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
`;

export const FooterSocialList = styled.ul`
  display: flex;
  gap: 12px;
`;

export const FooterSocialLink = styled.a`
  border: 1px solid rgba(247, 248, 250, 0.1);
  border-radius: 10px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const FooterSocialListItem = styled.li``;
