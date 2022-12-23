import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

const initialValue = {
  karyawan: [],
  karyawanDetail: null,
  jabatan: [],
  jabatanDetail: null,
  department: [],
  departmentDetail: null,
  load: true,
};

function dataReducers(state = initialValue, action) {
  switch (action.type) {
    case "data/fetchKaryawan":
      return { ...state, karyawan: action.payload };
    case "data/fetchKaryawanDetail":
      return { ...state, karyawanDetail: action.payload };
    case "data/clearKaryawanDetail":
      return { ...state, karyawanDetail: null };
    case "data/fetchJabatan":
      return { ...state, jabatan: action.payload };
    case "data/fetchJabatanDetail":
      return { ...state, jabatanDetail: action.payload };
    case "data/clearJabatanDetail":
      return { ...state, jabatanDetail: null };
    case "data/fetchDepartment":
      return { ...state, department: action.payload };
    case "data/fetchDepartmentDetail":
      return { ...state, departmentDetail: action.payload };
    case "data/clearDepartmentDetail":
      return { ...state, departmentDetail: null };
    case "load/true":
      return { ...state, load: true };
    case "load/false":
      return { ...state, load: false };
    default:
      return state;
  }
}

const middlewares = applyMiddleware(thunk);
let store = createStore(dataReducers, middlewares);

export default store;
