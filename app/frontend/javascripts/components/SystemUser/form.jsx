import React from "react"
import { Field, reduxForm } from "redux-form"

let Form = props => {
  const { handleSubmit, newRecord, systemUserCategories } = props

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
                <label htmlFor="name">名前 *</label>
                <Field name="name" component="input" type="text" className="form-control" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="email">登録用メールアドレス *</label>
                <Field name="email" component="input" type="text" className="form-control" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="system_user_category_name">カテゴリ</label>
                <ul className="pl-2">
                  {systemUserCategories.map(suc => {
                    return (
                      <div className="form-check form-check-inline" key={suc.id}>
                        <label className="form-check-label">
                          <Field
                            name="system_user_category_id"
                            component="input"
                            type="radio"
                            value={String(suc.id)} //Stringにしないと正常に動作しない
                            className="form-check-input"
                          />
                          {suc.name}
                        </label>
                      </div>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="joined_at">入社日</label>
                <Field name="joined_at" component="input" type="date" className="form-control" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="retired_at">退職日</label>
                <Field name="retired_at" component="input" type="date" className="form-control" />
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

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: ownProps.initialValues
  }
}

export const CreateForm = reduxForm({
  form: "newSystemUser"
})(Form)

export const UpdateForm = reduxForm(
  {
    form: "editSystemUser"
  },
  mapStateToProps
)(Form)
