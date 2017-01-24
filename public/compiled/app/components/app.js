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
      this.setState(function (prevState) {
        return {
          isLoggedIn: !prevState.isLoggedIn
        };
      });

      axios.post('/login', {
        email: this.state.email
      }).then(function (response) {
        console.log(response);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9nZ2VkSW4iLCJlbWFpbCIsImhhbmRsZUxvZ2luIiwiYmluZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2U3RhdGUiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsInVwZGF0ZUVtYWlsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVksS0FERDtBQUVYQyxhQUFPO0FBRkksS0FBYjtBQUlBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFOaUI7QUFPbEI7Ozs7Z0NBRVdDLEMsRUFBRztBQUNiQSxRQUFFQyxjQUFGO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEVBQUNMLE9BQU9HLEVBQUVHLE1BQUYsQ0FBU0MsS0FBakIsRUFBZDtBQUNEOzs7Z0NBRVdKLEMsRUFBRztBQUNiQSxRQUFFQyxjQUFGO0FBQ0EsV0FBS0MsUUFBTCxDQUFjO0FBQUEsZUFBYztBQUMxQk4sc0JBQVksQ0FBQ1MsVUFBVVQ7QUFERyxTQUFkO0FBQUEsT0FBZDs7QUFJQVUsWUFBTUMsSUFBTixDQUFXLFFBQVgsRUFBcUI7QUFDakJWLGVBQU8sS0FBS0YsS0FBTCxDQUFXRTtBQURELE9BQXJCLEVBR0dXLElBSEgsQ0FHUSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0QsT0FMSCxFQU1HRyxLQU5ILENBTVMsVUFBVUMsS0FBVixFQUFpQjtBQUN0QkgsZ0JBQVFDLEdBQVIsQ0FBWUUsS0FBWjtBQUNELE9BUkg7QUFVRDs7OzZCQUVRO0FBQ1AsVUFBSWpCLGFBQWEsS0FBS0QsS0FBTCxDQUFXQyxVQUE1QjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBRUksU0FBQ0EsVUFBRCxHQUFlLG9CQUFDLEtBQUQsSUFBTyxPQUFPLEtBQUtELEtBQUwsQ0FBV0UsS0FBekIsRUFBZ0MsYUFBYSxLQUFLaUIsV0FBTCxDQUFpQmYsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBN0MsRUFBMEUsYUFBYSxLQUFLRCxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUF2RixHQUFmLEdBQXlJLG9CQUFDLFNBQUQ7QUFGN0ksT0FERjtBQU9EOzs7O0VBMUNlZ0IsTUFBTUMsUzs7QUE2Q3hCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekI7O0FBRUFDLE9BQU81QixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgZW1haWw6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUxvZ2luID0gdGhpcy5oYW5kbGVMb2dpbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlRW1haWwoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDogZS50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIGhhbmRsZUxvZ2luKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIGlzTG9nZ2VkSW46ICFwcmV2U3RhdGUuaXNMb2dnZWRJblxuICAgIH0pKTtcbiAgICBcbiAgICBheGlvcy5wb3N0KCcvbG9naW4nLCB7XG4gICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIGlzTG9nZ2VkSW4gPSB0aGlzLnN0YXRlLmlzTG9nZ2VkSW47XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtcbiAgICAgICAgICAhaXNMb2dnZWRJbiA/ICg8TG9naW4gZW1haWw9e3RoaXMuc3RhdGUuZW1haWx9IHVwZGF0ZUVtYWlsPXt0aGlzLnVwZGF0ZUVtYWlsLmJpbmQodGhpcyl9IGhhbmRsZUxvZ2luPXt0aGlzLmhhbmRsZUxvZ2luLmJpbmQodGhpcyl9Lz4pIDogKDxEYXNoYm9hcmQvPilcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxud2luZG93LkFwcCA9IEFwcDtcblxuXG5cblxuXG4iXX0=