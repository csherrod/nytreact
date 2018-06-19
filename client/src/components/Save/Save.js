import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../Jumbotron";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import DeleteBtn from "../DeleteBtn";
import "./Save.css";

class Save extends Component {
  state = {
    saved: [],
    title: "",
    date: "",
    url: "",
  };

  componentDidMount() {
    this.loadSavedArticles();
  }

  loadSavedArticles = () => {
    API.getArticles()
      .then(res => {
        console.log("database retrieval");
        console.log(res.data);

        this.setState({ saved: res.data, title: "", date: "", url: "" });
      })
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Saved Articles</h1>
        </Jumbotron>
        {this.state.saved.length ? (
          <List>
            {this.state.saved.map(article => (
              <ListItem key={article._id}>
                <Link to={"/articles/" + article._id}>
                  <strong>{article.title}</strong>
                </Link>
                <DeleteBtn
                  id={"delete" + article._id}
                  onClick={() => this.deleteArticle(article._id)}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <h5>No Results to Display</h5>
        )}
      </div>
    );
  }
}

export default Save;
