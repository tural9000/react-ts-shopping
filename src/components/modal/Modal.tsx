
import { useCardContext } from "../../context-api/basket-context/BasketContext";

interface IPROPS {
  title: string;
  text?: string;
  dangerText?: string;
  children?: React.ReactNode;
  openModal: () => void;
  closeModal?: () => void;
  toggle?: boolean;
  header?: React.ReactNode;
  body?: React.ReactNode;
  cancelButtonText: string;
  successButtonText: string;
  disable?: boolean;
}

export const Modal: React.FC<IPROPS> = (props) => {
  const {
    title,
    openModal,
    toggle,
    header,
    body,
    cancelButtonText,
    successButtonText,
    closeModal,
    disable,
  } = props;
  const [state, , , , clearBasket] = useCardContext();

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        {title}
      </button>

      <div
        className={`modal fade ${toggle ? "show d-block" : ""}`}
        style={{ background: ` ${toggle ? "rgba(1,1,1,0.3)" : ""}` }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {header && header}
            {body && body}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
              >
                {" "}
                {cancelButtonText}{" "}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                disabled={disable}
                onClick={() => {
                  localStorage.setItem("order", JSON.stringify(state));
                  clearBasket && state && clearBasket([state.length]);
                }}
              >
                {successButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
