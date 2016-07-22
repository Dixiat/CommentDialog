var data = [
    { author: 'Pete Hunt', text: 'This is one comment.' },
    { author: 'Jordon Walke', text: 'This is another comment.' }
];

var CommentBox = React.createClass({displayName: "CommentBox",
    getInitialState: function () {
        return { data: [] };
    },
    componentDidMount:function() {
        $.ajax
    },
    render: function () {
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "Comments"), 
                React.createElement(CommentList, {data: this.state.data}), 
                React.createElement(CommentForm, null)
            )
        );
    }
});

ReactDOM.render(
    React.createElement(CommentBox, {data: data}),
    document.getElementById('content')
);



