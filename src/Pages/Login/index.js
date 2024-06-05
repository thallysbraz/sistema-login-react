import React from 'react'
import { Container, Form } from './styles'
import Input from '../../Components/Input/Index';
import Botao from '../../Components/Botao/index';

const Login = () => {
    const handleChange = (event) => {
        console.log({ [event.target.name]: event.target.value })
    }

    const handleSubmit = async () => {
        try {
            alert('Login')
        } catch (error) {
            alert('Algo deu errodo com o Login' + error);
        }
    }

    return (
        <Container>
            <Form>
                <h1>Faça seu Login</h1>
                <Input
                    nome='email'
                    placeholder='Digite o seu e-mail'
                    onChange={handleChange}
                    type='email'
                />
                <Input
                    nome='password'
                    placeholder='Digite a sua senha'
                    onChange={handleChange}
                    type='password'
                />
                <Botao
                    type='submit'
                    text='Entrar!'
                    onclick={handleSubmit}
                // disabled={!validandoInput()}
                />
                <div>
                    <p>Não possui conta?</p>
                    <a>Cadastrar</a>
                </div>
            </Form>
        </Container>
    )
}

export default Login;