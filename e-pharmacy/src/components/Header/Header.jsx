import {
  ButtonHeader,
  ActiveButtonHeader,
  HeaderList,
  HeaderListItem,
  Logo,
  ModalTitle,
  ModalSubTitle,
  ModalInput,
  ModalForm,
  ModalSubButton,
  ModalButton,
  CloseModal,
  HeaderWrapperSection,
  HeaderWrapper,
  ButtonHeaderWrapper,
  HeaderListAuth,
  HeaderListAuthButtonRegister,
  HeaderListAuthButtonLogin,
  AuthBasketNumber,
  AuthBasket,
  AuthItem,
  AuthList,
  AuthWrapper,
  AuthUser,
  AuthSignOut,
} from "./Header.styled";
import { NavLink } from "react-router-dom";
import { Container } from "../Container/container.styled";
import { ReactComponent as LogoIcon } from "../../img/logo.svg";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CustomModal from "../CustomModal/CustomModal";
import { BiX } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  currentUser,
  login,
  logout,
  register,
} from "../../redux/auth/auth-operations";
import { useUserName } from "../../redux/auth/auth-selectors";

import { SlBasket } from "react-icons/sl";
import { useBasketHeader } from "../../redux/Basket/basket-selectors";
import { fetchBasket } from "../../redux/Basket/basket-operations";
const Header = ({ headerStyles }) => {
  const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false);
  const [modalIsOpenRegister, setModalIsOpenRegister] = useState(false);

  const dispatch = useDispatch();
  const userName = useUserName();
  const basket = useBasketHeader();

  useEffect(() => {
    dispatch(fetchBasket());
  }, [dispatch]);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorsLogin },
    reset: resetLoginForm,
  } = useForm();

  const {
    register: registerRegister,
    handleSubmit: handleSubmitRegister,
    formState: { errors: errorsRegister },
    reset: resetRegisterForm,
  } = useForm();

  const onSubmitLogin = (data) => {
    dispatch(login(data));
    setModalIsOpenLogin(false);
    resetLoginForm();
  };

  const onSubmitRegister = (data) => {
    dispatch(register(data));
    setModalIsOpenRegister(false);
    resetRegisterForm();
  };

  return (
    <HeaderWrapperSection
      style={{ backgroundColor: headerStyles.backgroundColorHeader }}
    >
      <Container>
        <HeaderWrapper>
          <Logo style={{ color: headerStyles.colorlogoText }}>
            <LogoIcon style={{ fill: headerStyles.colorlogo }} />
            E-Pharmacy
          </Logo>
          <HeaderList>
            <HeaderListItem>
              <NavLink to="/" end>
                {({ isActive }) =>
                  isActive ? (
                    <ButtonHeaderWrapper>
                      <ActiveButtonHeader>Home</ActiveButtonHeader>
                    </ButtonHeaderWrapper>
                  ) : (
                    <ButtonHeaderWrapper>
                      <ButtonHeader>Home</ButtonHeader>
                    </ButtonHeaderWrapper>
                  )
                }
              </NavLink>
            </HeaderListItem>
            <HeaderListItem>
              <NavLink to="/Store">
                {({ isActive }) =>
                  isActive ? (
                    <ButtonHeaderWrapper>
                      <ActiveButtonHeader>Medicine store</ActiveButtonHeader>
                    </ButtonHeaderWrapper>
                  ) : (
                    <ButtonHeaderWrapper>
                      <ButtonHeader>Medicine store</ButtonHeader>
                    </ButtonHeaderWrapper>
                  )
                }
              </NavLink>
            </HeaderListItem>
            <HeaderListItem>
              <NavLink to="/Medicine">
                {({ isActive }) =>
                  isActive ? (
                    <ButtonHeaderWrapper>
                      <ActiveButtonHeader>Medicine</ActiveButtonHeader>
                    </ButtonHeaderWrapper>
                  ) : (
                    <ButtonHeaderWrapper>
                      <ButtonHeader>Medicine</ButtonHeader>
                    </ButtonHeaderWrapper>
                  )
                }
              </NavLink>
            </HeaderListItem>
          </HeaderList>
          {userName ? (
            <AuthWrapper>
              <AuthList>
                <AuthItem>
                  <NavLink to="/basket">
                    <AuthBasket>
                      <AuthBasketNumber>{basket.length}</AuthBasketNumber>
                      <SlBasket color=" rgb(89, 177, 122)" />
                    </AuthBasket>
                  </NavLink>
                </AuthItem>
                <AuthItem>
                  <AuthUser> {userName[0]}</AuthUser>
                </AuthItem>
                <AuthItem>
                  <AuthSignOut onClick={() => dispatch(logout())}>
                    Log out
                  </AuthSignOut>
                </AuthItem>
              </AuthList>
            </AuthWrapper>
          ) : (
            <HeaderListAuth>
              <li>
                <HeaderListAuthButtonRegister
                  onClick={() => setModalIsOpenRegister(true)}
                  style={{ color: headerStyles.colorlogo }}
                >
                  Register
                </HeaderListAuthButtonRegister>
              </li>
              <li>
                <HeaderListAuthButtonLogin
                  onClick={() => setModalIsOpenLogin(true)}
                  style={{ color: headerStyles.colorlogo }}
                >
                  Login
                </HeaderListAuthButtonLogin>
              </li>
            </HeaderListAuth>
          )}
        </HeaderWrapper>
      </Container>
      <CustomModal
        isOpen={modalIsOpenLogin}
        onRequestClose={() => setModalIsOpenLogin(false)}
      >
        {" "}
        <ModalTitle>Log in to your account</ModalTitle>{" "}
        <ModalSubTitle>
          {" "}
          Please login to your account before continuing.{" "}
        </ModalSubTitle>{" "}
        <ModalForm onSubmit={handleSubmitLogin(onSubmitLogin)}>
          {" "}
          <ModalInput
            placeholder="Email address"
            {...registerLogin("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Entered value does not match email format",
              },
            })}
          />{" "}
          {errorsLogin.email && <span>{errorsLogin.email.message}</span>}{" "}
          <ModalInput
            placeholder="Password"
            type="password"
            {...registerLogin("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />{" "}
          {errorsLogin.password && <span>{errorsLogin.password.message}</span>}{" "}
          <ModalButton type="submit">Log in</ModalButton>{" "}
        </ModalForm>{" "}
        <ModalSubButton>Don't have an account?</ModalSubButton>{" "}
        <CloseModal onClick={() => setModalIsOpenLogin(false)}>
          {" "}
          <BiX size={"30px"} />{" "}
        </CloseModal>{" "}
      </CustomModal>{" "}
      <CustomModal
        isOpen={modalIsOpenRegister}
        onRequestClose={() => setModalIsOpenRegister(false)}
      >
        {" "}
        <ModalTitle>Sign Up</ModalTitle>{" "}
        <ModalSubTitle>
          {" "}
          Before proceeding, please register on our site.{" "}
        </ModalSubTitle>{" "}
        <ModalForm onSubmit={handleSubmitRegister(onSubmitRegister)}>
          {" "}
          <ModalInput
            placeholder="User Name"
            {...registerRegister("name", { required: true })}
          />{" "}
          {errorsRegister.name && <span>This field is required</span>}{" "}
          <ModalInput
            placeholder="Email address"
            {...registerRegister("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Entered value does not match email format",
              },
            })}
          />{" "}
          {errorsRegister.email && <span>This field is required</span>}{" "}
          <ModalInput
            placeholder="Phone number"
            {...registerRegister("phone", { required: true })}
          />{" "}
          {errorsRegister.phone && <span>This field is required</span>}{" "}
          <ModalInput
            placeholder="Password"
            type="password"
            {...registerRegister("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />{" "}
          {errorsRegister.password && <span>This field is required</span>}{" "}
          <ModalButton type="submit">Sign Up</ModalButton>{" "}
        </ModalForm>{" "}
        <ModalSubButton>Already have an account?</ModalSubButton>{" "}
        <CloseModal onClick={() => setModalIsOpenRegister(false)}>
          {" "}
          <BiX size={"30px"} />{" "}
        </CloseModal>{" "}
      </CustomModal>
    </HeaderWrapperSection>
  );
};

export default Header;
