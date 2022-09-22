import React from 'react';
import Table from 'react-bootstrap/esm/Table';
import { Link } from 'react-router-dom';
import dados from '../../../data/dados'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function getLinhas() {
  return dados.map(dados => {
    return (
      <tr>
        <td>{dados.id}</td>
        <td>{dados.titulo}</td>
        <td>{dados.descricao}</td>
        <td>
          <Button size='sm'>Editar</Button>{' '}
          <Button size='sm' variant="info">Visualizar</Button>{' '}
          <Button size='sm' variant="danger">Remover</Button>{' '}
        </td>
      </tr>
    )
  })
}

const Task: React.FC = () => {
  return (
    <div className='container'>
      <br />
      <div className='task-header'>
        <h1>Nova Nota</h1>
        <Link to='/tarefas'>
          <Button variant='dark'>Voltar</Button>
        </Link>
      </div>
      <br />
      <div className='container'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" placeholder="Digite o título..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Descrição</Form.Label>
            <Form.Control type="text" placeholder="Digite a descrição..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Conteúdo</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </Form>

      </div>
    </div>
  );
}

export default Task;