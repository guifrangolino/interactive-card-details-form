import { CardContainer, Container, CardForm, CardInfoData, Button, CompleteState } from "./styles/App"
import cardLogo from './assets/images/card-logo.svg'
import iconComplete from './assets/images/icon-complete.svg'
import { useState } from "react"

function App() {

  const [cardName, setCardName] = useState('')
  const [cardNameValid, setCardNameValid] = useState(true)
  const [cardNumber, setCardNumber] = useState('')
  const [cardNumberValid, setCardNumberValid] = useState(true)
  const [cardExpMonth, setCardExpMonth] = useState('')
  const [cardExpYear, setCardExpYear] = useState('')
  const [cardExpValid, setCardExpValid] = useState(true)
  const [cardCvc, setCardCvc] = useState('')
  const [cardCvcValid, setCardCvcValid] = useState(true)
  const [cardDataValid, setCardDataValid] = useState(false)

  function formValidation() {
    if (!/^[a-zA-Z]+$/.test(cardName.replaceAll(' ', '').normalize("NFD").replace(/[\u0300-\u036f]/g, "")) || cardName === '') {
      return setCardNameValid(false)
    }
    setCardNameValid(true)

    if (!cardNumber.replaceAll(' ', '').match(/^[0-9]*$/g) || cardNumber === '') {
      return setCardNumberValid(false)
    }
    setCardNumberValid(true)

    if (cardExpMonth === '' || cardExpYear === '') {
      return setCardExpValid(false)
    }
    setCardExpValid(true)
    
    if (cardCvc === '') {
      return setCardCvcValid(false)
    }
    setCardCvcValid(true)

    if (cardNameValid == true && cardNumberValid == true && cardExpValid == true && cardCvcValid == true) {
      setCardDataValid(true)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    formValidation()
    
  }


  return (
    <Container>

      <CardContainer>
        <div className="cardFront">
          <img className="cardLogo" src={cardLogo} alt="" />
          <div className="card-image-data">
            <label className="card-number" htmlFor="card-number">{cardNumber === '' ? '0000 0000 0000 0000' : cardNumber}</label>
            <div className="card-name-exp">
              <label className="card-name" htmlFor="card-name">{cardName === '' ? 'Jane Appleseed' : cardName.toUpperCase()}</label>
              <label className="card-exp" htmlFor="card-exp-month">{cardExpMonth === '' ? '00' : cardExpMonth}/{cardExpYear === '' ? '00' : cardExpYear}</label>
            </div>
          </div>
        </div>
        <div className="cardBack">
          <label className="card-cvc" htmlFor="card-cvc">{cardCvc === '' ? '000' : cardCvc}</label>
        </div>
      </CardContainer>

      {cardDataValid === true ? 
        <CompleteState>
          <img src={iconComplete} alt="" />
          <h1>THANK YOU!</h1>
          <span>We've added your card details</span>
          <Button onClick={() => {
            setCardDataValid(false)
            setCardName('')
            setCardNumber('')
            setCardExpMonth('')
            setCardExpYear('')
            setCardCvc('')
          }}>Continue</Button>
        </CompleteState>
      :
        <CardForm onSubmit={handleSubmit}>

          <CardInfoData>
            <label htmlFor="card-name">CARDHOLDER NAME</label>
            <input className={cardNameValid ? '' : 'nameError'} onChange={(e) => setCardName(e.target.value)} type="text" name="card-name" id="card-name" value={cardName} maxLength={26} placeholder="e.g. Jane Appleseed" autocomplete="off" />
            <span style={cardNameValid ? {} : {display: "block"}} className="errorMessage">Enter a valid value!</span>
          </CardInfoData>

          <CardInfoData>
            <label htmlFor="card-number">CARD NUMBER</label>
            <input className={cardNumberValid ? '' : 'numberError'} onChange={(e) => setCardNumber(e.target.value)} value={cardNumber.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim()} maxLength={19} type="text" name="card-number" id="card-number" placeholder="e.g. 1234 5678 9123 0000" />
            <span style={cardNumberValid ? {} : {display: "block"}} className="errorMessage">Enter a valid value!</span>
          </CardInfoData>

          <div className="card-exp-cvc">
            <CardInfoData width='50%'>
              <label htmlFor="card-exp-month">EXP. DATE (MM/YY)</label>
              <div className="card-exp-input">
                <input className={cardExpValid ? '' : 'expError'} onChange={(e) => setCardExpMonth(e.target.value)} type="number" value={cardExpMonth} name="card-exp-month" id="card-exp-month" min="1" max="12" placeholder="MM" />
                <input className={cardExpValid ? '' : 'expError'} onChange={(e) => setCardExpYear(e.target.value)} type="number" value={cardExpYear} name="card-exp-year" id="card-exp-year" min="1" max="99" placeholder="YY" />
              </div>
              <span style={cardExpValid ? {} : {display: "block"}} className="errorMessage">Enter a valid value!</span>
            </CardInfoData>
            <CardInfoData width='50%'>
              <label htmlFor="card-cvc">CVC</label>
              <input className={cardCvcValid ? '' : 'cvcError'} onChange={(e) => setCardCvc(e.target.value)} type="number" min="1" max="999" name="card-cvc" id="card-cvc" placeholder="e.g. 123" />
              <span style={cardCvcValid ? {} : {display: "block"}} className="errorMessage">Enter a valid value!</span>
            </CardInfoData>
          </div>

          <input type="submit" value="Confirm" />

        </CardForm>
      }

    </Container>
  )
}

export default App
