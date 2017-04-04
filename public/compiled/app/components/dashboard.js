"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

    _this.state = {
      referrals: _this.props.user.referrals,
      nextReward: 10
    };
    return _this;
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "dashboard" },
        React.createElement(
          "div",
          { className: "text-center header-content" },
          React.createElement(
            "h1",
            null,
            'Hi there, ' + this.props.user.email
          ),
          React.createElement(
            "h5",
            null,
            "Here's your unique referral link!"
          ),
          React.createElement(
            "div",
            { className: "referral-code" },
            window.location.origin + '/' + this.props.user.referralCode
          )
        ),
        React.createElement(
          "div",
          { className: "rewards-content row" },
          React.createElement(
            "div",
            { className: "col-lg-5 push-lg-1 hidden-md-down" },
            React.createElement(
              "div",
              { className: "rewards-content-gif" },
              React.createElement("img", { src: "assets/img/rocket.gif" })
            )
          ),
          React.createElement(
            "div",
            { className: "col-lg-5 text-center" },
            React.createElement(
              "div",
              { className: "rewards-content-details" },
              React.createElement(
                "h5",
                null,
                "Woo! You've referred ",
                this.state.referrals,
                " friends!"
              ),
              React.createElement(
                "h3",
                null,
                "Refer ",
                this.state.nextReward - this.state.referrals,
                " more and we'll send you"
              ),
              React.createElement("img", { src: "assets/img/glasses.png" })
            )
          )
        )
      );
    }
  }]);

  return Dashboard;
}(React.Component);

window.Dashboard = Dashboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC5qc3giXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwicHJvcHMiLCJzdGF0ZSIsInJlZmVycmFscyIsInVzZXIiLCJuZXh0UmV3YXJkIiwiZW1haWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsInJlZmVycmFsQ29kZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVyxNQUFLRixLQUFMLENBQVdHLElBQVgsQ0FBZ0JELFNBRGhCO0FBRVhFLGtCQUFZO0FBRkQsS0FBYjtBQUZpQjtBQU1sQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSw0QkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLLDJCQUFlLEtBQUtKLEtBQUwsQ0FBV0csSUFBWCxDQUFnQkU7QUFBcEMsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZUFBZjtBQUFnQ0MsbUJBQU9DLFFBQVAsQ0FBZ0JDLE1BQWhCLEdBQXlCLEdBQXpCLEdBQStCLEtBQUtSLEtBQUwsQ0FBV0csSUFBWCxDQUFnQk07QUFBL0U7QUFIRixTQURGO0FBTUU7QUFBQTtBQUFBLFlBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsbUNBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxxQkFBZjtBQUNFLDJDQUFLLEtBQUksdUJBQVQ7QUFERjtBQURGLFdBREY7QUFNRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUseUJBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUEwQixxQkFBS1IsS0FBTCxDQUFXQyxTQUFyQztBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQVcscUJBQUtELEtBQUwsQ0FBV0csVUFBWCxHQUF3QixLQUFLSCxLQUFMLENBQVdDLFNBQTlDO0FBQUE7QUFBQSxlQUZGO0FBR0UsMkNBQUssS0FBSSx3QkFBVDtBQUhGO0FBREY7QUFORjtBQU5GLE9BREY7QUF1QkQ7Ozs7RUFqQ3FCUSxNQUFNQyxTOztBQW9DOUJMLE9BQU9QLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6ImRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZWZlcnJhbHM6IHRoaXMucHJvcHMudXNlci5yZWZlcnJhbHMsXG4gICAgICBuZXh0UmV3YXJkOiAxMFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgaGVhZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICA8aDE+eydIaSB0aGVyZSwgJyArIHRoaXMucHJvcHMudXNlci5lbWFpbH08L2gxPlxuICAgICAgICAgIDxoNT5IZXJlJ3MgeW91ciB1bmlxdWUgcmVmZXJyYWwgbGluayE8L2g1PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmZXJyYWwtY29kZVwiPnt3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy8nICsgdGhpcy5wcm9wcy51c2VyLnJlZmVycmFsQ29kZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV3YXJkcy1jb250ZW50IHJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgcHVzaC1sZy0xIGhpZGRlbi1tZC1kb3duXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJld2FyZHMtY29udGVudC1naWZcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL3JvY2tldC5naWZcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJld2FyZHMtY29udGVudC1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgIDxoNT5Xb28hIFlvdSd2ZSByZWZlcnJlZCB7dGhpcy5zdGF0ZS5yZWZlcnJhbHN9IGZyaWVuZHMhPC9oNT5cbiAgICAgICAgICAgICAgPGgzPlJlZmVyIHt0aGlzLnN0YXRlLm5leHRSZXdhcmQgLSB0aGlzLnN0YXRlLnJlZmVycmFsc30gbW9yZSBhbmQgd2UnbGwgc2VuZCB5b3U8L2gzPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvZ2xhc3Nlcy5wbmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuRGFzaGJvYXJkID0gRGFzaGJvYXJkOyJdfQ==