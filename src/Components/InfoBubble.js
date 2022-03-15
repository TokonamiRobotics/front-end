import React from "react";
import PropTypes from "prop-types";
import { Alert, Card, Button, Row } from "react-bootstrap";
import { login, logout } from "../utils";

const InfoBubble = (props) => {
  return (
      <Row className='d-flex justify-content-center'>
        <Button
          style={{ width: "280px", "margin-left":'25px' }}
          onClick={window.walletConnection.isSignedIn() ? logout : login}
        >
          {window.walletConnection.isSignedIn() ? window.accountId : "Login"}
        </Button>
      </Row>
  );
};

InfoBubble.propTypes = {};

export default InfoBubble;
