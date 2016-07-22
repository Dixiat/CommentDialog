var CommentForm = React.createClass({displayName: "CommentForm",
    //style
    inputStyle:{
        display:block
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
            React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}, 
                React.createElement("input", {type: "text", style: this.inputStyle, placeholder: "Your name", ref: "author"}), 
                React.createElement("input", {type: "text", placeholder: "Say something", ref: "text"}), 
                React.createElement("input", {type: "submit", value: "post"})
            )
        );
    }
});

