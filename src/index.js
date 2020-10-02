// Importa o react
import React from 'react';
// Renderiza o primeiro elemento dentro a DOM
import ReactDOM from 'react-dom';
import Primeiro from './components/Primeiro'


ReactDOM.render(
  <Primeiro />,
  document.getElementById('root')
)

// $('h1').html('React 2') [Algo semelhante ao JSX]