import axios from 'axios';
import { BASE_URL } from './base';




export async function getById(endpoint,id) {
  let result = { data: null, error: null }
  await axios.get(BASE_URL + endpoint+`/${id}`)
      .then((res) => {
          result = { ...result, data: res.data }
      })
      .catch((err) => {
          result = { ...result, error: err }
      })
  return result
}

export async function getAll(endpoint){
    let result ={data:null, error:null}
    await axios.get(BASE_URL + endpoint)
    .then((res)=>{
        result={...result,data: res.data}
    })
    .catch((err)=>{
        result={...result,error:err}
    })
    return result
}   
export async function deleteOne(endpoint, id) {
    let result = { data: null, error: null };
    await axios
      .delete(BASE_URL + endpoint + `/${id}`)
      .then((res) => {
        result = { ...result, data: res.data };
      })
      .catch((err) => {
        result = { ...result, error: err };
      });

    return result;
}

export async function post(endpoint, payload) {
    let result = { data: null, error: null };
    await axios
      .post(BASE_URL + endpoint, payload)
      .then((res) => {
        result = { ...result, data: res.data };
      })
      .catch((err) => {
        result = { ...result, error: err };
      });

    return result;
}

async function patch(endpoint, id, payload) {
    try {
      const response = await axios.patch(BASE_URL + endpoint + `/${id}`, payload);
      return response.data;
    } catch (error) {
      return error;
    }
  }
  const controller = {
    post: post,
    getAll: getAll,
    delete: deleteOne,
    patch: patch,
    getById: getById
  };
  export default controller