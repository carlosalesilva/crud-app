import React from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/esm/Table';
import dados from '../../data/dados'
import './index.css';
import { Link } from 'react-router-dom';



function getLinhas() {
  return dados.map(dados =>{
    return(
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
      <h1>Notas</h1>
      <Link to='/tarefas_cadastro'>
      <Button variant='dark' size="sm">Nova Nota +</Button>
      </Link>
      </div>
      <br />
      <Table striped bordered hover className='text-center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        {getLinhas()}
        </tbody>
      </Table>
    </div>
  );
}

export default Task;