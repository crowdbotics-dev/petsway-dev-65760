import axios from "axios";
const conenctorWithPost = axios.create({
  baseURL: "https://localhost.com/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function conenctorwithpost_post_user_create(payload) {
  return conenctorWithPost.post(`/user`, payload.data);
}

export const apiService = {
  conenctorwithpost_post_user_create
};