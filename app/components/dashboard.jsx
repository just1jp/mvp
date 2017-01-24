class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      referrals: 0
    };
  }

  render() {
    return (
      <div>
        <h5>Your Referral Dashboard</h5>
        <p>http://localhost:8000/3jifa</p>
        <p>{this.state.referrals} referrals</p>
      </div>
    );
  }
}

window.Dashboard = Dashboard;