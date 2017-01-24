class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      referrals: this.props.user.referrals,
      nextReward: 10
    };
  }

  render() {
    return (
      <div className="dashboard">
        <div className="text-center header-content">
          <h1>{'Hi there, ' + this.props.user.email}</h1>
          <h5>Here's your unique referral link!</h5>
          <div className="referral-code">{window.location.origin + '/' + this.props.user.referralCode}</div>
        </div>
        <div className="rewards-content row">
          <div className="col-lg-5 push-lg-1 hidden-md-down">
            <div className="rewards-content-gif">
              <img src="assets/img/rocket.gif"/>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <div className="rewards-content-details">
              <h5>Woo! You've referred {this.state.referrals} friends!</h5>
              <h3>Refer {this.state.nextReward - this.state.referrals} more and we'll send you</h3>
              <img src="assets/img/glasses.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

window.Dashboard = Dashboard;