import { Component } from "react";
import "./App.css";
import { PostCard } from "./components/PostCard";

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
    const postResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url}
    })

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
