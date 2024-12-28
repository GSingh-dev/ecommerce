import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), 
              box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), 
              background 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  perspective: 800px;
  background: linear-gradient(145deg,white, #ffffff);
  border-radius: 10px;

  &:hover {
    transform: rotateY(10deg) rotateX(8deg) scale(1.05);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
    background: linear-gradient(145deg, #ffffff, #f3f3f3);
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 15px 20px;
  cursor: pointer;
  position: relative;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), 
              color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  perspective: 800px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #9F8170;
    transition: width 0.2s ease, left 0.2s ease;
    transform: translateX(-50%);
  }

  &:hover {
    transform: translateY(-3px) scale(1.03);
    color: #592720;

    &::after {
      width: 100%;
      left: 0;
    }
  }
`;
