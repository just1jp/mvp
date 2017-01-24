class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  updateEmail(e) {
    e.preventDefault();
    this.setState({email: e.target.value});
  }

  handleLogin(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
    
    axios.post('/login', {
        email: this.state.email
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    var isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        {
          !isLoggedIn ? (<Login email={this.state.email} updateEmail={this.updateEmail.bind(this)} handleLogin={this.handleLogin.bind(this)}/>) : (<Dashboard/>)
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

window.App = App;





