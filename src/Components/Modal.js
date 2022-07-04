import DatePicker from "./DatePicker";

const Modal = (props) => {
  return <div className='modal-container'>
    <DatePicker modalIsOpenHandler={props.modalIsOpenHandler}/> 
  </div>
};

export default Modal;