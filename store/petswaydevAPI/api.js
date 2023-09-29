import axios from "axios"
const petswaydevAPI = axios.create({
  baseURL: "https://petsway-dev-65760.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return petswaydevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return petswaydevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_pet_list(payload) {
  return petswaydevAPI.get(`/api/v1/pet/`)
}
function api_v1_pet_create(payload) {
  return petswaydevAPI.post(`/api/v1/pet/`, payload)
}
function api_v1_pet_retrieve(payload) {
  return petswaydevAPI.get(`/api/v1/pet/${payload.id}/`)
}
function api_v1_pet_update(payload) {
  return petswaydevAPI.put(`/api/v1/pet/${payload.id}/`, payload)
}
function api_v1_pet_partial_update(payload) {
  return petswaydevAPI.patch(`/api/v1/pet/${payload.id}/`, payload)
}
function api_v1_pet_destroy(payload) {
  return petswaydevAPI.delete(`/api/v1/pet/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return petswaydevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return petswaydevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return petswaydevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return petswaydevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return petswaydevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return petswaydevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return petswaydevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return petswaydevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return petswaydevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return petswaydevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return petswaydevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return petswaydevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_pet_list,
  api_v1_pet_create,
  api_v1_pet_retrieve,
  api_v1_pet_update,
  api_v1_pet_partial_update,
  api_v1_pet_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
