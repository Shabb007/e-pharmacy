import React from "react";
import PropTypes from "prop-types";
import {
  MedicineStoreCardAddress,
  MedicineStoreCardAdressWraper,
  MedicineStoreCardButton,
  MedicineStoreCardButtonWapper,
  MedicineStoreCardItem,
  MedicineStoreCardOpen,
  MedicineStoreCardRating,
  MedicineStoreCardTel,
  MedicineStoreCardTitle,
} from "./PromoBanners.styled";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const MedicineStoreCard = (props) => {
  return (
    <MedicineStoreCardItem>
      <MedicineStoreCardTitle>{props.name}</MedicineStoreCardTitle>
      <MedicineStoreCardAdressWraper>
        <MdOutlineLocationOn color="green" />
        <div>
          <MedicineStoreCardAddress>{props.address}</MedicineStoreCardAddress>
          <MedicineStoreCardAddress>{props.city}</MedicineStoreCardAddress>
        </div>
      </MedicineStoreCardAdressWraper>

      <MedicineStoreCardTel>
        {" "}
        <BsTelephone color="green" />
        {props.phone}
      </MedicineStoreCardTel>
      <MedicineStoreCardButtonWapper>
        <MedicineStoreCardButton>Visit Store</MedicineStoreCardButton>
        <div style={{ display: "flex", gap: "13px", alignItems: "center" }}>
          <MedicineStoreCardRating>
            <FaStar color="rgb(255, 197, 49)" />
            {props.rating}
          </MedicineStoreCardRating>
          {props.open ? (
            <MedicineStoreCardOpen>Open</MedicineStoreCardOpen>
          ) : (
            <MedicineStoreCardOpen style={{ color: "red" }}>
              Close
            </MedicineStoreCardOpen>
          )}
        </div>
      </MedicineStoreCardButtonWapper>
    </MedicineStoreCardItem>
  );
};

MedicineStoreCard.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MedicineStoreCard;
