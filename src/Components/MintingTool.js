import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Card, Container, Row, Alert } from "react-bootstrap";
import { keys } from "regenerator-runtime";

import trmeta from "../Metadata";

const BN = require("bn.js");

const MintingTool = (props) => {
  const mintNFT = async () => {
    await window.contract.nft_mint(
      {
        token_id: `${window.accountId}-TRR`,
        metadata: {
          title: "Tokonami Robotics",
          description: "Tokonami to the Moon",
          media:
            "https://bafkreiffaqv36xegj2lkdlhynzwz2gbpuaqj4jrvtvpxlzm5yh2k4lcik4.ipfs.dweb.link",
        },
        receiver_id: window.accountId,
      },
      300000000000000, // attached GAS (optional)
      new BN("1000000000000000000000000")
    );
  };

  const openWallet = () => {
    window.open("https://wallet.testnet.near.org/", '_blank').focus();
  }

  return (
      <Container>
        <Row className='d-flex justify-content-center'>
          <Button
            disabled={props.userNFTStatus || window.accountId === ""}
            onClick={mintNFT}
            style={{ "width": "280px", "margin-bottom":"20px"}}
          >
            Mint NFT
          </Button>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Button
            onClick={openWallet}
            style={{ "width": "280px"}}
          >
            My Wallet
          </Button>
        </Row>
        <Row className='d-flex justify-content-center'>
          {console.log(props.userNFTStatus)}
          {props.userNFTStatus ? (
            <Alert variant='danger' style={{ marginTop: "2vh" }}>
              <p style={{ textAlign: "center" }}>
                You have an NFT already. You can see it{" "}
                <a href={"https://wallet.testnet.near.org/?tab=collectibles"}>
                  here!
                </a>
                :)
              </p>
            </Alert>
          ) : null}
        </Row>
      </Container>
  );
};

MintingTool.propTypes = {};

export default MintingTool;
