var CommentForm = React.createClass({
    //style
    formStyle:{
        width:'4`00px',
        paddingBottom:'5px'

    },
    inputStyle:{
        margin:'5px auto',
        display:'block'
    },
    //function
    handleSubmit: function (e) {
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({ author: author, text: text });
        this.refs.author.value = '';
        this.refs.text.value = '';
        return;
    },
    render: function () {
        return (
            <form className="commentForm" style={this.formStyle} onSubmit={this.handleSubmit}>
                <input type="text" style={this.inputStyle} placeholder="Your name" ref="author" />
                <input type="text" style={this.inputStyle} placeholder="Say something" ref="text" />
                <input type="submit" style={this.inputStyle} value="post" />
            </form>
        );
    }
});

