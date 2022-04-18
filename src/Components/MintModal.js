import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "react-bootstrap";

const MintModal = (props) =>  {

    const {open, closeModal} = props;

    return (
        <Modal show={open} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>New NFT!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>
                    Congratulations! You just minted an exclusive Tokonami NFT
                </p>
                <p>
                    To see your Tokonami NFTs, head over to the collectibles tab in your
                    wallet at this link: <a href={"https://wallet.testnet.near.org/"} target="_blank" rel="noopener noreferrer">Wallet</a> 
                </p>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={closeModal} variant="secondary">Close</Button>
            </Modal.Footer>
        </Modal>
    );
 
}

export default MintModal;