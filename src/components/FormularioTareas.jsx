import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";


const FormularioTarea = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const tareasLocalStorage=JSON.parse(localStorage.getItem('tareas'))||[]//traeme las tareas que hay en el local storage O (si no hay) usar array vacio
  const [tareas, setTareas] = useState(tareasLocalStorage);

  useEffect(()=>{
    //ejecuta automaticamente este codigo cuando suceda el ciclo de vida del componente
    localStorage.setItem('tareas', JSON.stringify(tareas))
  },[tareas])

  const agregarTarea = (dato) => {
    setTareas([...tareas, dato.tarea])
    reset();
  };

  const borrarTarea=(nombreTarea)=>{
    // filtrar el state tareas
    const tareasFiltradas=tareas.filter((itemTarea)=>itemTarea!==nombreTarea )
    //actualizamos el state
    setTareas(tareasFiltradas)
  }

  return (
    <>
      <Form onSubmit={handleSubmit(agregarTarea)}>
        <Form.Group
          className="mb-1 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Ingresa una tarea"
            {...register("tarea", {
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 3,
                message: "La tarea debe contener como minimo 3 caracteres",
              },
              maxLength: {
                value: 50,
                message:
                  "La tarea debe contener hasta 50 caracteres como máximo",
              },
            })}
          />
          <Button variant="info" type="submit">
            Enviar
          </Button>
        </Form.Group>
        <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </>
  );
};

export default FormularioTarea;
