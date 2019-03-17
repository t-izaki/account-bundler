import React from "react"
import ReactTooltip from "react-tooltip"
import { TASK_STATUS_COMPLETED, TASK_STATUS_IN_PROGRESS, TASK_STATUS_REJECTED } from "../../const"

export default props => {
  const { status, rejectReason } = props

  switch (status) {
    case TASK_STATUS_IN_PROGRESS:
      return <span className="badge badge-pill badge-success">処理中</span>

    case TASK_STATUS_COMPLETED:
      return <span className="badge badge-pill badge-info">完了</span>

    case TASK_STATUS_REJECTED:
      return (
        <React.Fragment>
          <span className="badge badge-pill badge-dark">却下</span>
          <span className="pl-2" data-tip={rejectReason || "(却下の理由がありません)"}>
            <i className="fas fa-comment" />
            <ReactTooltip effect="solid" place="bottom" />
          </span>
        </React.Fragment>
      )
  }
}
