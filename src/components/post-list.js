import "../index.css";

import PostListItem from "./post-list-item";

export default function PostList({
  posts,
  onDelete,
  onToggleImportant,
  onToggleLiked,
}) {
  const element = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </li>
    );
  });
  return <ul className="app-list list-group">{element}</ul>;
}
