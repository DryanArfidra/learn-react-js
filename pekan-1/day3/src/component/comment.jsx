function Comment(props) {
  return (
    <div className="comment">
      <div className="comment-header">
        <Avatar src={props.author.avatarUrl} alt={`Avatar for ${props.author.name}`} />
        <UserInfo name={props.author.name} />
      </div>
      <CommentText text={props.text} />
    </div>
  );
}

export default Comment;