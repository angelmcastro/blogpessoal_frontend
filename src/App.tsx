import React from 'react';
import Home from './paginas/home/Home';
import './App.css';
import { Grid } from '@material-ui/core';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/login/Login';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import CadastroTema from './components/temas/cadastroTema/cadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          
          <Route path="/" element={<Login />} />
          
          <Route path="/login" element={<Login />} />
          
          <Route path="/home" element={<Home />} />
          
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          
          <Route path='/temas' element={<ListaTema />} />
           
          <Route path="/posts" element={<ListaPostagem />} />
          
          <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          
          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;