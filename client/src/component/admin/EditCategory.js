import React, { useState, useEffect } from "react";
import Loader from "../../component/features/Loader";
import Error from "../../component/features/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteCategory,
  AddCategory,
  listCategoryByTitle,
  listCategory,
  editCategories,
} from "../../redux/actions/category/categoryAction";
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
const EditCategory = ({ id, titleEdit }) => {
  const listCategoryByTitlReducer = useSelector(
    (state) => state.listCategoryByTitlReducer
  );
  const { loading, error, category, success } = listCategoryByTitlReducer;
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [basicModal, setBasicModal] = useState(false);
  const toggleOpen = () => {
    setBasicModal(!basicModal);
  };
  useEffect(() => {
    dispatch(listCategoryByTitle(titleEdit));
    setTitle(titleEdit);
  }, [titleEdit, id]);
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
    } else {
      formData.append("image", category.image);
    }

    dispatch(editCategories(formData, id));
    setBasicModal(!basicModal);
    window.location.reload();

    dispatch(listCategory());
  };

  return (
    <div>
      <MDBBtn onClick={toggleOpen} style={{ backgroundColor: "#708040" }}>
        <EditIcon />
      </MDBBtn>
      <MDBModal
        dir="ltr"
        open={basicModal}
        onClose={() => setBasicModal(false)}
        tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit</MDBModalTitle>
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
    </div>
  );
};

export default EditCategory;
