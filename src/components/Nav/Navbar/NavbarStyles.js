import styled from "styled-components"

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .5rem;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #e1e1e1;
  position: fixed;
  top: 0vh;
  top: ${props => (props.open ? "10vh" : "-100%")};
  width: 100%;
  z-index: 9999;
  transition: top 0.4s linear;

  a {
    padding: 1rem 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    gap: .5rem;
    font-size: .9rem;
    color: #363636 !important;
    text-transform: uppercase;
    font-weight: 700;
    transition: all 0.5s !important;
    border-bottom: 1px solid #e1e1e1;

    .icon {
      display: block;
    }
  }

  a:hover {
    color: #c7b300 !important;
  }

  a.active {
    color: #c7b300 !important;
  }

  button {
    border: none;
    background: transparent;
  }

  .logged-in-menu {
    display: flex;
  }

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: transparent;
    border-bottom: none;

    a {
      padding: 1rem 2rem;
      font-size: 1.1rem;
      text-decoration: none;
      text-transform: Capitalize;
      justify-content: center;
      width: auto;
      color: #ffffff !important;
      border-bottom: none;

      .icon {
        display: none;
      }
    }
  }
` 