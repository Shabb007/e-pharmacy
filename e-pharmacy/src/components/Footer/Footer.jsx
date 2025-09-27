import { Container } from "../Container/container.styled";
import { Logo } from "../Header/Header.styled";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TfiFacebook } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa";
import {
  FooterDesc,
  FooterLogoWrapper,
  FooterNav,
  FooterNavLink,
  FooterPrivateList,
  FooterPrivateListItem,
  FooterPrivateListItemLink,
  FooterSocialLink,
  FooterSocialList,
  FooterSocialListItem,
  FooterWrapper,
  FooterWrapperSection,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrapperSection>
      <Container>
        <FooterWrapper>
          <FooterLogoWrapper>
            <Logo>E-Pharmacy</Logo>
            <FooterDesc>
              Get the medicine to help you feel better, get back to your active
              life, and enjoy every moment.
            </FooterDesc>
          </FooterLogoWrapper>
          <FooterNav>
            <FooterNavLink>Home</FooterNavLink>
            <FooterNavLink>Medicine store</FooterNavLink>
            <FooterNavLink> Medicine</FooterNavLink>
          </FooterNav>
          <FooterSocialList>
            <FooterSocialListItem>
              <FooterSocialLink href="https://www.facebook.com/">
                <TfiFacebook color="white" size={22} />
              </FooterSocialLink>
            </FooterSocialListItem>
            <FooterSocialListItem>
              <FooterSocialLink href="https://www.instagram.com/">
                <BiLogoInstagramAlt color="white" size={22} />
              </FooterSocialLink>
            </FooterSocialListItem>
            <FooterSocialListItem>
              <FooterSocialLink href="https://www.youtube.com">
                <FaYoutube color="white" size={22} />
              </FooterSocialLink>{" "}
            </FooterSocialListItem>
          </FooterSocialList>
        </FooterWrapper>

        <FooterPrivateList>
          <FooterPrivateListItem>
            <FooterPrivateListItemLink>
              © E-Pharmacy 2023. All Rights Reserved
            </FooterPrivateListItemLink>
          </FooterPrivateListItem>
          <FooterPrivateListItem>
            <FooterPrivateListItemLink>
              Privacy Policy
            </FooterPrivateListItemLink>
          </FooterPrivateListItem>
          <FooterPrivateListItem>
            <FooterPrivateListItemLink>
              Terms & Conditions
            </FooterPrivateListItemLink>
          </FooterPrivateListItem>
        </FooterPrivateList>
      </Container>
    </FooterWrapperSection>
  );
};

export default Footer;
