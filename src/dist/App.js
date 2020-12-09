"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var bond_1 = require("./bond");
var customers_1 = require("./customers");
var tickets_1 = require("./tickets");
var trade_1 = require("./trade");
var supply_1 = require("./supply");
var balance_1 = require("./balance");
var react_admin_1 = require("react-admin");
var react_admin_firebase_1 = require("react-admin-firebase");
var Group_1 = require("@material-ui/icons/Group");
var Assignment_1 = require("@material-ui/icons/Assignment");
var ConfirmationNumber_1 = require("@material-ui/icons/ConfirmationNumber");
var AttachMoney_1 = require("@material-ui/icons/AttachMoney");
var TrendingUp_1 = require("@material-ui/icons/TrendingUp");
var AccountBalanceWallet_1 = require("@material-ui/icons/AccountBalanceWallet");
var LoginScreen_1 = require("./screens/LoginScreen");
require("./App.css");
var config = require("./FIREBASE_CONFIG.js").firebaseConfig;
var styles_1 = require("@material-ui/core/styles");
var theme = styles_1.createMuiTheme({
    palette: {
    // type: 'light', // Switching the dark mode on is a single property value change.
    }
});
var options = {
    logging: true,
    rootRef: "root_collection/some_document",
    watch: ["bond"]
};
var dataProvider = react_admin_firebase_1.FirebaseDataProvider(config, options);
var authProvider = react_admin_firebase_1.FirebaseAuthProvider(config, options);
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(react_admin_1.Admin, { dataProvider: dataProvider, authProvider: authProvider, loginPage: LoginScreen_1["default"], 
            // theme={theme}
            title: "\u041D\u044D\u0432\u0442\u0440\u044D\u0445 \u0445\u044D\u0441\u044D\u0433" },
            React.createElement(react_admin_1.Resource, { options: {
                    label: 'Үнэт цаас'
                }, name: "bond", icon: Assignment_1["default"], list: bond_1.BondList, show: bond_1.BondShow, create: bond_1.BondCreate, edit: bond_1.BondEdit }),
            React.createElement(react_admin_1.Resource, { options: {
                    label: 'Харилцагч'
                }, name: "customer", icon: Group_1["default"], list: customers_1.CustomerList, show: customers_1.CustomerShow, create: customers_1.CustomerCreate, edit: customers_1.CustomerEdit }),
            React.createElement(react_admin_1.Resource, { options: {
                    label: 'Захиалга'
                }, name: "ticket", icon: ConfirmationNumber_1["default"], list: tickets_1.TicketList, show: tickets_1.TicketShow, create: tickets_1.TicketCreate, edit: tickets_1.TicketEdit }),
            React.createElement(react_admin_1.Resource, { options: {
                    label: 'Үлдэгдэл шалгах'
                }, name: "balance", icon: AccountBalanceWallet_1["default"], list: balance_1.BalanceList, show: balance_1.BalanceShow, create: balance_1.BalanceCreate, edit: balance_1.BalanceEdit }),
            React.createElement(react_admin_1.Resource, { options: {
                    label: 'Нийлүүлэлт'
                }, name: "supply", icon: TrendingUp_1["default"], list: supply_1.SupplyList, show: supply_1.SupplyShow, create: supply_1.SupplyCreate, edit: supply_1.SupplyEdit }),
            React.createElement(react_admin_1.Resource, { options: {
                    label: 'Арилжаа'
                }, name: "trade", icon: AttachMoney_1["default"], list: trade_1.TradeList, show: trade_1.TradeShow, create: trade_1.TradeCreate, edit: trade_1.TradeEdit })));
    };
    return App;
}(React.Component));
exports["default"] = App;
