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
    var app = this;
  
    axios.post('/login', {
        email: this.state.email
      })
      .then(function (response) {
        if (response.data === 1062) {
          console.log('cant login');
        } else {
          console.log(response.data.email + ' logged in');
          app.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn
          }));
        }
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





