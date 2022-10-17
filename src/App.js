import { Component } from "react";

import "./App.css";

import { PostCard } from "./components/PostCard";
import { loadPosts } from './utils/load-posts';

/* componentes de classe */
class App extends Component {
  state = {
    posts: []
  };

  //monta e preenche os componentes usando uma API
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async ()=> {
    const postAndPhotos = await loadPosts();
    this.setState({ posts: postAndPhotos });
  }

  render() {
    //atribuição via desestruturação
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <PostCard 
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
            cover={post.cover}/>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
