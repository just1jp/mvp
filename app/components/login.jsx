class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="text-center login">
        <div className="logo">
          <img src="assets/img/cotton_candy.png"/>
          <span>ReferralCandy</span>
        </div>
        <h4 className="sub-heading">Refer friends. Be awesome.</h4>
        <form onSubmit={this.props.handleLogin}>
          <input className="email-input" placeholder="Your Email" type="text" name="email" value={this.props.email} onChange={this.props.updateEmail}/>
          <input className="email-submit" type="submit" value="Step Inside"/>
        </form>
        <div className="home-gif">
          <img src="assets/img/rockstar_chick.gif"/>
        </div>
      </div>
    );
  }
}

window.Login = Login;