import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo({ text, index, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function deleteButtonClicked() {
    setIsModalOpen(true);
    return true;
  }

  function closeModalHandler() {
    setIsModalOpen(false);
    return true;
  }

  return (
    <div className="list">
      <div className="card">
        <h2>{text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteButtonClicked}>
            Delete
          </button>
        </div>
        {isModalOpen && (
          <Modal
            onCancel={closeModalHandler}
            onConfirm={() => closeModalHandler() && onDelete(index)}
          />
        )}
        {isModalOpen && <Backdrop onClick={closeModalHandler} />}
      </div>
    </div>
  );
}

export default Todo;
