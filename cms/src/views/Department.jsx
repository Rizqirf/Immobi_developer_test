import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import FormDepartment from "../components/FormDepartment";
import {
  deleteDepartment,
  fetchDepartment,
  fetchDepartmentDetail,
} from "../stores/actions";

export default function Department() {
  const [modalShow, setModalShow] = useState(false);

  const { department, departmentDetail, load } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDepartment());
  }, []);

  if (load) {
    return (
      <PulseLoader
        color="#6c757d"
        margin={5}
        // loading={load}
        size={20}
        speedMultiplier={1}
        cssOverride={{
          display: "block",
          margin: "80px",
        }}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="text-center"
      />
    );
  }
  return (
    <>
      <div className="container mt-3">
        <h1 className="display-2 mb-2">Departemen</h1>

        <Button
          variant="warning"
          className="mb-5"
          onClick={() => setModalShow("add")}
        >
          Tambah Departemen
        </Button>

        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Departemen</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {department.map((el, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{el.nama_department}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => {
                        dispatch(fetchDepartmentDetail(el.id));
                        setModalShow("edit");
                      }}
                      className="me-2"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => dispatch(deleteDepartment(el.id))}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <FormDepartment
        show={modalShow}
        onHide={() => setModalShow(false)}
        departmentDetail={departmentDetail}
      />
    </>
  );
}
