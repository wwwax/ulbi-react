import styles from "./Modal.module.css";

export default function Modal({ children, showModal, setShowModal }) {
  const computedStyles = showModal
    ? `${styles.modal} ${styles.active}`
    : styles.modal;

  return (
    <div className={computedStyles} onClick={() => setShowModal(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
