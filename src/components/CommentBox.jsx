require('../../css/CommentBox.css');
import React from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';

export default class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    }
    loadCommentsFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ data: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    handleCommentSubmit(comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({ data: newComments });
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: JSON.stringify(comment),
            success: function (data) {
                console.log('Get data: ' + JSON.stringify(data));
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }
    render() {
        return (
            <div className="commentBox">
                <h1 className="boxTitle">Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
            </div>
        );
    }

}



