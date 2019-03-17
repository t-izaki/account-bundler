import React from "react"
import ReactModal from "react-modal"
import { reduxForm, Field } from "redux-form"

ReactModal.setAppElement("#root")

const customStyles = {
  overlay: {
    zIndex: "100",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "15px",
    width: "500px",
    transform: "translate(-50%, -50%)"
  }
}

const RejectModal = props => {
  const { targetTask, handleRejectSubmit, handleCloseModal } = props
  const { system_name, action, system_user_name } = targetTask || {}

  return (
    <ReactModal isOpen={Boolean(targetTask)} style={customStyles}>
      <span className="float-right" onClick={handleCloseModal}>
        <i className="fas fa-times" />
      </span>
      <h5 className="text-dark">タスクを却下する</h5>
      <hr />
      <form onSubmit={handleRejectSubmit}>
        <div className="row">
          <div className="col-12 mb-2">
            <label htmlFor="rejectResult">対象のタスク</label>
            <p>
              {action} / {system_name} / {system_user_name}
            </p>
          </div>
          <div className="col-12 mb-4">
            <label htmlFor="reject_reason">却下の理由 *</label>
            <Field name="reject_reason" component="textarea" rows="5" className="form-control" />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-dark">
              却下する
            </button>
            <br />
            <small>却下の理由は、タスク依頼者が確認できます。</small>
          </div>
        </div>
      </form>
    </ReactModal>
  )
}

export default reduxForm({
  form: "taskRejectForm"
})(RejectModal)
