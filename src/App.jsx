import { useState, useEffect } from "react";
import Form from "./components/Form";
import styled from "@emotion/styled";
import cloudCoin from "./assets/bc-side.png";
import Quoation from "./components/Quoation";
import Spinner from "./components/Spinner";


const Heading = styled.h1`
  font-family: "Open Sans", sans-serif;
  color: #9dbddb;
  &::after {
    content: "";
    width: 8rem;
    height: 0.1rem;
    background: indigo;
    display: block;
    margin: 1rem auto;
  }
`;
const Img = styled.img`
  max-width: 100%;
  width: 45rem;
  height: auto;
`;
const Container = styled.section`
  margin: 0;
  padding: 3rem;
  display: grid;
  grid-template-columns: 45% 55%;
  justify-content: space-around;
  justify-items: center;
  align-content: center;
  height: 82vh;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    align-content: flex-start;
    columns-grip: 1rem;
    grid-templates-rows: 45% 55%;
  }
`;
const LeftSide = styled.div`
  max-width: 50%;
  width: 52vw;
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  align-items: center;
`;

function App() {
  const [currencies, setCurrencies] = useState({});
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState(true);

  useEffect(() => {
    if (Object.keys(currencies).length > 0) {
      const cotizarCrypto = async () => {
        setLoading(true)
        setImg(false)
        setResult({})
        const { currencyState, cryptoState } = currencies;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoState}&tsyms=${currencyState}`;
        
        const response = await fetch(url);
        const result = await response.json();
        setResult(result.DISPLAY[cryptoState][currencyState]);
        setLoading(false)
      };
      cotizarCrypto();
    }
  }, [currencies]);

  return (
    <Container className="App">
      <LeftSide>
        <Heading>Cotiza tus cryptos </Heading>
        <Form setCurrencies={setCurrencies} />
      </LeftSide>
      
      {loading && <Spinner/>}
      {result.PRICE &&(
        <Quoation result={result} />
      ) 
    }
      {img && (
        <Img
          src={cloudCoin}
          alt="Conoce elprecio de tus cryptos a precio real"
        />
      )}
    </Container>
  );
}

export default App;
