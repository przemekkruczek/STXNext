import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
  params: {
    maxResults: 20,
    langRestrict: "en"
  }
});
