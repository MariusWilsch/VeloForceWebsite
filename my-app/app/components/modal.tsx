import React, { useRef } from 'react'
import ServiceButton from './serviceButton';



const Modal = ({ text }: { text: string }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <>
      <ServiceButton handleClick={openModal} />
      <dialog ref={modalRef} className="modal">
        <div className="modal-box text-white" style={{ backgroundColor: '#111' }}>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            {text}
          </p>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal}>Close</button>
        </form>
      </dialog>
    </>
  );
}

export default Modal;
