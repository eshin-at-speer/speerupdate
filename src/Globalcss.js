import { createGlobalStyle } from "styled-components";


const Globalcss = createGlobalStyle`
  :root{
      --Primary-color: #2EC5CE;
      --Primary-color-regular: #75E3EA;
      --Primary-color-light: #D5FAFC;
      --default-black:#0B0D17;
      --Seconday-color:#F22BB2;
      --Seconday-color-light:#FF72D2;
      --Black-900:#18191F;
      --Black-800:#474A57;
      --Black-700:#969BAB;
      --Black-300:#D9DBE1;
      --Header-big:7.2rem;
      --Header-Medium:4.8rem;
      --Header-Small:4rem;
      --Header-VerySmall:2.8rem;
      --Subtitle-regular:1.8rem;
      --body-regualr:1.6rem;
      --body-small:1.4rem;
  }
 *,html,body{
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
`;

export default Globalcss