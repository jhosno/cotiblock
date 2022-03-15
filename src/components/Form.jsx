import React, { useEffect, useState } from "react";
import useSelectCurrency from "../hooks/useSelectCurrency";
import styled from "@emotion/styled";
import { currency } from "../data/currency";
import Alert from "./Error";

const InputBtn = styled.input`
  background-color: #9497ff;
  height: 2rem;
  width: 100%;
  padding: 1rem auto;
  color: aliceblue;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  border: none;

  &:hover {
    background-color: #747dfe;
    cursor: pointer;
  }
`;

const Form = ({ setCurrencies }) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  const [currencyState, SelectCurrency] = useSelectCurrency(
    "Selecciona tu moneda",
    currency
  );
  const [cryptoState, SelectCrypto] = useSelectCurrency(
    "Selecciona tu crypto",
    cryptos
  );
  useEffect(() => {
    const getAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const response = await fetch(url);
      const result = await response.json();

      const arrayCriptos = result.Data.map((crypto) => {
        const coinOption = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };
        return coinOption;
      });
      setCryptos(arrayCriptos);
    };
    getAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([currencyState, cryptoState].includes("")) {
      setError(true);
      return;
    }
    setCurrencies({
      currencyState,
      cryptoState,
    });
    setError(false);
  };
  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <SelectCurrency />
      <SelectCrypto />

      {error ? <Alert type="0">Todos los campos son obligatorios</Alert> : null}
      <InputBtn type="submit" value="enviar" />
    </form>
  );
};

export default Form;
