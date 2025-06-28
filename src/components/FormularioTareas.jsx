import { Button, Container } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import Form from "react-bootstrap/Form";

const FormularioTareas = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Ingrese Tarea" />
          <Button className="btn btn-info">Enviar</Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </Container>
  );
};

export default FormularioTareas;
