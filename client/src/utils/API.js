import axios from "axios";

export default {
  // This will get all articles
  getArticles: function() {
      return axios.get("/api/articles");
  },
  // This gets the articles by id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // This deletes the article by id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // This saves the article to the db
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData)
            .then(response => {console.log(response)})
            .catch(error => {console.log(error)});
  },
  // This will get new articles
  getNewArticles: function (query) {
    return axios.get("/api/articles/nyt/" + query);
  }
};