(function(){
    'use strict';

    var Quiz = React.createClass({
       propTypes:{
            book: React.PropTypes.array.isRequired
       },
       render: function(){
           return(
               <div>
                   {this.props.books.map(book => <Book title={book}></Book>)}
               </div>
           )
       }
    });

    var Book = React.createClass({
       propTypes: {
           title: React.PropTypes.string.isRequired
       },
       handleClick: function(){
         this.props.onBookSelected(this.props.title);
       },
       render: function(){
           return (
               <div onClick={this.handleClick}>
                   <h4>
                       {this.props.title}
                   </h4>
               </div>
           )
       }
    });

    ReactDOM.render(<Quiz books={['Book 1', 'Book 2', 'Book 3']}/>, document.getElementById("container"));

})();
