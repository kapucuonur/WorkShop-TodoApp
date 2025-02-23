import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";
import { useState } from "react";

const TutorialList = ({ tutorials, getTutorials }) => {
  const [editItem, setEditItem] = useState("");

  // const BASE_URL = "http://127.0.0.1:8000/api/todo";
  const BASE_URL = '/api/todo';


  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}/`);
      getTutorials();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th> {/* ✅ Tarih sütunu eklendi */}
            <th scope="col" className="text-center">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map(item => {
            const { id, title, description, date } = item;

            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>{date ? new Date(date).toLocaleDateString() : "No Date"}</td> {/* ✅ Tarihi göster */}
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#open-modal"
                    onClick={() => setEditItem(item)}
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => handleDelete(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <EditTutorial editItem={editItem} getTutorials={getTutorials} />
    </div>
  );
};

export default TutorialList;
