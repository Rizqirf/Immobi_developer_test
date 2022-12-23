import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createJabatan, updateJabatan } from "../stores/actions";
import { useEffect } from "react";

export default function FormJabatan(props) {
  const [input, setInput] = useState({});

  useEffect(() => {
    if (props.show == "edit")
      setInput({
        nama_jabatan: props.jabatanDetail?.nama_jabatan,
        id_department: props.jabatanDetail?.id_department,
      });
    else
      setInput({
        nama_jabatan: "",
        id_department: "",
      });
  }, [props.show]);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.show == "add")
      dispatch(createJabatan(input)).then((_) => {
        props.onHide();
      });
    else
      dispatch(updateJabatan(props.jabatanDetail.id, input)).then((_) => {
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
          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Label>Departemen</Form.Label>
            <Form.Select
              aria-label="Pilih Departemen"
              name="id_department"
              value={input.id_department}
              onChange={handleChange}
            >
              <option value={""} disabled>
                Open this select menu
              </option>
              {props.department.map((el) => (
                <option value={el.id} key={el.id}>
                  {el.nama_department}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Label>Jabatan</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nama Jabatan"
              value={input.nama_jabatan}
              name="nama_jabatan"
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" className="float-end mt-3 me-3">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
