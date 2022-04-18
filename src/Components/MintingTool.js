import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Button, Card, Container, Row, Alert } from "react-bootstrap";
import { keys } from "regenerator-runtime";
import { parseNearAmount } from "near-api-js/lib/utils/format";

import { login, logout } from "../utils";

import trmeta from "../Metadata";



const MintingTool = (props) => {

  const [wlMessage, setWlMessage] = useState("You have to connect to be able to mint");
  const [totalSupply, setTotalSupply] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      if (wlMessage === "You have to connect to be able to mint" && window.walletConnection.isSignedIn()) {
        let wlQuantity = await window.contract.is_whitelist({account_id: window.accountId});
        setWlMessage(`Time to mint your Tokonami collection!`)
      }
      setTotalSupply(await window.contract.nft_total_supply({}))
    }
    fetchData();
  })

  const mintNFT = async () => {
    await window.contract.nft_mint(
      {
        quantity: "1"
      },
      300000000000000, // attached GAS (optional)
      parseNearAmount("7.1")
    );
  };

  const logoutCall = () => {
    logout();
    setWlMessage("You have to connect to be able to mint");
  }

  return (
      <Container>
        <Row className='d-flex justify-content-center align-items-center'>
          <div className="text-center" style={{color: "grey", marginBottom: "20px", fontWeight: "bold"}}>{wlMessage}</div>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Button
            style={{ width: "280px", height: "75px", fontSize: "1.25rem",
             "marginBottom":'20px', borderRadius: "15px",
             backgroundColor: "grey", color: "black", border: "0" }}
            onClick={window.walletConnection.isSignedIn() ? logoutCall : login}
          >
            {window.walletConnection.isSignedIn() ? window.accountId : "CONNECT"}
          </Button>
        </Row>
        
        <Row className='d-flex justify-content-center'>
          <Button
            disabled={props.userNFTStatus || window.accountId === ""}
            onClick={mintNFT}
            style={{ width: "280px", height: "75px", fontSize: "1.25rem",
            "marginBottom":'20px', borderRadius: "15px",
            backgroundColor: "grey", color: "black", border: "0"}}
          >MINT
          </Button>
        </Row>
        <Row className='d-flex justify-content-center align-items-center'>
          <div className="text-center" style={{color: "grey", fontWeight: "bold"}}>{totalSupply}/2331 MINTED</div>
        </Row>
      </Container>
  );
};

MintingTool.propTypes = {};

export default MintingTool;
