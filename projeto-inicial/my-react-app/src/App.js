import './App.css';
import '@fontsource/roboto';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário Cadastro</Typography>
      <FormularioCadastro aoEnviarForm={aoEnviarForm} validarCPF={validarCPF}/>
    </Container>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11) {
    return {valido:false, texto:"CPF deve ter 11 dígitos."};
  }

  return {valido:true, texto:""};
}
export default App;
