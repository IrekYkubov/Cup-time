import Modal from "react-modal";
import { API_URL } from "../const";

function isSmallScreen() {
  if (typeof window !== 'undefined') {
      return window.innerWidth < 660;
  }
  return false;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0 10px",
    maxWidth: isSmallScreen() ? "290px" : "740px",
    width: "100%",
    border: "none",
    backgroundColor: "transparent",
  },
}

Modal.setAppElement('#root');

export const ProductModal = ({isOpen, onRequestClose, data}) => {
  if (!data) {
    return null;
  }

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={customStyles}
    contentLabel = "Product Modal"
    >
      <div className="modal-wrapper">
        <img className="modal__image" src={`${API_URL}${data.img}`} alt={data.title} />
        <div className="modal-description">
          <h2 className="modal__title">{data.title}</h2>
          <p className="modal__price">{data.price}</p>
          <ul>
            {Object.entries(data.additional).map(([key, value]) => (
              <li className="modal__properties-item" key={key}>
                <span className="modal__properties-product">{key}</span> <span className="modal__properties-value">{value}</span>
              </li>
            ))}
          </ul>
          <button className="modal__button-close" onClick={onRequestClose}>&#215;</button>
        </div>
      </div>
    </Modal>
  )


}