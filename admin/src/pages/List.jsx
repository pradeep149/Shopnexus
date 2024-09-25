import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import Tooltip from "@mui/material/Tooltip";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [productToDelete, setProductToDelete] = useState(null);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  const editPopupRef = useRef(null);
  const deletePopupRef = useRef(null);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const confirmDelete = (id) => {
    setProductToDelete(id);
    setIsDeletePopupOpen(true);
  };

  const removeProduct = async () => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id: productToDelete },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setIsDeletePopupOpen(false);
        setProductToDelete(null);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setEditForm(product);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveProduct = async () => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/edit",
        { ...editForm, id: selectedProduct._id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setSelectedProduct(null); // Close modal
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Close the popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        editPopupRef.current &&
        !editPopupRef.current.contains(event.target)
      ) {
        setSelectedProduct(null);
      }
      if (
        deletePopupRef.current &&
        !deletePopupRef.current.contains(event.target)
      ) {
        setIsDeletePopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-4 text-black-800 text-xl">All Products List</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border-2 bg-gray-200 text-lg">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {list.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border border-black text-md"
            key={index}
          >
            <img className="w-12" src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {item.price}
            </p>
            <div className="flex gap-10 justify-end md:justify-center">
              <Tooltip title="Edit" placement="top">
                <p
                  onClick={() => openEditModal(item)}
                  className="cursor-pointer text-xl hover:text-3xl shadow-2xl duration-300"
                >
                  ✎
                </p>
              </Tooltip>
              <Tooltip title="Delete" placement="top">
                <p
                  onClick={() => confirmDelete(item._id)}
                  className="cursor-pointer text-xl hover:text-3xl shadow-2xl duration-300"
                >
                  X
                </p>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div ref={editPopupRef} className="bg-white p-8 rounded-lg w-1/2">
            <h3 className="text-xl mb-4">Edit Product</h3>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={editForm.name}
              onChange={handleEditChange}
              className="border p-2 w-full mb-4"
            />
            <label>Description</label>
            <textarea
              name="description"
              value={editForm.description}
              onChange={handleEditChange}
              className="border p-2 w-full mb-4"
            />
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={editForm.price}
              onChange={handleEditChange}
              className="border p-2 w-full mb-4"
            />
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={editForm.category}
              onChange={handleEditChange}
              className="border p-2 w-full mb-4"
            />
            <label>Subcategory</label>
            <input
              type="text"
              name="subcategory"
              value={editForm.subCategory}
              onChange={handleEditChange}
              className="border p-2 w-full mb-4"
            />
            <div className="flex justify-around mt-4">
              <button
                onClick={saveProduct}
                className="bg-green-500 text-xl text-white px-14 py-3 rounded-md hover:text-2xl hover:shadow-2xl duration-300 hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className="bg-red-500 text-xl text-white px-14 py-3 ml-2 rounded-md hover:text-2xl hover:shadow-2xl duration-300 hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeletePopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={deletePopupRef}
            className="bg-white p-10 rounded-lg min-w-[400px] min-h-[150px]"
          >
            <h3 className="flex justify-center text-xl mb-8">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-around">
              <button
                onClick={removeProduct}
                className="bg-red-500 text-xl text-white px-16 py-2 rounded-lg hover:text-2xl hover:bg-red-700 hover:shadow-2xl duration-300"
              >
                Yes
              </button>
              <button
                onClick={() => setIsDeletePopupOpen(false)}
                className="bg-gray-500 text-xl text-white px-16 py-2 rounded-lg hover:text-2xl hover:bg-gray-700 hover:shadow-2xl duration-300"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default List;
