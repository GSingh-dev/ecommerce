import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1); /* Slight enlargement */
  }
`;

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
  transition: transform 0.2s ease-in-out;

  ${CartIconContainer}:hover & {
    transform: scale(1.2); /* Slight scaling effect */
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  margin-top: 7px;
  
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;

  ${CartIconContainer}:hover & {
    transform: scale(1.1); /* Slight pop-out effect */
  }
`;
