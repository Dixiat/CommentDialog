require('../../css/Comment.css');
import React from 'react';

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
    }
    rawMarkup() {
        var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
        return { __html: rawMarkup };
    }
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span className="commentContent" dangerouslySetInnerHTML={this.rawMarkup() } />
            </div>
        );
    }
}
