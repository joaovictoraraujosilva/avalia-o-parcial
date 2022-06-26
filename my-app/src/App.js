import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required("O firstName é obrigatorio"),
  description: yup.string().required("O description é obrigatorio"),
  content: yup.string().required("O content é obrigatorio"),
  cidade: yup.string().required("O cidade é obrigatorio"),
  escolaridade: yup.string().required("A escolaridade é obrigatorio"),
  estadocivil: yup.string().required("O estado civil é obrigatorio"),
  email: yup.string().required("O email é obrigatorio"),
  telefone: yup.string().required("O telefone é obrigatorio"),
}).required();

function App() {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => console.log(data);


  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
          <label>First Name</label>
          <input type="texto" class="form-control" name="firstName" {...register("firstName")}/>
          <p>{errors.firstName?.message}</p>
        </div>
        <div class="form-group">
          <label>Description</label>
          <input type="texto" class="form-control" name="description" {...register("description")}/>
          <p>{errors.description?.message}</p>
        </div>
        <div class="form-group">
          <label>Content</label>
          <textarea type="text" class="form-control" name="content" {...register("content")}></textarea>
          <p>{errors.content?.message}</p>
        </div>
        <div class="form-group">
          <label>Cidade</label>
          <textarea type="text" class="form-control" name="cidade" {...register("cidade")}></textarea>
          <p>{errors.cidade?.message}</p>
        </div>
        <div class="form-group">
          <label>Escolaridade</label>
          <textarea type="text" class="form-control" name="escolaridade" {...register("escolaridade")}></textarea>
          <p>{errors.escolaridade?.message}</p>
        </div>
        <div class="form-group">
          <label>Estado civil</label>
          <textarea type="text" class="form-control" name="estado civil" {...register("estado civil")}></textarea>
          <p>{errors.estadocivil?.message}</p>
        </div>
        <div class="form-group">
          <label>Email</label>
          <textarea type="text" class="form-control" name="Email" {...register("email")}></textarea>
          <p>{errors.email?.message}</p>
        </div>
        <div class="form-group">
          <label>Telefone</label>
          <textarea type="text" class="form-control" name="telefone" {...register("telefone")}></textarea>
          <p>{errors.telefone?.message}</p>
        </div>

        <input type="submit" value="submit" className="btn btn-primary"/>
      </form>

    </div>
  );
}
export default App;