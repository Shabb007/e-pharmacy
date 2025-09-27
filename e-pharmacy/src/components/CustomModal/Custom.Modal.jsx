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
          backgroundColor: "white",
          borderRadius: "20px",
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
