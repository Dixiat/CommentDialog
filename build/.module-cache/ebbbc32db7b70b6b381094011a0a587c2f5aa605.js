var data = [
    { author: "Pete Hunt", text: "This is one comment." },
    { author: "Jordon Walke", text: "This is another comment." }
];

var CommentList = React.createClass({displayName: "CommentList",
    render: function () {
        return (
            React.createElement("div", {className: "commentList"}, 
                React.createElement(Comment, {author: "Pete Hunt"}, "This is one comment"), 
                React.createElement(Comment, {author: "Jordan Walke"}, "This is \"another\" comment")
            )
        );
    }
});