'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var attributeReferral = function attributeReferral(referrerCode) {
  axios.post('/referral', {
    referrer: referrerCode
  }).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      isLoggedIn: false,
      email: '',
      user: '',
      referrer: ''
    };
    _this.handleLogin = _this.handleLogin.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'updateEmail',
    value: function updateEmail(e) {
      e.preventDefault();
      this.setState({ email: e.target.value });
    }
  }, {
    key: 'handleLogin',
    value: function handleLogin(e) {
      e.preventDefault();
      var app = this;
      var referrer;
      window.location.pathname.slice(1) === '' ? referrer = 'none' : referrer = window.location.pathname.slice(1);

      axios.post('/login', {
        email: this.state.email
      }).then(function (response) {
        if (response.data === 1062) {
          console.log('cant login');
        } else {
          attributeReferral(referrer);
          app.setState(function (prevState) {
            return {
              isLoggedIn: !prevState.isLoggedIn,
              user: response.data,
              referrer: referrer
            };
          });
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var isLoggedIn = this.state.isLoggedIn;
      return React.createElement(
        'div',
        null,
        !isLoggedIn ? React.createElement(Login, { email: this.state.email, updateEmail: this.updateEmail.bind(this), handleLogin: this.handleLogin.bind(this) }) : React.createElement(Dashboard, { user: this.state.user })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiYXR0cmlidXRlUmVmZXJyYWwiLCJyZWZlcnJlckNvZGUiLCJheGlvcyIsInBvc3QiLCJyZWZlcnJlciIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9nZ2VkSW4iLCJlbWFpbCIsInVzZXIiLCJoYW5kbGVMb2dpbiIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiYXBwIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNsaWNlIiwiZGF0YSIsInByZXZTdGF0ZSIsInVwZGF0ZUVtYWlsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFDQyxZQUFELEVBQWtCO0FBQ3hDQyxRQUFNQyxJQUFOLENBQVcsV0FBWCxFQUF3QjtBQUN0QkMsY0FBVUg7QUFEWSxHQUF4QixFQUVHSSxJQUZILENBRVEsVUFBU0MsUUFBVCxFQUFtQjtBQUN6QkMsWUFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0QsR0FKRCxFQUlHRyxLQUpILENBSVMsVUFBU0MsS0FBVCxFQUFnQjtBQUN2QkgsWUFBUUMsR0FBUixDQUFZRSxLQUFaO0FBQ0QsR0FORDtBQU9ELENBUkQ7O0lBVU1DLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEtBREQ7QUFFWEMsYUFBTyxFQUZJO0FBR1hDLFlBQU0sRUFISztBQUlYWixnQkFBVTtBQUpDLEtBQWI7QUFNQSxVQUFLYSxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBUmlCO0FBU2xCOzs7O2dDQUVXQyxDLEVBQUc7QUFDYkEsUUFBRUMsY0FBRjtBQUNBLFdBQUtDLFFBQUwsQ0FBYyxFQUFDTixPQUFPSSxFQUFFRyxNQUFGLENBQVNDLEtBQWpCLEVBQWQ7QUFDRDs7O2dDQUVXSixDLEVBQUc7QUFDYkEsUUFBRUMsY0FBRjtBQUNBLFVBQUlJLE1BQU0sSUFBVjtBQUNBLFVBQUlwQixRQUFKO0FBQ0NxQixhQUFPQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsS0FBekIsQ0FBK0IsQ0FBL0IsTUFBc0MsRUFBdkMsR0FBOEN4QixXQUFXLE1BQXpELEdBQW9FQSxXQUFXcUIsT0FBT0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLEtBQXpCLENBQStCLENBQS9CLENBQS9FOztBQUVBMUIsWUFBTUMsSUFBTixDQUFXLFFBQVgsRUFBcUI7QUFDakJZLGVBQU8sS0FBS0YsS0FBTCxDQUFXRTtBQURELE9BQXJCLEVBR0dWLElBSEgsQ0FHUSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3hCLFlBQUlBLFNBQVN1QixJQUFULEtBQWtCLElBQXRCLEVBQTRCO0FBQzFCdEIsa0JBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0QsU0FGRCxNQUVPO0FBQ0xSLDRCQUFrQkksUUFBbEI7QUFDQW9CLGNBQUlILFFBQUosQ0FBYTtBQUFBLG1CQUFjO0FBQ3pCUCwwQkFBWSxDQUFDZ0IsVUFBVWhCLFVBREU7QUFFekJFLG9CQUFNVixTQUFTdUIsSUFGVTtBQUd6QnpCLHdCQUFVQTtBQUhlLGFBQWQ7QUFBQSxXQUFiO0FBS0Q7QUFDRixPQWRILEVBZUdLLEtBZkgsQ0FlUyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCSCxnQkFBUUMsR0FBUixDQUFZRSxLQUFaO0FBQ0QsT0FqQkg7QUFtQkQ7Ozs2QkFFUTtBQUNQLFVBQUlJLGFBQWEsS0FBS0QsS0FBTCxDQUFXQyxVQUE1QjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBRUksU0FBQ0EsVUFBRCxHQUNDLG9CQUFDLEtBQUQsSUFBTyxPQUFPLEtBQUtELEtBQUwsQ0FBV0UsS0FBekIsRUFBZ0MsYUFBYSxLQUFLZ0IsV0FBTCxDQUFpQmIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBN0MsRUFBMEUsYUFBYSxLQUFLRCxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUF2RixHQURELEdBRUMsb0JBQUMsU0FBRCxJQUFXLE1BQU0sS0FBS0wsS0FBTCxDQUFXRyxJQUE1QjtBQUpMLE9BREY7QUFTRDs7OztFQXZEZWdCLE1BQU1DLFM7O0FBMER4QkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCOztBQUVBWixPQUFPZCxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGF0dHJpYnV0ZVJlZmVycmFsID0gKHJlZmVycmVyQ29kZSkgPT4ge1xuICBheGlvcy5wb3N0KCcvcmVmZXJyYWwnLCB7XG4gICAgcmVmZXJyZXI6IHJlZmVycmVyQ29kZVxuICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikgeyAgXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9KVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICBlbWFpbDogJycsXG4gICAgICB1c2VyOiAnJyxcbiAgICAgIHJlZmVycmVyOiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVMb2dpbiA9IHRoaXMuaGFuZGxlTG9naW4uYmluZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZUVtYWlsKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWw6IGUudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICBoYW5kbGVMb2dpbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBhcHAgPSB0aGlzO1xuICAgIHZhciByZWZlcnJlcjtcbiAgICAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpID09PSAnJykgPyAocmVmZXJyZXIgPSAnbm9uZScpIDogKHJlZmVycmVyID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpKVxuICBcbiAgICBheGlvcy5wb3N0KCcvbG9naW4nLCB7XG4gICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhID09PSAxMDYyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NhbnQgbG9naW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdHRyaWJ1dGVSZWZlcnJhbChyZWZlcnJlcik7XG4gICAgICAgICAgYXBwLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAgICAgaXNMb2dnZWRJbjogIXByZXZTdGF0ZS5pc0xvZ2dlZEluLFxuICAgICAgICAgICAgdXNlcjogcmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgIHJlZmVycmVyOiByZWZlcnJlclxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgaXNMb2dnZWRJbiA9IHRoaXMuc3RhdGUuaXNMb2dnZWRJbjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge1xuICAgICAgICAgICFpc0xvZ2dlZEluID8gXG4gICAgICAgICAgKDxMb2dpbiBlbWFpbD17dGhpcy5zdGF0ZS5lbWFpbH0gdXBkYXRlRW1haWw9e3RoaXMudXBkYXRlRW1haWwuYmluZCh0aGlzKX0gaGFuZGxlTG9naW49e3RoaXMuaGFuZGxlTG9naW4uYmluZCh0aGlzKX0vPikgOlxuICAgICAgICAgICg8RGFzaGJvYXJkIHVzZXI9e3RoaXMuc3RhdGUudXNlcn0vPilcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxud2luZG93LkFwcCA9IEFwcDtcblxuXG5cblxuXG4iXX0=