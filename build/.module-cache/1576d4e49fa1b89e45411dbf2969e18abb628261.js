//data
var data = [
    { author: 'Pete Hunt', text: 'This is one comment.' },
    { author: 'Jordon Walke', text: 'This is another comment.' }
];

//class
var CommentBox = React.createClass({displayName: "CommentBox",
    //style
    divStyle: {
        width:'400px',
        height:'auto',
        margin: '0 auto',
        boxShadow:'1px 1px 3px gray'
    },
    h1Style: {
        paddingTop:'15px',
        textAlign: 'center'
    },
    //function
    loadCommentsFromServer: function () {
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
    },
    handleCommentSubmit: function (comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({ data: newComments });
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: JSON.stringify(comment),
            success: function (data) {
                console.log('Get data: ' + data);
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function () {
        return { data: [] };
    },
    componentDidMount: function () {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function () {
        return (
            React.createElement("div", {className: "commentBox", style: this.divStyle}, 
                React.createElement("h1", {style: this.h1Style}, "Comments"), 
                React.createElement(CommentList, {data: this.state.data}), 
                React.createElement(CommentForm, {onCommentSubmit: this.handleCommentSubmit})
            )
        );
    }
});

//render
ReactDOM.render(
    React.createElement(CommentBox, {url: "http://localhost:4000", pollInterval: 2000}),
    document.getElementById('content')
);



