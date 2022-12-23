import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createDepartment, updateDepartment } from "../stores/actions";
import { useEffect } from "react";

export default function FormDepartment(props) {
  const [input, setInput] = useState({});

  useEffect(() => {
    if (props.show == "edit")
      setInput({
        nama_department: props.departmentDetail?.nama_department,
      });
    else
      setInput({
        nama_department: "",
      });
  }, [props.show]);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.show == "add")
      dispatch(createDepartment(input)).then((_) => {
        props.onHide();
      });
    else
      dispatch(updateDepartment(props.departmentDetail.id, input)).then((_) => {
        props.onHide();
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Form Karyawan
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Col} md="10" className="mb-3">
            <Form.Label>Departemen</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nama Departemen"
              value={input.nama_department}
              name="nama_department"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md="2" className="mb-3">
            <Button type="submit" className="float-end mt-3 me-3">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
