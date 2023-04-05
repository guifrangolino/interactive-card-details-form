import styled, { keyframes } from "styled-components";
import cardFront from '../assets/images/bg-card-front.png'
import cardBack from '../assets/images/bg-card-back.png'

const entranceAnim = keyframes`
  0% {
      transform: scale(0.5);
  }

	100% {
		transform: scale(1);
	}
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 110px;
  width: 100%;

  @media (max-width: 1250px) {
    gap: 35px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 15px;
  }
`

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 550px;

  .cardFront {
    position: relative;
    background-image: url(${cardFront});
    background-size: contain;
    background-repeat: no-repeat;
    width: 450px;
    height: 250px;


    .cardLogo {
      position: absolute;
      left: 30px;
      top: 30px;
      width: 19%;
    }
    
    .card-image-data {
      position: absolute;
      width: 100%;
      height: 33%;
      top: 55%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      letter-spacing: 2px;
      padding: 0 25px;
      
      .card-number {
        font-size: 28px;
        font-weight: 500;
        letter-spacing: 4px;
      }

      .card-name-exp {
        font-weight: 500;
        width: 100%;
        margin-top: auto;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
      }
    }
  }

  .cardBack {
    position: relative;
    background-image: url(${cardBack});
    background-size: contain;
    background-repeat: no-repeat;
    width: 450px;
    height: 250px;
    align-self: flex-end;

    .card-cvc {
      position: absolute;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 2px;
      color: white;
      right: 60px;
      top: 112px;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 0;
    width: 380px;

    .cardFront, .cardBack {
      width: 320px;
      height: 177px;
      border-radius: 5px;
    }

    .cardFront {
      z-index: 1;
      top: -76px;

      .cardLogo {
        left: 20px;
        top: 20px;
      }
    
      .card-image-data {
        .card-number {
          font-size: 16px;
        }

        .card-name-exp {
          text-transform: uppercase;
          font-size: 10px;
        }
      }
    }

    .cardBack {
      .card-cvc {
        font-size: 12px;
        font-weight: 500;
        right: 48px;
        top: 78px;
      }
    }

  }

  @media (max-width: 450px) {
    width: 320px;

    .cardFront, .cardBack {
      width: 270px;
      height: 149px;
    }

    .cardFront {
      top: -64px;

      .cardLogo {
        left: 18px;
        top: 20px;
      }
    
      .card-image-data {
        padding: 0 15px;
        
        .card-number {
          font-size: 14px;
        }

        .card-name-exp {
          font-size: 8px;
        }
      }
    }

    .cardBack {
      .card-cvc {
        font-size: 12px;
        right: 40px;
        top: 66px;
      }
    }
  }

`

export const CardForm = styled.form`
  width: 390px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${entranceAnim} .3s ease 0s 1 normal forwards;

  @media (max-width: 1000px) {
    margin-top: -45px;
    width: 100%;
  }

  .card-exp-cvc {
    display: flex;
    width: 100%;
  }

  input[type='submit'] {
    width: 100%;
    color: white;
    background: hsl(278, 68%, 11%);
    border-radius: 5px;
    padding: 10px;
    font-size: 20px;
    margin-top: 15px;
    cursor: pointer;

    &:hover {
      opacity: .95;
    }

    @media (max-width: 450px) {
      width: 95%;
      margin: auto;
      margin-bottom: 15px;
    }
  }
`

export const CardInfoData = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  width: ${props => props.width || '100%'};
  position: relative;

  @media (max-width: 450px) {
    align-items: center;
  }
  
  label {
    color: hsl(278, 68%, 11%);
    letter-spacing: 2px;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 5px;

    @media (max-width: 450px) {
      align-self: flex-start;
    }
  }

  input {
    border: 2px solid hsl(270, 3%, 87%);
    outline: none;
    font-weight: 500;
    font-size: 18px;
    color: hsl(278, 68%, 11%);
    border-radius: 5px;
    padding: 10px;

    &:focus {
      border-color: hsl(278, 94%, 30%);
    }

    &:not(:placeholder-shown) {
      border-color: hsl(278, 94%, 30%);
    }

    @media (max-width: 450px) {
      width: 95%;
    }
  }

  .errorMessage {
    color: #FF0000;
    font-size: 14px;
    font-weight: 500;
    position: absolute;
    bottom: -20px;
    display: none;
  }

  .nameError, .numberError, .expError, .cvcError {
    border-color: #FF0000;
    position: relative;

    &:focus {
      border-color: #FF0000;
    }

    &:not(:placeholder-shown) {
      border-color: #FF0000;
    }
  }

  .card-exp-input {
    display: flex;
    gap: 10px;

    input {
      width: 40%;
    }
  }
`

export const Button = styled.button`
  width: 100%;
  color: white;
  background: hsl(278, 68%, 11%);
  border-radius: 5px;
  padding: 15px;
  font-size: 20px;
  margin-top: 15px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    opacity: .95;
  }

  @media (max-width: 450px) {
    width: 90%;
  }

`

export const CompleteState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 400px;
  animation: ${entranceAnim} .3s ease 0s 1 normal forwards;

  h1 {
    color: hsl(278, 68%, 11%);
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 32px;
  }

  span {
    color: hsl(279, 6%, 55%);
  }
`