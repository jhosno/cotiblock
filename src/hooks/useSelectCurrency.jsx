import React, { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: aliceblue;
  padding: 0.5rem;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 0.5rem;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto;
  width: 100%;
`;

const useSelectCurrency = (label, options) => {
  const [state, setState] = useState("");
  const SelectCurrency = () => {
    return (
      <FormGroup>
        <Label>{label}</Label>
        <Select
          name=""
          id=""
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="">Selecciona</option>
          {options.map((option) => (
            <option value={option.id} key={option.id}>
              {option.name}
            </option>
          ))}
        </Select>
      </FormGroup>
    );
  };
  return [state, SelectCurrency];
};

export default useSelectCurrency;
