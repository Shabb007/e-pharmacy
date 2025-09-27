import { useNavigate, useParams } from "react-router-dom";
import { useCardsId } from "../../redux/cardMedicine/cardMedicine-selectors";
import CardDetails from "../CardDetails/CardDetails.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCardDetails } from "../../redux/cardMedicine/cardMedicine-operations.js";
import DescriptionDetail from "../DescriptionDetail/DescriptionDetail";
import styled from "styled-components";
import { Container } from "../Container/container.styled";
import { MedicineStoreCardButton } from "../PromoBanners/PromoBanners.styled";

const MedicineProductDetail = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const cardId = useCardsId();
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      dispatch(fetchCardDetalis(name));
    }
  }, [dispatch, name]);

  if (!cardId || cardId.length === 0) {
    return <p>No details found for this product.</p>;
  }

  const cardDetalis = cardId[0];
  return (
    <Container>
      <MedicineStoreCardButton
        style={{ marginTop: "20px" }}
        onClick={() => navigate(-1)}
      >
        Back
      </MedicineStoreCardButton>

      <MedicineProductDetailWrapper>
        <CardDetalis
          stock={cardDetalis.stock}
          name={cardDetalis.name}
          suppliers={cardDetalis.suppliers}
          photo={cardDetalis.photo}
          id={cardDetalis.id}
        />

        <DescriptionDetail />
      </MedicineProductDetailWrapper>
    </Container>
  );
};

export default MedicineProductDetail;

export const MedicineProductDetailWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 100px;
  margin-bottom: 100px;
`;
