# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190227170914) do

  create_table "accounts", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.bigint "system_id"
    t.bigint "system_user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["system_id"], name: "index_accounts_on_system_id"
    t.index ["system_user_id"], name: "index_accounts_on_system_user_id"
  end

  create_table "admins", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name", default: "", null: false
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.text "tokens"
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["uid", "provider"], name: "index_admins_on_uid_and_provider", unique: true
  end

  create_table "system_categories", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "system_user_categories", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "system_users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "name", null: false
    t.date "joined_at"
    t.date "retired_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "archived_at"
    t.bigint "system_user_category_id"
    t.text "email", null: false
    t.index ["system_user_category_id"], name: "index_system_users_on_system_user_category_id"
  end

  create_table "systems", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "name", null: false
    t.date "use_start_at"
    t.text "remark"
    t.bigint "admin_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "archived_at"
    t.bigint "system_category_id"
    t.date "use_end_at"
    t.text "url", null: false
    t.index ["admin_id"], name: "index_systems_on_admin_id"
    t.index ["name"], name: "index_systems_on_name", unique: true
    t.index ["system_category_id"], name: "index_systems_on_system_category_id"
  end

  create_table "tasks", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "action", null: false
    t.bigint "target_system_user_id"
    t.bigint "target_system_id"
    t.integer "status", null: false
    t.datetime "closed_at"
    t.bigint "author_id"
    t.bigint "assignee_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "reject_reason"
    t.index ["assignee_id"], name: "index_tasks_on_assignee_id"
    t.index ["author_id"], name: "index_tasks_on_author_id"
    t.index ["target_system_id"], name: "index_tasks_on_target_system_id"
    t.index ["target_system_user_id"], name: "index_tasks_on_target_system_user_id"
  end

  add_foreign_key "accounts", "system_users"
  add_foreign_key "accounts", "systems"
  add_foreign_key "system_users", "system_user_categories"
  add_foreign_key "systems", "admins"
  add_foreign_key "systems", "system_categories"
  add_foreign_key "tasks", "admins", column: "assignee_id"
  add_foreign_key "tasks", "admins", column: "author_id"
  add_foreign_key "tasks", "system_users", column: "target_system_user_id"
  add_foreign_key "tasks", "systems", column: "target_system_id"
end
