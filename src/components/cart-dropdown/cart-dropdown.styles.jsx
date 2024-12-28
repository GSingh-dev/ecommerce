// import styled from "styled-components";
// import { BaseButton,GoogleSignInButton,InvertedButton } from "../button/button.styles";

// export const CartDropdownContainer = styled.div`
//   position: absolute;
//   width: 20%;
//   height: 400px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;

// ${ BaseButton},${GoogleSignInButton},${InvertedButton }{
//     margin: auto;
//     height: auto;
//   }
// `;

// export const EmptyMessage = styled.span`
//   font-size: 18px;
//   margin: 50px auto;
// `;


// export const CartItems = styled.div`
//   height: 340px;
//   display: flex;
//   flex-direction: column;
//   overflow: auto;
//   margin-bottom: 10px;
// `;


import styled from "styled-components";
import { BaseButton, GoogleSignInButton, InvertedButton } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 20%;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  box-sizing: border-box; /* Ensure padding is included in the width/height calculation */

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    margin: auto;
    height: auto;
  }

  /* For tablets and smaller screens */
  @media (max-width: 1024px) {
    width: 30%; /* Adjust width for tablets */
    height: 350px; /* Adjust height */
    right: 20px; /* Reduce the right offset */
    top: 80px; /* Adjust the top offset */
  }

  /* For mobile screens */
  @media (max-width: 768px) {
    width: 60%; /* Increase width to take more space on smaller screens */
    height: 300px; /* Adjust height */
    right: 10px; /* Adjust the right offset */
    top: 70px; /* Adjust the top offset */
    padding: 15px; /* Reduce padding on mobile */
  }

  /* For very small screens (phones) */
  @media (max-width: 480px) {
    width: 80%; /* Take more space on smaller screens */
    height: 250px; /* Further reduce height */
    right: 5px; /* Adjust the right offset */
    top: 60px; /* Adjust the top offset */
    padding: 10px; /* Reduce padding */
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;

  /* For mobile and smaller screens, reduce font size */
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CartItems = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-bottom: 10px;

  /* For mobile screens, reduce height */
  @media (max-width: 768px) {
    height: 250px;
  }
`;
