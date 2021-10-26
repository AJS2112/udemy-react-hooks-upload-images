import React, { useState } from 'react';
import './upload.css';
import {
  Button, Form, Image, Modal, Spinner
} from 'react-bootstrap';
import axios from 'axios';

function Upload() {
  return (
    <div>
      <h3 className="text-center">Upload de imagens</h3>
      <div class="container-fluid py-5">
        <Form noValidate>
          <Form.Group>
            <Form.Label>Selecione a imagem (PNG ou JPEG)</Form.Label>
            <Form.Control type="file" accept="image/png, image/jpeg" />
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              variant="success"
              type="submit">
              <span>Fazer upload</span>
            </Button>
          </Form.Group>
          <Form.Group>
            <Spinner animation="border" />
          </Form.Group>
        </Form>
      </div>
      <div>
        <hr />
        <a href="" target="_blank">
          <Image src={""} thumbnail />
          <br />
          {/* url em texto */}
        </a>
      </div>
      <Modal show={false}>
        <Modal.Header closeButton>
          <Modal.Title>Erro ao fazer o upload da imagem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Nao foi possivel fazer o upload da imagem, tente novamente em instantes
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning">Fechar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Upload;
