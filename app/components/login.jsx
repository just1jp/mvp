class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleLogin}>
          <label>
            Email:
            <input type="text" name="email" value={this.props.email} onChange={this.props.updateEmail}/>
          </label>
          <input type="submit" value="Step Inside"/>
        </form>
      </div>
    );
  }
}

window.Login = Login;