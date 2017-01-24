'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      isLoggedIn: false,
      email: ''
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

      axios.post('/login', {
        email: this.state.email
      }).then(function (response) {
        if (response.data === 1062) {
          console.log('cant login');
        } else {
          console.log(response.data.email + ' logged in');
          app.setState(function (prevState) {
            return {
              isLoggedIn: !prevState.isLoggedIn
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
        !isLoggedIn ? React.createElement(Login, { email: this.state.email, updateEmail: this.updateEmail.bind(this), handleLogin: this.handleLogin.bind(this) }) : React.createElement(Dashboard, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9nZ2VkSW4iLCJlbWFpbCIsImhhbmRsZUxvZ2luIiwiYmluZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJhcHAiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInByZXZTdGF0ZSIsImNhdGNoIiwiZXJyb3IiLCJ1cGRhdGVFbWFpbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEtBREQ7QUFFWEMsYUFBTztBQUZJLEtBQWI7QUFJQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBTmlCO0FBT2xCOzs7O2dDQUVXQyxDLEVBQUc7QUFDYkEsUUFBRUMsY0FBRjtBQUNBLFdBQUtDLFFBQUwsQ0FBYyxFQUFDTCxPQUFPRyxFQUFFRyxNQUFGLENBQVNDLEtBQWpCLEVBQWQ7QUFDRDs7O2dDQUVXSixDLEVBQUc7QUFDYkEsUUFBRUMsY0FBRjtBQUNBLFVBQUlJLE1BQU0sSUFBVjs7QUFFQUMsWUFBTUMsSUFBTixDQUFXLFFBQVgsRUFBcUI7QUFDakJWLGVBQU8sS0FBS0YsS0FBTCxDQUFXRTtBQURELE9BQXJCLEVBR0dXLElBSEgsQ0FHUSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3hCLFlBQUlBLFNBQVNDLElBQVQsS0FBa0IsSUFBdEIsRUFBNEI7QUFDMUJDLGtCQUFRQyxHQUFSLENBQVksWUFBWjtBQUNELFNBRkQsTUFFTztBQUNMRCxrQkFBUUMsR0FBUixDQUFZSCxTQUFTQyxJQUFULENBQWNiLEtBQWQsR0FBc0IsWUFBbEM7QUFDQVEsY0FBSUgsUUFBSixDQUFhO0FBQUEsbUJBQWM7QUFDekJOLDBCQUFZLENBQUNpQixVQUFVakI7QUFERSxhQUFkO0FBQUEsV0FBYjtBQUdEO0FBQ0YsT0FaSCxFQWFHa0IsS0FiSCxDQWFTLFVBQVVDLEtBQVYsRUFBaUI7QUFDdEJKLGdCQUFRQyxHQUFSLENBQVlHLEtBQVo7QUFDRCxPQWZIO0FBaUJEOzs7NkJBRVE7QUFDUCxVQUFJbkIsYUFBYSxLQUFLRCxLQUFMLENBQVdDLFVBQTVCO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFFSSxTQUFDQSxVQUFELEdBQWUsb0JBQUMsS0FBRCxJQUFPLE9BQU8sS0FBS0QsS0FBTCxDQUFXRSxLQUF6QixFQUFnQyxhQUFhLEtBQUttQixXQUFMLENBQWlCakIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBN0MsRUFBMEUsYUFBYSxLQUFLRCxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUF2RixHQUFmLEdBQXlJLG9CQUFDLFNBQUQ7QUFGN0ksT0FERjtBQU9EOzs7O0VBL0Nla0IsTUFBTUMsUzs7QUFrRHhCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekI7O0FBRUFDLE9BQU85QixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgZW1haWw6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUxvZ2luID0gdGhpcy5oYW5kbGVMb2dpbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlRW1haWwoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDogZS50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIGhhbmRsZUxvZ2luKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGFwcCA9IHRoaXM7XG4gIFxuICAgIGF4aW9zLnBvc3QoJy9sb2dpbicsIHtcbiAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWxcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgPT09IDEwNjIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2FudCBsb2dpbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZW1haWwgKyAnIGxvZ2dlZCBpbicpO1xuICAgICAgICAgIGFwcC5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgICAgIGlzTG9nZ2VkSW46ICFwcmV2U3RhdGUuaXNMb2dnZWRJblxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgaXNMb2dnZWRJbiA9IHRoaXMuc3RhdGUuaXNMb2dnZWRJbjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge1xuICAgICAgICAgICFpc0xvZ2dlZEluID8gKDxMb2dpbiBlbWFpbD17dGhpcy5zdGF0ZS5lbWFpbH0gdXBkYXRlRW1haWw9e3RoaXMudXBkYXRlRW1haWwuYmluZCh0aGlzKX0gaGFuZGxlTG9naW49e3RoaXMuaGFuZGxlTG9naW4uYmluZCh0aGlzKX0vPikgOiAoPERhc2hib2FyZC8+KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG53aW5kb3cuQXBwID0gQXBwO1xuXG5cblxuXG5cbiJdfQ==