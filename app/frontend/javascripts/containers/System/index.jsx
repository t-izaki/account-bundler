import React from "react"
import queryString from "query-string"
import SystemForm from "./systemForm"
import SystemTable from "./systemTable"

class SystemIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const params = queryString.parse(this.props.location.search)

    return (
      <div className="row">
        <div className="col-lg-3 pr-0">
          <SystemForm newRecord={true} />
        </div>
        <div className="col-lg-9 pl-0">
          <SystemTable params={params} />
        </div>
      </div>
    )
  }
}

export default SystemIndex
