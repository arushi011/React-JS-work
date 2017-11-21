class HelloWorld extends React.Component {
  constructor(props){
    super(props);
  
  this.state = {
    color : '#B71C1C'
    };
  };
  toggleStyle(){
    if (this.state.color =='#B71C1C')
    this.setState({
      color: '#2E7D32'
    });
    else
      this.setState({
      color: '#B71C1C'
    });  
  };
  changeColor(event){
    this.setState({
      color: event.target.value
    });
    
  }
  render() {
     const styleObj = {
            backgroundColor: this.state.color,
            fontSize: 32/2};
    return (
      //<section style = 'background: red;' id = 'hello world'>
      //<section style = {{backgroundColor:'#EF5350'}} id = 'hello-world'>
      <section style={styleObj} id='hello-world' onClick={this.toggleStyle.bind(this)}>
        <h1>{this.props.name}</h1>
        <h2>Color Viewer</h2>
        <input value={this.state.color} onChange={this.changeColor.bind(this)} />
      </section>
    );
  }
}

ReactDOM.render(<HelloWorld name="Arushi" />, document.getElementById("app"));
