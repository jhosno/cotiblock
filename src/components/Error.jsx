import styled from "@emotion/styled";
import React from "react";
import { alert } from "../data/alerts";


const Error = ({ type, children }) => {
  
  const Notification = styled.div`
    background-color: ${alert[type]["color"]};
    color: ;
    border-radius: 15px;
    padding: 1rem;
    margin-bottom: 1rem;
  `;
  return (
    <Notification>
      {console.log(alert)}
      {alert[type]["signal"]}{" "}{children}
    </Notification>
  );
};

export default Error;
