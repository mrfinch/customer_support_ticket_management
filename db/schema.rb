# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20170814165706) do

  create_table "ticket_statuses", force: :cascade do |t|
    t.integer  "status",      limit: 4
    t.integer  "user_id",     limit: 4
    t.text     "information", limit: 65535
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "ticket_statuses", ["status"], name: "index_ticket_statuses_on_status", using: :btree
  add_index "ticket_statuses", ["user_id"], name: "index_ticket_statuses_on_user_id", using: :btree

  create_table "tickets", force: :cascade do |t|
    t.string   "name",           limit: 191
    t.text     "description",    limit: 65535
    t.datetime "resolve_eta"
    t.integer  "ticket_type",    limit: 4
    t.integer  "user_id",        limit: 4,     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "current_status", limit: 4,     null: false
  end

  add_index "tickets", ["current_status"], name: "index_tickets_on_current_status", using: :btree
  add_index "tickets", ["name"], name: "index_tickets_on_name", using: :btree
  add_index "tickets", ["resolve_eta"], name: "index_tickets_on_resolve_eta", using: :btree
  add_index "tickets", ["ticket_type"], name: "index_tickets_on_ticket_type", using: :btree
  add_index "tickets", ["updated_at"], name: "index_tickets_on_updated_at", using: :btree
  add_index "tickets", ["user_id"], name: "index_tickets_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  limit: 191, default: "", null: false
    t.string   "encrypted_password",     limit: 255, default: "", null: false
    t.string   "reset_password_token",   limit: 191
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          limit: 4,   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: 255
    t.string   "last_sign_in_ip",        limit: 255
    t.string   "confirmation_token",     limit: 191
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email",      limit: 255
    t.integer  "failed_attempts",        limit: 4,   default: 0,  null: false
    t.string   "unlock_token",           limit: 191
    t.datetime "locked_at"
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
    t.string   "name",                   limit: 191
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["name"], name: "index_users_on_name", using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  add_index "users", ["unlock_token"], name: "index_users_on_unlock_token", unique: true, using: :btree

end
