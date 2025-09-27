import styled from "styled-components";
// style={{ width: "44px" }} fill={"#59B17A"}

export const HeaderWrapperSection = styled.header`
  padding: 20px;
  text-align: center;
  color: white;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
  padding-bottom: 28px;
`;

export const Logo = styled.div`
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const ButtonHeader = styled.div`
  border-radius: 60px;
  background: white;
  color: rgb(147, 147, 154);
  padding: 16px 29px;
`;
export const ActiveButtonHeader = styled.div`
  border-radius: 24px;
  background: rgb(89, 177, 122);
  padding: 16px 32px;

  color: white;
`;

export const ButtonHeaderWrapper = styled.div`
  border-radius: 60px;
  background: white;
  color: rgb(147, 147, 154);
  font-size: 14px;
  font-weight: 400;
  border: 1px solid rgb(217, 217, 217);
  padding: 8px;
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const HeaderListItem = styled.li``;

export const HeaderListAuth = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const HeaderListAuthButtonRegister = styled.button`
  box-sizing: border-box;
  border: 1px solid rgba(241, 241, 241, 0.5);
  border-radius: 60px;

  color: rgb(241, 241, 241);
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  padding: 16px 32px;
`;

export const HeaderListAuthButtonLogin = styled.button`
  color: rgb(241, 241, 241);
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalTitle = styled.h3`
  color: rgb(29, 30, 33);
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  text-align: center;
  margin-bottom: 14px;
`;

export const ModalSubTitle = styled.p`
  color: rgb(106, 106, 111);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  margin-bottom: 25px;
`;

export const ModalInput = styled.input`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  background: rgb(255, 255, 255);
  padding: 18px 13px;
  margin-bottom: 14px;
`;

export const ModalButton = styled.button`
  border-radius: 60px;
  background: rgb(89, 177, 122);
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
  padding: 13px;
  margin-bottom: 20px;
  margin-top: 14px;
`;

export const ModalSubButton = styled.button`
  color: rgba(29, 30, 33, 0.4);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 50px 70px;
`;

export const CloseModal = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const AuthWrapper = styled.div``;

export const AuthList = styled.ul`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const AuthItem = styled.li``;

export const AuthBasketNumber = styled.div`
  position: absolute;
  background: rgb(231, 241, 237);
  color: rgb(89, 177, 122);
  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  top: -9%;
  right: -4%;
`;

export const AuthBasket = styled.div`
  border: 1px solid rgb(241, 241, 241);
  background: rgb(255, 255, 255);
  width: 44px;
  height: 44px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const AuthUser = styled.p`
  background: rgba(89, 177, 122, 0.1);
  color: rgb(89, 177, 122);
  font-size: 18px;
  font-weight: 600;
  line-height: 140%;
  padding: 15px;
  border-radius: 100%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthSignOut = styled.button`
  border: 1px solid rgba(89, 177, 122, 0.5);
  border-radius: 60px;
  color: rgb(89, 177, 122);
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  padding: 16px 32px;
`;
