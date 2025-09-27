import { useState } from "react";
import { LiaPlusSolid, LiaMinusSolid } from "react-icons/lia";
import {
  ProductCheckerButton,
  ProductCheckerCount,
  ProductCheckerWrapper,
} from "./ProductChecker.styled";

const ProductChecker = (props) => {
  return (
    <ProductCheckerWrapper>
      <ProductCheckerButton
        onClick={() => {
          props.increment();
        }}
      >
        <LiaPlusSolid size={"20px"} color="rgb(89, 177, 122)" />
      </ProductCheckerButton>
      <ProductCheckerCount>{props.count}</ProductCheckerCount>
      <ProductCheckerButton
        onClick={() => {
          props.decrement();
        }}
      >
        <LiaMinusSolid size={"20px"} color="rgb(89, 177, 122)" />
      </ProductCheckerButton>
    </ProductCheckerWrapper>
  );
};

export default ProductChecker;
