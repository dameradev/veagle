import styled from "styled-components";

export const HeaderStyles = styled.header`
  background-color: #923959;
  padding: 0 5%;
  width: 100%;
  height: 8rem;
  /* margin: 0; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    color: #fff;
    font-size: 2.6rem;
    text-transform: capitalize;
  }

  .nav {
    li {
      a {
        color: #fff;
      }
    }
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
  }
`;
