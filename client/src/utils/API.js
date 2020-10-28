import axios from "axios"

export default {
  // Gets all saved books
  getBooks: function() {
    return fetch("/api/books")
  },
  getSearchBooks: function(search) {
      return axios.get("api/books/searchbook/" + search)
  }
}