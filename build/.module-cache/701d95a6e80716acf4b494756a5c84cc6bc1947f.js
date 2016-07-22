var CommentForm = React.createClass({displayName: "CommentForm",
    handleSubmit:function(e) {
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if(!text || !author) {
            return;
        }
        //发送请求给服务端
        
        this.refs.author.value = '';
        this.refs.text.value = '';
    },
    render: function () {
        return (
            React.createElement("form", {className: "commentForm"}, 
                React.createElement("input", {type: "text", placeholder: "Your name", ref: "author"}), 
                React.createElement("input", {type: "text", placeholder: "Say something", ref: "text"}), 
                React.createElement("input", {type: "submit", value: "post"})
            )
        );
    }
});

