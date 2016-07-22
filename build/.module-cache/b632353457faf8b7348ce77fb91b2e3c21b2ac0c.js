var CommentForm = React.createClass({displayName: "CommentForm",
    //style
    formStyle:{
        width:'400px',
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
            React.createElement("form", {className: "commentForm", style: this.formStyle, onSubmit: this.handleSubmit}, 
                React.createElement("input", {type: "text", style: this.inputStyle, placeholder: "Your name", ref: "author"}), 
                React.createElement("input", {type: "text", style: this.inputStyle, placeholder: "Say something", ref: "text"}), 
                React.createElement("input", {type: "submit", style: this.inputStyle, value: "post"})
            )
        );
    }
});

