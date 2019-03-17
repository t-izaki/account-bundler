import React from "react"
import { Field, reduxForm } from "redux-form"
import SystemRow from "./systemItem"

const Form = ({
  systems,
  selectedSystemIds,
  searchValue,
  handleSearchInputChange,
  handleItemClick,
  handleSubmitClick,
  isRequesting
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title border-bottom">新しいアカウントを申請</h5>
        <div className="row mb-2">
          <div className="col-lg-6">
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchInputChange}
              className="form-control form-control-sm"
              placeholder="システム名で検索"
            />
          </div>
        </div>

        <div className="row mb-3">
          {systems.map(system => {
            return (
              <SystemRow
                key={system.id}
                name={system.name}
                active={selectedSystemIds.includes(String(system.id))}
                handleClick={handleItemClick(system.id)}
                isRequesting={isRequesting(system.id)}
              />
            )
          })}
        </div>

        <div className="row">
          <div className="col-lg-12 text-right">
            <form onSubmit={handleSubmitClick}>
              <Field name="system_ids" component="select" type="select-multiple" multiple={true} value={[]} hidden>
                {systems.map((system, idx) => {
                  return (
                    <option key={idx} value={system.id}>
                      {system.name}
                    </option>
                  )
                })}
              </Field>
              <button type="submit" className="btn btn-sm btn-dark">
                選択したアカウントの作成申請
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default reduxForm({
  form: "accountCreateRequestForAUser"
})(Form)
