export const PostCard = ({title, body, cover, id}) => (
// const {post} = props; //atribuição via desestruturação
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h1> {title} </h1>
      <p> {body} </p>
    </div>
  </div> 
);