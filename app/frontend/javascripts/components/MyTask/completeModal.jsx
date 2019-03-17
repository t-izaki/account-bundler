import React from "react"
import ReactModal from "react-modal"

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

const CompleteModal = props => {
  const { targetTask, handleCompleteSubmit, handleCloseModal } = props
  const { system_name, system_url, action, system_user_name, system_user_email } = targetTask || {}

  return (
    <ReactModal isOpen={Boolean(targetTask)} style={customStyles}>
      <span className="float-right" onClick={handleCloseModal}>
        <i className="fas fa-times" />
      </span>
      <h5 className="text-dark">タスクを承認・完了する</h5>
      <hr />
      <div className="row">
        <div className="col-12 mt-3 mb-4 text-center">
          <h6>1. 対象のシステムにアクセスしてください</h6>
          <p className="font-weight-bold">
            {system_name}
            <a href={system_url} target="_blank">
              <i className="fas fa-external-link-alt pl-2" />
            </a>
          </p>
        </div>
        <div className="col-12 mb-5 text-center">
          <h6>2. {action}を行ってください</h6>
          <div className="row">
            <dt className="col-5 text-right">利用者</dt>
            <dd className="col-7 text-left">{system_user_name}</dd>
            <dt className="col-5 text-right">メールアドレス</dt>
            <dd className="col-7 text-left">{system_user_email}</dd>
          </div>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-dark" onClick={handleCompleteSubmit}>
            {action}を承認・完了する
          </button>
          <br />
          <small>
            アカウント数の不整合を防ぐために
            <br />
            実際に{action}を完了してからボタンを押してください。
          </small>
        </div>
      </div>
    </ReactModal>
  )
}

export default CompleteModal
