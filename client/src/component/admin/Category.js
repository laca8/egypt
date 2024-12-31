import React, { useState, useEffect, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";

import {
  MDBRow,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBFile,
} from "mdb-react-ui-kit";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import Loader from "../../component/features/Loader";
import Error from "../../component/features/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteCategory,
  AddCategory,
  listCategory,
  editCategories,
} from "../../redux/actions/category/categoryAction";
import EditCategory from "./EditCategory";
const Category = () => {
  const dispatch = useDispatch();
  const listCategoryReducer = useSelector((state) => state.listCategoryReducer);
  const {
    loading: loadingCat,
    error: errorCat,
    category,
    categories,
    success,
  } = listCategoryReducer;
  // const DeleteButtonComponent = (id) => {
  //   return (
  //     <Button variant="outlined" color="error" onClick={() => handleRemove(id)}>
  //       <DeleteIcon />
  //     </Button>
  //   );
  // };

  // const ImageComponent = (image) => {
  //   return (
  //     <img
  //       src={image}
  //       style={{
  //         width: "45px",
  //         height: "45px",
  //         border: "2px solid #807040",
  //         borderRadius: "50%",
  //       }}
  //     />
  //   );
  // };

  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");

  const [basicModal, setBasicModal] = useState(false);
  const toggleOpen = () => setBasicModal(!basicModal);
  const handleChange2 = (e) => {
    const x = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "images/jpg"];
    const maxSize = 1 * 1024 * 1024; // 5MB in bytes
    if (!x) return;
    // Validate file type
    if (!allowedTypes.includes(x.type)) {
      alert("Invalid file type. Please upload a JPEG, PNG, JPG.");
      return;
    }
    // Validate file size
    if (x.size > maxSize) {
      alert("File is too large. Maximum size is 1MB.");
      return;
    }
    setFile(e.target.files[0]);
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);

    if (file) {
      formData.append("image", file);
    }
    dispatch(AddCategory(formData));
    setBasicModal(!basicModal);

    dispatch(listCategory());
  };
  const handleRemove = async (id) => {
    console.log(id);
    let isBoss = window.confirm("هل تريد حذف البيانات؟");
    if (isBoss) {
      dispatch(deleteCategory(id));
      dispatch(listCategory());
    }
  };

  return (
    <div style={{ marginTop: "35px", width: "95%" }}>
      <MDBBtn
        onClick={toggleOpen}
        style={{ backgroundColor: "#708040", marginBottom: "10px" }}>
        Add New Category
      </MDBBtn>
      <MDBModal
        dir="ltr"
        open={basicModal}
        onClose={() => setBasicModal(false)}
        tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput
                label="Enter Title"
                id="typeText"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                style={{ marginBottom: "10px" }}
              />
              <MDBFile
                onChange={handleChange2}
                id="customFile"
                accept="image/*"
              />
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn
                onClick={() => handleSubmit()}
                style={{ backgroundColor: "#708040" }}>
                save
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      {loadingCat ? (
        <Loader />
      ) : errorCat ? (
        <Error error={errorCat} />
      ) : (
        <MDBRow>
          {/* <div className="ag-theme-alpine" style={{ height: 500 }}>
            <AgGridReact
              rowData={categories}
              columnDefs={columnsDefs}
              defaultColDef={defaultColDef}
              rowSelection="multiple"
              animateRows={true}
            />
          </div> */}
          <div style={{ height: "600px", overflowY: "auto" }} dir="rtl">
            <MDBTable
              className="table-secondary"
              striped
              bordered
              hover
              style={{
                marginTop: "10px",
                height: "100px",

                backgroundColor: "whitesmoke",
              }}>
              <MDBTableHead>
                <tr>
                  <th>مسلسل</th>
                  <th>الاسم</th>
                  <th>الصورة</th>
                  <th>تعديل</th>
                  <th>حذف</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {categories?.map((x, index) => (
                  <tr key={index}>
                    <td>{1 + index}</td>
                    <td>{x?.title}</td>
                    <td>
                      <img
                        alt={""}
                        src={`/uploads/${x?.image}`}
                        style={{
                          width: "45px",
                          height: "45px",
                          border: "2px solid #807040",
                          borderRadius: "50%",
                        }}
                      />
                    </td>
                    <td>
                      <EditCategory id={x?._id} titleEdit={x?.title} />
                    </td>
                    <td>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleRemove(x?._id)}>
                        <DeleteIcon />
                      </Button>
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </div>
        </MDBRow>
      )}
    </div>
  );
};

export default Category;
