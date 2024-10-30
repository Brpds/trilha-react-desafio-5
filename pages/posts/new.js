import Link from 'next/link';
import Layout from "../../components/Layout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { useForm, Controller } from "react-hook-form";

const schema = yup.object({
    title:yup.string().min(3, 'Título deve ter ao menos 3 caracteres').required('Título é obrigatório').max(100, 'Máximo de 100 caracteres'),
    description:yup.string().min(3, 'Mínimo de 3 caracteres').max(100, 'Descrição deve ser breve. Máximo de 100 caracteres').required('Descrição é obrigatório'),
    body:yup.string().min(3, 'Mínimo de 3 caracteres').max(1000, 'Máximo de 1000 caracteres').required('Campo obrigatório')
}).required();


export default function NewPost() {

    //const navigate = useNavigate();

    const { control, handleSubmit, formState: {errors, isValid}} = useForm({
        resolver: yupResolver(schema),
        mode:'onChange'
    })

    const onSubmit = async (formData) => {
        try {
            const newPost = {
                title: formData.title,
                description: formData.description,
                body: formData.body
            }

            const response = await api.post('/posts', newPost)

            if(response.status === 201){
                alert('Post adicionado com sucesso. Redirecionando para página inicial.')
                window.location.href = '/';
            }
        }catch (error) {
            alert('Erro: ', error.message, ' Redirecionando para o início...')
            window.location.href = '/';
        }
    }

    return(
        <Layout>
                <form style={{color:'#000'}} onSubmit={handleSubmit(onSubmit)}>
                    <Controller 
                        name="title" 
                        control={control} 
                        render={({ field }) => (
                            <input {...field} type="text" placeholder="Title" />
                    )}
                    />
                    <br /><br />
                    <Controller 
                        name="description" 
                        control={control} 
                        render={({ field }) => (
                            <input {...field} type="text" placeholder="Description" />
                    )}
                    />
                    <br /><br />
                    <Controller 
                        name="body" 
                        control={control} 
                        render={({ field }) => (
                            <textarea {...field} type="text" placeholder="Your text" ></textarea>
                    )}
                    />
                    <br /><br />
                    <button type="submit">Post</button>
                </form>
                <Link href={`/`} as={`/`}>← Voltar</Link>
        </Layout>
    )
}