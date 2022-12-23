import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import FormJabatan from "../components/FormJabatan";
import {
  deleteJabatan,
  fetchDepartment,
  fetchJabatan,
  fetchJabatanDetail,
} from "../stores/actions";

export default function Jabatan() {
  const [modalShow, setModalShow] = useState(false);

  const { jabatan, department, jabatanDetail, load } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJabatan());
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
        <h1 className="display-2 mb-2">Jabatan</h1>

        <Button
          variant="warning"
          className="mb-5"
          onClick={() => setModalShow("add")}
        >
          Tambah Jabatan
        </Button>

        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Departemen</th>
              <th>Nama jabatan</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jabatan.map((el, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{el.table_department.nama_department}</td>
                  <td>{el.nama_jabatan}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => {
                        dispatch(fetchJabatanDetail(el.id));
                        setModalShow("edit");
                      }}
                      className="me-2"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => dispatch(deleteJabatan(el.id))}
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
      <FormJabatan
        show={modalShow}
        onHide={() => setModalShow(false)}
        department={department}
        jabatanDetail={jabatanDetail}
      />
    </>
  );
}
