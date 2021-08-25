import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Video Padrão',
    url: 'https://www.youtube.com/watch?v=AQt-PNCV6To',
    categoria: 'Dúvidas Bees',
  });

    return (
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>

        <form onSubmit={(event) => {
          event.preventDefault();
          //alert('Video Cadastrado com Sucesso!');

          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: 1,
          })
            .then(() => {
              console.log('Cadastrou com Sucesso!');             
              history.push('/');
            });
        }}
        >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
         />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>


        </form>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    );
  }

export default CadastroVideo;