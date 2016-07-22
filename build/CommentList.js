var CommentList = React.createClass({displayName: "CommentList",
    //style
    commentStyle: {
        
    },
    render: function () {
        var commentNodes = this.props.data.map(function(comment) {
            return(
                React.createElement(Comment, {author: comment.author, style: this.commentStyle}, 
                    comment.text
                )
            );
        });
        return(
            React.createElement("div", {className: "commentList"}, 
                commentNodes
            )
        );
    }
});