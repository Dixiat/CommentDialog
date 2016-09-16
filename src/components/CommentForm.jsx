require('../../css/CommentForm.css');
import React from 'react';

export default class CommentForm extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit(e) {
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
    }
    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" className="commentInput" placeholder="Your name" ref="author" />
                <input type="text" className="commentInput" placeholder="Say something" ref="text" />
                <input type="submit" className="commentInput" value="post" />
            </form>
        );
    }
}


