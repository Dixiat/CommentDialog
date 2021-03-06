var Comment = React.createClass({displayName: "Comment",
    //style
    h2Style:{
        paddingLeft:'10px'
    },
    
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
                React.createElement("span", {dangerouslySetInnerHTML: this.rawMarkup()})
            )
        );
    }
});