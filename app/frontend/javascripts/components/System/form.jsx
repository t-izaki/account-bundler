import React from "react"
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"

let Form = props => {
  const { admins, handleSubmit, newRecord } = props

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title text-dark">
          <i className="fas fa-edit pl-2 pr-3" />
          {newRecord ? "作成する" : "編集する"}
        </h4>
        <hr />

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="name">システム名 *</label>
                <Field name="name" component="input" type="text" className="form-control" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="url">URL *</label>
                <Field name="url" component="input" type="text" className="form-control" placeholder="https://..." />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="admin_id">システム管理者 *</label>
                <Field name="admin_id" component="select" className="form-control">
                  <option key={-1} value="" />
                  {admins.map((admin, idx) => {
                    return (
                      <option key={idx} value={admin.id}>
                        {admin.name}
                      </option>
                    )
                  })}
                </Field>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="use_start_at">利用開始日</label>
                <Field name="use_start_at" component="input" type="date" className="form-control" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="use_end_at">利用終了日</label>
                <Field name="use_end_at" component="input" type="date" className="form-control" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="remark">備考</label>
                <Field name="remark" component="textarea" className="form-control" />
              </div>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-dark">
                {newRecord ? "作成する" : "編集する"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    initialValues: state.systems.target
  }
}

export const CreateForm = reduxForm({
  form: "newSystem"
})(Form)

export const UpdateForm = connect(mapStateToProps)(
  reduxForm({
    form: "editSystem",
    enableReinitialize: true
    // validate: ...
  })(Form),
  mapStateToProps
)
