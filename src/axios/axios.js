import axios from "axios";

const api = axios.create({
    baseURL: "http://10.89.240.67:5000/api/v1/",
    headers:{
        'accept':'application/json'
    }
});

const sheets = {
    postLogin:(user)=>api.post("login", user),
    postUser:(user)=>api.post("user", user),
    postEvento:(evento)=>api.post("evento", evento),
    postOrganizador:(organizador)=>api.post("organizador", organizador),
    postIngresso:(ingresso)=>api.post("ingresso", ingresso),
    getEventos: ()=> api.get("evento")
}

export default sheets;