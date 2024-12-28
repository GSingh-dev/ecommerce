// import styled from "styled-components";

// export const BackgroundImage = styled.div`
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-position: center;
//   background-image: ${({img})=>`url(${img})`};
// `;

// export const Body = styled.div`
//   height: 90px;
//   padding: 0 25px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid black;
//   background-color: white;
//   opacity: 0.7;
//   position: absolute;

//   h2 {
//     font-weight: bold;
//     margin: 0 6px 0;
//     font-size: 22px;
//     color: #4a4a4a;
//   }

//   p {
//     font-weight: lighter;
//     font-size: 16px;
//   }
// `;

// export const DirectoryItemContainer = styled.div`
//     min-width: 30%;
//     height: 240px;
//     flex: 1 1 auto;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border: 1px solid black;
//     border-radius: 2%;
//     margin: 0 7.5px 15px;
//     overflow: hidden;
  
//     &:hover {
//       cursor: pointer;
  
//       & ${BackgroundImage} {
//         transform: scale(1.1);
//         transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//       }
  
//       & ${Body} {
//         opacity: 0.9;
//       }
//     }
  
//     &.large {
//       height: 380px;
//     }
  
//     &:first-child {
//       margin-right: 7.5px;
//     }
  
//     &:last-child {
//       margin-left: 7.5px;
//     }
// `;

import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ img }) => `url(${img})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 2%;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  /* Responsive for tablet screens and up */
  @media (max-width: 1200px) {
    min-width: 45%;
    height: 280px;
  }

  /* Responsive for mobile screens and up */
  @media (max-width: 768px) {
    min-width: 90%;
    height: 200px;
  }

  /* Very small screens */
  @media (max-width: 480px) {
    height: 180px;

    & ${Body} {
      padding: 0 15px;
    }

    & ${Body} h2 {
      font-size: 18px;
    }

    & ${Body} p {
      font-size: 14px;
    }
  }
`;
