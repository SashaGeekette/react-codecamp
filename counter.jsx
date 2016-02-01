var Highlight = { //mixin
  //called after each render
  componentDidUpdate: function(){
      var node = $(ReactDOM.findDOMNode(this));
      node.slideUp();
      node.slideDown();
  }
};

var Count = React.createClass({
   mixins: [Highlight], //array of mixins
   getInitialState: function(){
       var state = {counter: 1};
       setInterval(function(){
           this.setState({counter: this.state.counter + 1});
       }.bind(this), 1000);
       return state;
   },
   render: function(){
       return(
           <div>
               <h1>
                   Counter
               </h1>
               <CountDisplay counter={this.state.counter}/>
           </div>
       )
   }
});

var CountDisplay = React.createClass({
   render: function(){
       return (
           <p>{this.props.counter}</p>
       )
   }
});

ReactDOM.render(<Count/>, document.getElementById(("container")));

