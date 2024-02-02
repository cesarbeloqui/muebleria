import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import styled from "styled-components";


const RedesButton = () => {

  return (
    <Wrapper>
      <a href="/carrito" className="cart-btn">
        <span className="cart-container">
          <FaFacebook />
        </span>
      </a>
      <a href="/carrito" className="cart-btn">
        <span className="cart-container">
          <FaInstagram />
        </span>
      </a>
      <a href="/carrito" className="cart-btn">
        <span className="cart-container">
          <FaWhatsapp />
        </span>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin: 0 2rem;
  width: auto;
  .cart-btn {
    margin: 0 .5rem;
    background: var(--clr-primary-1);
    color: var(--clr-primary-10);
    transition: var(--transition);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    display: flex;
    border-radius: 50%;
    align-items: center;
  }
  .cart-btn:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-7);
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
  }
`;
export default RedesButton;
