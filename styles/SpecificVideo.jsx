import styled from "styled-components";
import { Flex } from "./CommonStyles";

export const SpecificVideoWrapper = styled(Flex)`
  padding: 24px;
  gap: 20px;
  .videoDetails {
    width: 70%;
  }
  .leadFormWrapper {
    width: 30%;
    .leadForm {
      margin-top:30px;
      position: sticky !important;
      top: 20px;
      right: 0;
      width: 100%;
    }
  }
  .qa-item {
    border-width: 0px;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: rgb(209 213 219);
    margin-top: 20px;
  }
  .question-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  .question{
    margin-top:5px;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    .videoDetails {
      width: 100%;
    }
    .leadFormWrapper {
      width: 100%;
    }
    .leadForm {
      display: none;
    }
    
  }

  .h1{
    margin-top: 3%;
  }
  .h3{
    font-size: 20px;
    font-weight: 700;
  }
  /* PC Screen */
  @media only screen and (min-width: 1024px) {
    .h1{
      font-size: 45px;
      font-weight: 700;
    }
    .h2{
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 0.1em;
    }
  }

  /* Tablet screens */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .h1{
      font-size: 30px;
      font-weight: 700;
    }
    .h2{
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 0.1em;
    } 
  }

  /* Mobile screens */
  @media only screen and (max-width: 767px) {
    .h1{
      font-size: 25px;
      font-weight: 700;
    }
    .h2{
      font-size: 23px;
      font-weight: 700;
      letter-spacing: 0.025em;
    }
    .h3{
      font-size: 17px;
      font-weight: 600;
    } 
  }
`;

export const BookAppointmentFixedbar = styled(Flex)`
  position: fixed;
  bottom: 55px;
  padding: 15px;
  background: #000;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  color: white;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 472px) {
    display: none;
  }
`;