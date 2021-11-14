import styled from "styled-components";

export const Button = styled.button`
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: white;
  display: flex;
  font-family: Lato, sans-serif;
  font-size: ${(props) => (props.icon ? "20px" : "24px")};
  justify-content: center;
  line-height: 1em;
  max-width: ${(props) => (props.icon ? "50%" : "100%")};
  min-width: ${(props) => (props.icon ? "2px" : "140px")};
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    outline: 0;
  }
  @media (min-width: 768px) {
    font-size: ${(props) => (props.icon ? "40px" : "24px")};
    min-width: ${(props) => (props.icon ? "20px" : "196px")};
  }

  & span {
    background-color: rgb(5, 6, 45);
    padding: ${(props) => (props.icon ? "4px 4px" : "16px 24px")};
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
    &:hover {
      background: none;
    }
  }
`;

export const BtnMin = styled.span`
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: white;
  display: flex;
  font-family: Lato, sans-serif;
  justify-content: center;
  line-height: 1em;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    outline: 0;
  }

  & span {
    background-color: rgb(5, 6, 45);
    padding: ${(props) => (props.icon ? "4px 4px" : "16px 24px")};
    width: 100%;
    height: 100%;
    transition: 300ms;
    &:hover {
      background: none;
    }
  }
`;
