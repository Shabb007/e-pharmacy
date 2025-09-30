import styled from "styled-components";
import Modal from "react-modal";

const CustomModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgb(89, 177, 122)",
          borderRadius: "20px",
          padding: 0,
          width: "90%",
          maxWidth: "520px",
          color: "#ffffff",
          boxShadow:
            "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
        },
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
      }}
    >
      <ModalWrapper>{children}</ModalWrapper>
    </Modal>
  );
};

export default CustomModal;
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalTitle = styled.h3`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  text-align: center;
  margin-bottom: 14px;
`;

export const ModalSubTitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
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
  color: rgb(29, 30, 33);
  &::placeholder {
    color: rgba(29, 30, 33, 0.6);
  }
`;

export const ModalButton = styled.button`
  border-radius: 60px;
  background: #ffffff;
  color: rgb(89, 177, 122);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
  padding: 13px;
  margin-bottom: 20px;
  margin-top: 14px;
`;

export const ModalSubButton = styled.button`
  color: rgba(255, 255, 255, 0.8);
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
  color: #ffffff;
  span {
    color: #ffe0e0;
  }
`;

export const CloseModal = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  border: none;
  background: transparent;
  cursor: pointer;
`;
