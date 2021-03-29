function Avatar(props) {
  return React.createElement("img", { className: "Avatar",
    src: props.user.avatarUrl,
    alt: props.user.name
  });
}

function UserInfo(props) {
  return React.createElement(
    "div",
    { className: "UserInfo" },
    React.createElement(Avatar, { user: props.user }),
    React.createElement(
      "div",
      { className: "UserInfo-name" },
      props.user.name
    )
  );
}

function Comment(props) {
  return React.createElement(
    "div",
    { className: "Comment" },
    React.createElement(UserInfo, { user: props.author }),
    React.createElement(
      "div",
      { className: "Comment-text" },
      props.text
    ),
    React.createElement(
      "div",
      { className: "Comment-date" },
      props.date
    )
  );
}

ReactDOM.render(React.createElement(Comment, { date: "2021-03-29", text: "\u8FD9\u662F\u8BC4\u8BBA\u3002", author: { name: '鬼头', avatarUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=323840868,2919772715&fm=16&gp=0.jpg' } }), document.getElementById('comment'));