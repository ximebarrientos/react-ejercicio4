import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas, borrarTarea}) => {
  return (
    <ListGroup className="mt-3">
      {
        tareas.map((tarea,indice)=><ItemTarea key={indice} nombreTarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
      }
      
    </ListGroup>
  );
};

export default ListaTareas;
