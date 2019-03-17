import React from "react"
import queryString from "query-string"
import RenderList from "./renderList"
import RenderForm from "./renderForm"

class TopPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const params = queryString.parse(this.props.location.search)

    return (
      <div className="row">
        <div className="col-lg-3 pr-0">
          <RenderForm newRecord={true} />
        </div>
        <div className="col-lg-9 pl-0">
          <RenderList params={params} />
        </div>
      </div>
    )
  }
}

export default TopPage
