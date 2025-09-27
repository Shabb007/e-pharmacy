import { TiThMenuOutline } from "react-icons/ti";
import {
  MedicineProductCardItem,
  MedicineProductCardItemButtonDetalis,
  MedicineProductCardItemButtonDetalisWrapper,
  MedicineProductCardItemDecr,
  MedicineProductCardItemDescWrapper,
  MedicineProductCardItemDescWrapperTabl,
  MedicineProductCardItemName,
  MedicineProductCardItemPhoto,
  MedicineProductCardItemTabl,
} from "./MedicineProduct.styled";
import { MedicineStoreCardButton } from "../PromoBanners/PromoBanners.styled";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addItemBasket } from "../../redux/Basket/basket-operations";

const MedicineProduct = (props) => {
  const dispatch = useDispatch();

  const addCardBasket = (e) => {
    dispatch(addItemBasket({ id: e, price: "1" }));
  };

  return (
    <MedicineProductCardItem>
      <MedicineProductCardItemPhoto src={props.photo} />
      <MedicineProductCardItemDescWrapper>
        <MedicineProductCardItemDescWrapperTabl>
          <div>
            <MedicineProductCardItemName>
              {props.name}
            </MedicineProductCardItemName>
            <MedicineProductCardItemDecr>
              {props.suppliers}
            </MedicineProductCardItemDecr>
          </div>
          <MedicineProductCardItemTabl>
            <TiThMenuOutline />
            {props.stock}
          </MedicineProductCardItemTabl>
        </MedicineProductCardItemDescWrapperTabl>
        <MedicineProductCardItemButtonDetalisWrapper>
          <MedicineStoreCardButton onClick={() => addCardBasket(props.id)}>
            Add to cart
          </MedicineStoreCardButton>
          <MedicineProductCardItemButtonDetalis onClick={props.onClick}>
            Details
          </MedicineProductCardItemButtonDetalis>
        </MedicineProductCardItemButtonDetalisWrapper>
      </MedicineProductCardItemDescWrapper>
    </MedicineProductCardItem>
  );
};

MedicineProduct.propTypes = {
  photo: PropTypes.string.isRequired,
  suppliers: PropTypes.string.isRequired,
  stock: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default MedicineProduct;
