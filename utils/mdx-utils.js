import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    //const {data} = await api.get(`/post?id=eq.${id}`)

    //return {};
    try {
        const { data } = await api.get(`/posts?id=eq.${id}`);
        return data;
      } catch (error) {
        console.error('Error fetching post:', error.message);
        return null;
      }
}

export const deletePostBySlug = async (id) => {

  try{
    const response = await api.delete(`/posts?id=eq.${id}`)
    if(response.status === 204){
      alert('Apagado com sucesso. Redirecionando para Home')
      window.location.href = '/'
    }
  }catch(error){
    alert('Erro: ', error)
  }
}