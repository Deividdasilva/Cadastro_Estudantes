const baseUrl = "http://localhost:8000/api/register"
import axios from "axios";
import { data } from "jquery";
const register = {};

register.save = async (data) => {
    const urlSave = baseUrl+"/create"
    const res = await axios.post(urlSave,data)
    .then(response=>{ return response.data; })
    .catch(error =>{return error;})
    return res;
}

register.listRegister = async () => {

    const urlList = baseUrl+"/list"
    const res = await axios.get(urlList)
    .then(response=>{ return response.data})
    .catch(error => { return error})
    return res;
}

register.get = async (id) => {
    
    const urlGet = baseUrl+"/get/"+id
    const res = await axios.get(urlGet)
    .then(response=>{ return response.data })
    .catch(error => { return error })
    return res;
}

register.update = async (data) => {
    const urlUpdate = baseUrl+"/update/"+data.id
    const res = await axios.put(urlUpdate,data)
    .then(response=>{ return response.data; })
    .catch(error => { return error; })
    return res;
}

register.delete = async (id) => {
    const urlDelete = baseUrl+"/delete/"+id
    const res = await axios.delete(urlDelete)
    .then(response=>{ return response.data})
    .catch(error => { return error })
    return res;

}

export default register;