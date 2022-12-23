import { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import FormKaryawan from "../components/FormKaryawan";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import { useEffect } from "react";
import {
  deleteKaryawan,
  fetchDepartment,
  fetchJabatan,
  fetchKaryawan,
  fetchKaryawanDetail,
} from "../stores/actions";

export default function Karyawan() {
  const [modalShow, setModalShow] = useState(false);
  const { karyawan, jabatan, department, load, karyawanDetail } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKaryawan());
    dispatch(fetchDepartment());
    dispatch(fetchJabatan());
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

  function formatedDate(input) {
    let date = new Date(input);
    return date
      .toLocaleString("id-ID", {
        timeZone: "UTC",
      })
      .split(" ")[0];
  }

  return (
    <>
      <div className="container mt-3">
        <h1 className="display-2 mb-2">Karyawan</h1>

        <Button
          variant="warning"
          className="mb-5"
          onClick={() => setModalShow("add")}
        >
          Tambah Karyawan
        </Button>

        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Jabatan</th>
              <th>Departemen</th>
              <th>Umur</th>
              <th>Gender</th>
              <th>Tanggal Lahir</th>
              <th>Alamat</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {karyawan.map((el, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.table_jabatan.nama_jabatan}</td>
                  <td>{el.table_jabatan.table_department.nama_department}</td>
                  <td>{el.age}</td>
                  <td>{el.gender}</td>
                  <td>{formatedDate(el.tanggal_lahir)}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => {
                        dispatch(fetchKaryawanDetail(el.id));
                        setModalShow("edit");
                      }}
                      className="me-2"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => dispatch(deleteKaryawan(el.id))}
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

      <FormKaryawan
        show={modalShow}
        onHide={() => setModalShow(false)}
        department={department}
        jabatan={jabatan}
        karyawandetail={karyawanDetail}
      />
    </>
  );
}
