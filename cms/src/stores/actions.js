import { swalError, swalSuccess } from "../helpers/swal";

const base_url = "http://localhost:4000";

export const fetchKaryawan = () => {
  return (dispatch) => {
    dispatch({ type: "load/true" });
    fetch(`${base_url}/karyawan`)
      .then((res) => {
        if (!res.ok) throw res.json();
        return res.json();
      })
      .then((data) =>
        dispatch({
          type: "data/fetchKaryawan",
          payload: data,
        })
      )
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      })
      .finally((_) => {
        dispatch({ type: "load/false" });
      });
  };
};
export const fetchDepartment = () => {
  return (dispatch) => {
    dispatch({ type: "load/true" });
    fetch(`${base_url}/department`)
      .then((res) => {
        if (!res.ok) throw res.json();
        return res.json();
      })
      .then((data) =>
        dispatch({
          type: "data/fetchDepartment",
          payload: data,
        })
      )
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      })
      .finally((_) => dispatch({ type: "load/false" }));
  };
};
export const fetchJabatan = () => {
  return (dispatch) => {
    dispatch({ type: "load/true" });
    fetch(`${base_url}/jabatan`)
      .then((res) => {
        if (!res.ok) throw res.json();
        return res.json();
      })
      .then((data) =>
        dispatch({
          type: "data/fetchJabatan",
          payload: data,
        })
      )
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      })
      .finally((_) => dispatch({ type: "load/false" }));
  };
};
export const fetchKaryawanDetail = (id) => {
  return (dispatch) => {
    dispatch({ type: "load/true" });
    fetch(`${base_url}/karyawan/${id}`, {})
      .then((res) => {
        if (!res.ok) throw res.json();
        return res.json();
      })
      .then((data) =>
        dispatch({
          type: "data/fetchKaryawanDetail",
          payload: data,
        })
      )
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      })
      .finally(() => dispatch({ type: "load/false" }));
  };
};
export const createKaryawan = (obj) => {
  return (dispatch) => {
    return fetch(`${base_url}/karyawan`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (!res.ok) throw res.json();
        dispatch(fetchKaryawan());
        return res.json();
      })
      .then((data) => {
        swalSuccess(`Sukses menambahkan ${data.name}!`);
      })
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const updateKaryawan = (id, obj) => {
  return (dispatch) => {
    return fetch(`${base_url}/karyawan/${id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (!res.ok) throw res.json;
        dispatch(fetchKaryawan());
        return res.json();
      })
      .then((data) => {
        swalSuccess(`Sukses merubah karyawan!`);
      })
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const deleteKaryawan = (id) => {
  return (dispatch, getState) => {
    return fetch(`${base_url}/karyawan/${id}`, {
      method: "delete",
    })
      .then((res) => {
        if (!res.ok) throw res.json();
        return;
      })
      .then(() => {
        swalSuccess(`Sukses menghapus karyawan!`);
        dispatch(fetchKaryawan());
      })
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const fetchJabatanDetail = (id) => {
  return (dispatch) => {
    dispatch({ type: "load/true" });
    fetch(`${base_url}/jabatan/${id}`, {})
      .then((res) => {
        if (!res.ok) throw res.json();
        return res.json();
      })
      .then((data) =>
        dispatch({
          type: "data/fetchJabatanDetail",
          payload: data,
        })
      )
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      })
      .finally(() => dispatch({ type: "load/false" }));
  };
};
export const createJabatan = (obj) => {
  return (dispatch) => {
    return fetch(`${base_url}/jabatan`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (!res.ok) throw res.json();
        dispatch(fetchJabatan());
        return res.json();
      })
      .then((data) => {
        swalSuccess(`Sukses menambahkan ${data.nama_jabatan}!`);
      })
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const updateJabatan = (id, obj) => {
  return (dispatch) => {
    return fetch(`${base_url}/jabatan/${id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (!res.ok) throw res.json;
        dispatch(fetchJabatan());
        return res.json();
      })
      .then((data) => {
        swalSuccess(`Sukses merubah jabatan!`);
      })
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const deleteJabatan = (id) => {
  return (dispatch, getState) => {
    return fetch(`${base_url}/jabatan/${id}`, {
      method: "delete",
    })
      .then((res) => {
        if (!res.ok) throw res.json();
        return;
      })
      .then(() => {
        swalSuccess(`Sukses menghapus jabatan!`);
        dispatch(fetchJabatan());
      })
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const fetchDepartmentDetail = (id) => {
  return (dispatch) => {
    dispatch({ type: "load/true" });
    fetch(`${base_url}/department/${id}`, {})
      .then((res) => {
        if (!res.ok) throw res.json();
        return res.json();
      })
      .then((data) =>
        dispatch({
          type: "data/fetchDepartmentDetail",
          payload: data,
        })
      )
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      })
      .finally(() => dispatch({ type: "load/false" }));
  };
};
export const createDepartment = (obj) => {
  return (dispatch) => {
    return fetch(`${base_url}/department`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (!res.ok) throw res.json();
        dispatch(fetchDepartment());
        return res.json();
      })
      .then((data) => {
        swalSuccess(`Sukses menambahkan ${data.nama_department}!`);
      })
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const updateDepartment = (id, obj) => {
  return (dispatch) => {
    return fetch(`${base_url}/department/${id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (!res.ok) throw res.json;
        dispatch(fetchDepartment());
        return res.json();
      })
      .then((data) => {
        swalSuccess(`Sukses merubah departemen!`);
      })
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const deleteDepartment = (id) => {
  return (dispatch, getState) => {
    return fetch(`${base_url}/department/${id}`, {
      method: "delete",
    })
      .then((res) => {
        if (!res.ok) throw res.json();
        return;
      })
      .then(() => {
        swalSuccess(`Sukses menghapus departemen!`);
        dispatch(fetchDepartment());
      })
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
