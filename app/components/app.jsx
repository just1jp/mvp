var attributeReferral = (referrerCode) => {
  axios.post('/referral', {
    referrer: referrerCode
  }).then(function(response) {
    console.log(response);
  }).catch(function(error) {  
    console.log(error);
  })
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      user: '',
      referrer: ''
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
    var referrer;
    (window.location.pathname.slice(1) === '') ? (referrer = 'none') : (referrer = window.location.pathname.slice(1))
  
    axios.post('/login', {
        email: this.state.email
      })
      .then(function (response) {
        if (response.data === 1062) {
          console.log('cant login');
        } else {
          attributeReferral(referrer);
          app.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn,
            user: response.data,
            referrer: referrer
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
          !isLoggedIn ? 
          (<Login email={this.state.email} updateEmail={this.updateEmail.bind(this)} handleLogin={this.handleLogin.bind(this)}/>) :
          (<Dashboard user={this.state.user}/>)
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

window.App = App;





