import { useEffect, useState } from "react";
import { Container } from "../Container/container.styled";
import { CiFilter } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Select from "react-select";
import {
  useCards,
  useStatus,
  useError,
} from "../../redux/cardMedicine/cardMedicine-selectors";
import MedicineProduct from "../MedicineProduct/MedicineProduct";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { fetchCardSearch } from "../../redux/cardMedicine/cardMedicine-operations";
import {
  FilterButton,
  FilterInput,
  FilterInputWrapper,
  FilterMedicineCardList,
  FilterSectionWrapper,
  FilterTitle,
} from "./MedicineProductFilter.styled";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "all", label: "All" },

  { value: "Heart", label: "Heart" },
  { value: "Leg", label: "Leg" },
  { value: "Dental Care", label: "Dental Care" },
  { value: "Medicine", label: "Medicine" },
  { value: "Hand", label: "Hand" },
  { value: "Skin Care", label: "Skin Care" },
  { value: "Hand", label: "Hand" },
];
const MedicineProductFilter = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cards = useCards();
  const status = useStatus();
  const error = useError();
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [stringInput, setStringInput] = useState();

  useEffect(() => {
    console.log(selectedOption.value);
    dispatch(
      fetchCardSearch({
        select: selectedOption.value,
        name: "",
        num: 12,
      })
    );
  }, [selectedOption.value, dispatch]);

  const felterMedicine = () => {
    dispatch(
      fetchCardSearch({
        select: selectedOption.value,
        name: stringInput,
        num: 9,
      })
    );
  };
  const handleCardClick = (id) => {
    console.log(id);
    navigate(`/Medicine/${id}`);
  };

  const chengeInput = (el) => {
    setStringInput(el);
  };
  return (
    <Container>
      <FilterTitle>Medicine</FilterTitle>

      <FilterSectionWrapper>
        <Select
          defaultValue={{
            value: "all",
            label: "Product category",
          }}
          onChange={setSelectedOption}
          options={options}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "214px",
              borderRadius: "30px",
              margin: "0",
            }),
            singleValue: (baseStyles, state) => ({
              ...baseStyles,
              fontSize: "12px",
              fontWeight: "400",
              color: "rgba(29, 30, 33, 0.4)",
            }),
            input: (baseStyles, state) => ({
              ...baseStyles,
              fontSize: "12px",
              fontWeight: "400",
              color: "rgba(29, 30, 33, 0.4)",
            }),
            menu: (baseStyles, state) => ({
              ...baseStyles,
              borderRadius: "10px",
              width: "214px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              padding: "4px",
              fontSize: "12px",
              fontWeight: "400",
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              padding: "10px",
              backgroundColor: state.isFocused ? "#59B17A" : "white",
              color: state.isSelected ? "#000000" : "#333333",
              borderRadius: "10px",
              fontSize: "12px",
              fontWeight: "400",
            }),
          }}
        />
        <FilterInputWrapper>
          <CiSearch className="search-icon" />
          <FilterInput
            onChange={(e) => chengeInput(e.target.value)}
            placeholder="Search medicine"
          />
        </FilterInputWrapper>
        <FilterButton onClick={felterMedicine}>
          <CiFilter />
          Filter
        </FilterButton>
      </FilterSectionWrapper>
      <FilterMedicineCardList>
        {error && <p style={{ color: "red" }}>An error occurred: {error}</p>}{" "}
        {status === "loading" ? (
          <p>Loading...</p>
        ) : cards.length === 0 ? (
          <p>No cards found.</p>
        ) : (
          <FilterMedicineCardList>
            {" "}
            {cards.map((el) => (
              <MedicineProduct
                onClick={() => handleCardClick(el.name)}
                key={nanoid()}
                stock={el.stock}
                name={el.name}
                suppliers={el.suppliers}
                photo={el.photo}
                id={el.id}
              />
            ))}{" "}
          </FilterMedicineCardList>
        )}
      </FilterMedicineCardList>
    </Container>
  );
};

export default MedicineProductFilter;
