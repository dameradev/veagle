import styled from "styled-components";

export const HomepageBannerStyles = styled.section`
  max-height: calc(100vh - 80px);

  .gatsby-image-wrapper {
    max-height: inherit;
    overflow: hidden;

    /* position: absolute; */
    &::after {
      content: "";
      background: #000;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0.4;
    }
  }

  .banner {
    &__title {
      z-index: 100;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;

      font-size: 5.4rem;
      width: fit-content;
      text-transform: capitalize;
    }
  }
`;
