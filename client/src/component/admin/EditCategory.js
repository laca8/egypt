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
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// Initialize Firebase (replace with your config)
const firebaseConfig = {
  apiKey: "AIzaSyBvJDv_xWE8ri37GPEtplXaWwYK-QX_Yb4",
  authDomain: "yarab-uploadfile-11dcf.firebaseapp.com",
  projectId: "yarab-uploadfile-11dcf",
  storageBucket: "yarab-uploadfile-11dcf.appspot.com",
  messagingSenderId: "905701233897",
  appId: "1:905701233897:web:2ce1a796b873b6ec058c78",
  measurementId: "G-N8D8VL7V67",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
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
  }, [titleEdit, id, dispatch]);
  const handleChange2 = async (e) => {
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
    try {
      const filename = `${Date.now()}-${x.name}`;
      const storageRef = ref(storage, `images/${filename}`);
      const snapshot = await uploadBytes(storageRef, x);
      const downloadURL = await getDownloadURL(snapshot.ref);
      setFile(downloadURL);
      console.log(downloadURL);
    } catch (error) {
      console.log(error);
    }
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
