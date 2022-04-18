import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import { login, logout } from "./utils";

// React Bootstrap css
import "./bootstrap.min.css";

// React Bootstraps imports
import { Nav, Navbar, Container, Row, Col, Card, Alert } from "react-bootstrap";

// Custom Components
import MintingTool from "./Components/MintingTool";
import MintModal from "./Components/MintModal";

//assets
import backgroundImg from "./assets/bgImage.jpg";
import logoImg from "./assets/logo.png";

import getConfig from "./config";

const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get('transactionHashes');
  
  let openModal = code === null

  useEffect(() => {
    setModalOpen(!openModal);
  })

  return (
    
    <>
      <div style={{
        height: "100vh", width: "100vw", margin: "0", padding: "0", display: "box",
        backgroundImage: `url("${backgroundImg}")`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        // backgroundSize: "cover",
        backgroundSize: "100% 100%"
      }}>
        <Container style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>

          <Row className="gx-0 d-flex justify-content-center" style={{marginTop: "5vh", width: "100vw"}}>
            <Col xs={12} lg={6}>

            </Col>
            <Col xs={12} lg={3} className="d-flex justify-content-center">
              <img src={logoImg} style={{width: "40vw"}}/>
            </Col>
            <Col xs={12} lg={3}>
              
            </Col>
          </Row>
          <Row style={{"justifyContent":"center", "marginTop":"50px"}}>
  
          </Row>
          <Row className="gx-0" style={{ marginTop: "3vh", width: "100vw" }}>
            <Col xs={12} lg={6}>

            </Col>
            <Col xs={12} lg={3}>
              <MintingTool />
            </Col>
            <Col xs={12} lg={3}>
              
            </Col>
          </Row>
        </Container>
      </div>
      <MintModal open={modalOpen} closeModal={() => setModalOpen(false)}/>
    </>
  );
}
