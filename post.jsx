(function(){
    'use strict;'

    var post = {
        title: 'React v0.5',
        content: 'This release is the result of several months of hard work.',
        comments: [
            'Great work team!',
            'Nice!',
            'Wow'
        ]
    }

    var Post = React.createClass({
       render: function(){
           var comments = this.props.data.comments;
           comments = comments.map(function(comment){
               return (<Comment content={comment}></Comment>)
           });

           /* Alternative, put in return directly
            {
            this.props.data.comments.map(function(comment){
            return (<Comment content = {comment}/>);
            }
            }
            OR with ES6 / Babel
            {data.map(comment => <Comment content = {comment} />)}
            */

           return(
               <div>
                   <h1>{this.props.data.title}</h1>
                   <p>{this.props.data.content}</p>
                   <h2>Comments</h2>
                   {comments}

               </div>
           )
       }
    });

    var Comment = React.createClass({
        render: function(){
            return(
                <div>{this.props.content}</div>
            )
        }
    });

    ReactDOM.render(<Post data={post}></Post>, document.getElementById("container"));

})();
