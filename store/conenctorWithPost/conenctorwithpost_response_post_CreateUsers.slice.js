import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const conenctorwithpost_post_user_create = createAsyncThunk(
  "conenctorwithpost_response_post_CreateUsers/conenctorwithpost_post_user_create",
  async payload => {
    const response = await apiService.conenctorwithpost_post_user_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const conenctorwithpost_response_post_CreateUsersSlice = createSlice({
  name: "conenctorwithpost_response_post_CreateUsers",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(conenctorwithpost_post_user_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        conenctorwithpost_post_user_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(conenctorwithpost_post_user_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  conenctorwithpost_post_user_create,
  slice: conenctorwithpost_response_post_CreateUsersSlice
}
