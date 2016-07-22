var CommentList = React.createClass({displayName: "CommentList",
    render:function() {
        return (
            React.createElement("div", {className: "commentList"}, 
                React.createElement(Comment, {author: "Pete Hunt"}, "This is one comment"), 
                React.createElement(Comment, {author: "Jordan Walke"}, "This is \"another\" comment")
            )
        );
    }
});

var CommentForm = React.createClass({displayName: "CommentForm",
    render:function() {
         return(
            React.createElement("div", {className: "commentForm"}, 
                "Hello,world! I'm a CommentForm."
            )
    );
    }
});