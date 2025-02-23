import axios from "axios";
import { useEffect, useState } from "react";

const EditTutorial = ({ editItem, getTutorials }) => {
  const { id, description: oldDescription, title: oldTitle, date: oldDate } = editItem;

  const [title, setTitle] = useState(oldTitle);
  const [description, setDescription] = useState(oldDescription);
  const [date, setDate] = useState(oldDate ? oldDate.split("T")[0] : ""); // ISO formatını temizle

  useEffect(() => {
    setTitle(oldTitle);
    setDescription(oldDescription);
    setDate(oldDate ? oldDate.split("T")[0] : "");
  }, [oldTitle, oldDescription, oldDate]);

  const editTutor = async (tutor) => {
    // const BASE_URL = "http://127.0.0.1:8000/api/todo";
    const BASE_URL = "/"
    try {
      await axios.put(`${BASE_URL}/${id}/`, tutor);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTutor({ title, description, date });
  };

  return (
    <div className="modal fade" id="open-modal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title text-danger fs-5">Edit Tutorial</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setTitle("");
                setDescription("");
                setDate("");
              }}
            />
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title || ""}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  value={description || ""}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="text-end">
                <button type="submit" className="btn btn-danger" data-bs-dismiss="modal">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
