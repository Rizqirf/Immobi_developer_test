import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createKaryawan, updateKaryawan } from "../stores/actions";
import { useEffect } from "react";

export default function FormKaryawan(props) {
  let filtered;
  const [input, setInput] = useState({
    name: "",
    id_jabatan: "",
    age: "",
    gender: "",
    tanggal_lahir: "",
    alamat: "",
    id_department: "",
  });

  function formatedDate(input) {
    let date = new Date(input);
    return date.toISOString().split("T")[0];
  }

  useEffect(() => {
    if (props.show == "edit")
      setInput({
        name: props.karyawandetail?.name,
        id_jabatan: props.karyawandetail?.table_jabatan?.id,
        age: props.karyawandetail?.age,
        gender: props.karyawandetail?.gender,
        tanggal_lahir: formatedDate(props.karyawandetail?.tanggal_lahir),
        alamat: props.karyawandetail?.alamat,
        id_department:
          props.karyawandetail?.table_jabatan?.table_department?.id,
      });
    else
      setInput({
        name: "",
        id_jabatan: "",
        age: "",
        gender: "",
        tanggal_lahir: "",
        alamat: "",
        id_department: "",
      });
  }, [props.show]);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event.target.name == "id_department")
      setInput({ ...input, id_jabatan: "", id_department: event.target.value });
    else setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.show == "add")
      dispatch(createKaryawan(input)).then((_) => {
        props.onHide();
      });
    else
      dispatch(updateKaryawan(props.karyawandetail.id, input)).then((_) => {
        props.onHide();
      });
  };
  console.log(input);

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
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
              <Form.Label>Nama Karyawan</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nama Karyawan"
                value={input.name}
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3">
              <Form.Label>Gender</Form.Label>
              <Form.Check
                type="radio"
                label="Laki-laki"
                value={"L"}
                checked={input.gender == "L"}
                name="gender"
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Perempuan"
                value={"P"}
                checked={input.gender == "P"}
                name="gender"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Usia</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Usia Karyawan"
                name="age"
                value={input.age}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Tanggal Lahir</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Tanggal Lahir"
                name="tanggal_lahir"
                value={input.tanggal_lahir}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Departemen</Form.Label>
              <Form.Select
                aria-label="Pilih Departemen"
                name="id_department"
                value={input.id_department}
                onChange={handleChange}
              >
                <option value={""} disabled selected>
                  Open this select menu
                </option>
                {props.department.map((el) => (
                  <option value={el.id} key={el.id}>
                    {el.nama_department}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Jabatan</Form.Label>
              <Form.Select
                aria-label="Pilih Jabatan"
                name="id_jabatan"
                value={input.id_jabatan}
                onChange={handleChange}
                disabled={!input.id_department ? true : false}
              >
                <option value={""} disabled selected>
                  Pilih Jabatan
                </option>
                {props.jabatan
                  .filter((el) => el.id_department == input.id_department)
                  .map((el) => {
                    return (
                      <option value={+el.id} key={el.id}>
                        {el.nama_jabatan}
                      </option>
                    );
                  })}
              </Form.Select>
            </Form.Group>
          </Row>
          <Form.Group as={Col} md="12">
            <Form.Label>Alamat</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Alamat Karyawan"
              style={{ height: "100px" }}
              value={input.alamat}
              name="alamat"
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
