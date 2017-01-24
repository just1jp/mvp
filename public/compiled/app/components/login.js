"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "text-center login" },
        React.createElement(
          "div",
          { className: "logo" },
          React.createElement("img", { src: "assets/img/cotton_candy.png" }),
          React.createElement(
            "span",
            null,
            "ReferralCandy"
          )
        ),
        React.createElement(
          "h4",
          { className: "sub-heading" },
          "Refer friends. Receive Rewards."
        ),
        React.createElement(
          "form",
          { onSubmit: this.props.handleLogin },
          React.createElement("input", { className: "email-input", placeholder: "Your Email", type: "text", name: "email", value: this.props.email, onChange: this.props.updateEmail }),
          React.createElement("input", { className: "email-submit", type: "submit", value: "Step Inside" })
        ),
        React.createElement(
          "div",
          { className: "home-gif" },
          React.createElement("img", { src: "assets/img/rockstar_chick.gif" })
        )
      );
    }
  }]);

  return Login;
}(React.Component);

window.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2xvZ2luLmpzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwiaGFuZGxlTG9naW4iLCJlbWFpbCIsInVwZGF0ZUVtYWlsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5R0FDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxtQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsTUFBZjtBQUNFLHVDQUFLLEtBQUksNkJBQVQsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixTQURGO0FBS0U7QUFBQTtBQUFBLFlBQUksV0FBVSxhQUFkO0FBQUE7QUFBQSxTQUxGO0FBTUU7QUFBQTtBQUFBLFlBQU0sVUFBVSxLQUFLQSxLQUFMLENBQVdDLFdBQTNCO0FBQ0UseUNBQU8sV0FBVSxhQUFqQixFQUErQixhQUFZLFlBQTNDLEVBQXdELE1BQUssTUFBN0QsRUFBb0UsTUFBSyxPQUF6RSxFQUFpRixPQUFPLEtBQUtELEtBQUwsQ0FBV0UsS0FBbkcsRUFBMEcsVUFBVSxLQUFLRixLQUFMLENBQVdHLFdBQS9ILEdBREY7QUFFRSx5Q0FBTyxXQUFVLGNBQWpCLEVBQWdDLE1BQUssUUFBckMsRUFBOEMsT0FBTSxhQUFwRDtBQUZGLFNBTkY7QUFVRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRSx1Q0FBSyxLQUFJLCtCQUFUO0FBREY7QUFWRixPQURGO0FBZ0JEOzs7O0VBdEJpQkMsTUFBTUMsUzs7QUF5QjFCQyxPQUFPUCxLQUFQLEdBQWVBLEtBQWYiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxvZ2luXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9jb3R0b25fY2FuZHkucG5nXCIvPlxuICAgICAgICAgIDxzcGFuPlJlZmVycmFsQ2FuZHk8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwic3ViLWhlYWRpbmdcIj5SZWZlciBmcmllbmRzLiBSZWNlaXZlIFJld2FyZHMuPC9oND5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMucHJvcHMuaGFuZGxlTG9naW59PlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJlbWFpbC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e3RoaXMucHJvcHMuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLnVwZGF0ZUVtYWlsfS8+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImVtYWlsLXN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN0ZXAgSW5zaWRlXCIvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1naWZcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvcm9ja3N0YXJfY2hpY2suZ2lmXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxud2luZG93LkxvZ2luID0gTG9naW47Il19