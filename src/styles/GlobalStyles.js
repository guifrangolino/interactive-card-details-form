import { createGlobalStyle } from 'styled-components'
import desktopBackground from '../assets/images/bg-main-desktop.png'
import mobileBackground from '../assets/images/bg-main-mobile.png'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
  }
  
  body {
    background-image: url(${desktopBackground});
    background-repeat: no-repeat;
    background-size: 33% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-size: 18px;

    @media (max-width: 1000px) {
      background-image: url(${mobileBackground});
      background-size: 100% 225px;
      align-items: flex-start;
      padding-top: 20px;
    }
  }
`