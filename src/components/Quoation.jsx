import styled from "@emotion/styled";
import React from "react";

const Content = styled.section`
  display: flex;
  justify-content: center;
`;
const Price = styled.p`
  font-size: 2rem;
  spam {
    font-weight: bold;
  }
`;

const Heading = styled.h2`
  font-family: "Open Sans", sans-serif;
  color: #9dbddb;
  align-self: center; 
  &::after {
    content: "";
    width: 8rem;
    height: 0.1rem;
    background: indigo;
    display: block;
    margin: 1rem auto;
  }
`;

const Quoation = ({ result }) => {
  const {
    PRICE,
    IMAGEURL,
    FROMSYMBOL,
    TOSYMBOL,
    LOWDAY,
    HIGHDAY,
    LASTUPDATE,
    CHANGEPCT24HOUR,
  } = result;
  const imgurl = `https://www.cryptocompare.com${IMAGEURL}`;
  return (
    <div>
      <Heading>
        Precio del {FROMSYMBOL} en {TOSYMBOL}
      </Heading>
      <img src={imgurl} alt={FROMSYMBOL} />
      <Price>
        Precio actual:
        <spam> {PRICE}</spam>
      </Price>
      <div>
        <p>
          Precio más alto del día:
          <spam> {HIGHDAY}</spam>
        </p>
        <p>
          Precio más bajo del día:
          <spam> {LOWDAY}</spam>
        </p>
        <p>
          Última actualización del día:
          <spam> {LASTUPDATE}</spam>
        </p>
        <p>
          Cambios de las últimas 24h:
          <spam> {CHANGEPCT24HOUR}</spam>
        </p>
      </div>
    </div>
  );
};

export default Quoation;
