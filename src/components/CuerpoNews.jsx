import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const EjemploModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a variant="primary" onClick={handleShow} style={{cursor: "pointer"}}>
        <img
          src={props.media}
          alt=""
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns=""
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        />
        <div className="card-body">
          <h3>{props.clean_url}</h3>
          <p className="card-text">{props.titleN}</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">
              {props.published_date}
            </small>
          </div>
        </div>
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{padding:"1px 1px 1px 1px"}}>
          <Modal.Title>
          <img
          src={props.media}
          alt=""
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns=""
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        />
            <h2>{props.titleM}</h2>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body><b>{props.summary}</b></Modal.Body>
      </Modal>
    </>
  );
};

export default EjemploModal;