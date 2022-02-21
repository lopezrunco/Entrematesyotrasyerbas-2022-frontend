import styled from "styled-components"

export const HeaderWrapper = styled.header`
  position: relative;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 1px solid #e1e1e1;
  align-items: center;
  color: #ececec;
  z-index: 9999;
  
  @media only screen and (min-width: 992px) {
    position: fixed;
    width: 100%;
    background-color: #00000047;
    border-bottom: none;
  }
  `