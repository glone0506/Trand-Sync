import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4>모달 내용</h4>
        <p>여기에서 로그인 정보를 입력하거나 다른 작업을 할 수 있습니다.</p>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
