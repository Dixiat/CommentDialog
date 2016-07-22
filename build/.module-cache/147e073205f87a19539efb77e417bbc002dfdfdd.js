var Comment = React.createClass({displayName: "Comment",
    //style
    divStyle:{
        width:'200px'
    },
    h2Style:{
        paddingLeft:'10px'
    },
    spanStyle: {
        paddingLeft:'5px'
    },
    //function
    rawMarkup: function () {
        var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
        return { __html: rawMarkup };
    },

    render: function () {
        return (
            React.createElement("div", {className: "comment"}, 
                React.createElement("h2", {className: "commentAuthor", style: this.h2Style}, 
                    this.props.author
                ), 
                React.createElement("span", {dangerouslySetInnerHTML: this.rawMarkup(), style: this.spanStyle})
            )
        );
    }
});