import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';


function CadastroTema() {
  
    let history = useNavigate ();
    const {id}= useParams<{id:string}>();
    const [token, setToken] = useLocalStorage('token');
    const [tema,setTema] = useState<Tema>({

        id:0,
        descricao: ''

    })

    useEffect (() =>{

        if (token === "") {

            alert("Você Precisa Estar Logado")
            history("/login")

        }

    }, [token])

    
    
    useEffect (() =>{

        if (id !== undefined) {
            findById(id)

        }

    }, [id])


    async function findById (id:string) {
        
        await buscaId(`/temas/${id}`, setTema,{
            headers:{

            'Authorization': token

        }
        })

    }

        function updatedModel (e: ChangeEvent<HTMLInputElement> ) {

        setTema ({
            ...tema,
            [e.target.name]: e.target.value,
            
        })
 
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("temas " + JSON.stringify(tema))

        if (id !== undefined) {
            
            console.log(tema)
           
            try {
            await put(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            
            alert('Tema Atualizado Com Sucesso');
            
        } catch (error) {
            console.log(`Error: ${error}`)
            alert("Erro, Por Favor Verifique A Quantidade Mínima de Caracteres")
        }
        }else {
            
            try {

           await post(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            
            alert('Tema Cadastrado Com Sucesso');
        }

        catch (error) {
            console.log(`Error: ${error}`)
            alert("Erro, por favor verifique a quantidade minima de caracteres")
        }
    }
        back()

    }

    function back() {
        history ('/temas')
    }




    return (
        <Container maxWidth="sm" className="topo">
           
            <form onSubmit={onSubmit}>
               
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de Cadastro Tema</Typography>
               
                <TextField value={tema.descricao} onChange ={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}  id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
               
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
           
            </form>
        </Container>
    )
}

export default CadastroTema;