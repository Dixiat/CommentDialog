var CommentList = React.createClass({
    //style
    commentStyle: {
        
    },
    render: function () {
        var commentNodes = this.props.data.map(function(comment) {
            return(
                <Comment author={comment.author} style={this.commentStyle}>
                    {comment.text}
                </Comment>
            );
        });
        return(
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});