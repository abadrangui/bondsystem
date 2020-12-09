"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.CustomerEdit = exports.CustomerCreate = exports.CustomerShow = exports.CustomerList = void 0;
// in src/posts.js
var React = require("react");
// tslint:disable-next-line:no-var-requires
var react_admin_1 = require("react-admin");
var PostFilter = function (props) {
    return (React.createElement(react_admin_1.Filter, __assign({}, props),
        React.createElement(react_admin_1.TextInput, { label: "Search", source: "title", alwaysOn: true })));
};
exports.CustomerList = function (props) { return (React.createElement(react_admin_1.List, __assign({}, props, { filters: React.createElement(PostFilter, null), exporter: false }),
    React.createElement(react_admin_1.Datagrid, null,
        React.createElement(react_admin_1.TextField, { source: "lastname", label: "\u041E\u0432\u043E\u0433" }),
        React.createElement(react_admin_1.TextField, { source: "firstname", label: "\u041D\u044D\u0440" }),
        React.createElement(react_admin_1.TextField, { source: "companyName", label: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043D\u044D\u0440" }),
        React.createElement(react_admin_1.TextField, { source: "regNo", label: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0439\u043D \u0434\u0443\u0433\u0430\u0430" }),
        React.createElement(react_admin_1.TextField, { source: "accountName", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u043D\u044D\u0440" }),
        React.createElement(react_admin_1.TextField, { source: "accountNumber", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u0434\u0443\u0433\u0430\u0430\u0440" }),
        React.createElement(react_admin_1.NumberField, { source: "balance", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u04AF\u043B\u0434\u044D\u0433\u0434\u044D\u043B" })))); };
exports.CustomerShow = function (props) { return (React.createElement(react_admin_1.Show, __assign({}, props),
    React.createElement(react_admin_1.SimpleShowLayout, null,
        React.createElement(react_admin_1.TextField, { source: "lastname", label: "\u041E\u0432\u043E\u0433" }),
        React.createElement(react_admin_1.TextField, { source: "firstname", label: "\u041D\u044D\u0440" }),
        React.createElement(react_admin_1.TextField, { source: "companyName", label: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043D\u044D\u0440" }),
        React.createElement(react_admin_1.TextField, { source: "regNo", label: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0439\u043D \u0434\u0443\u0433\u0430\u0430" }),
        React.createElement(react_admin_1.TextField, { source: "accountName", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u043D\u044D\u0440" }),
        React.createElement(react_admin_1.TextField, { source: "accountNumber", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u0434\u0443\u0433\u0430\u0430\u0440" }),
        React.createElement(react_admin_1.NumberField, { source: "balance", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u04AF\u043B\u0434\u044D\u0433\u0434\u044D\u043B" })))); };
exports.CustomerCreate = function (props) { return (React.createElement(react_admin_1.Create, __assign({}, props),
    React.createElement(react_admin_1.SimpleForm, { redirect: "list" },
        React.createElement(react_admin_1.TextInput, { source: "lastname", label: "\u041E\u0432\u043E\u0433" }),
        React.createElement(react_admin_1.TextInput, { source: "firstname", label: "\u041D\u044D\u0440" }),
        React.createElement(react_admin_1.TextInput, { source: "companyName", label: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043D\u044D\u0440" }),
        React.createElement(react_admin_1.TextInput, { source: "regNo", label: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0439\u043D \u0434\u0443\u0433\u0430\u0430" }),
        React.createElement(react_admin_1.TextInput, { source: "accountName", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u043D\u044D\u0440" }),
        React.createElement(react_admin_1.NumberInput, { source: "accountNumber", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u0434\u0443\u0433\u0430\u0430\u0440" }),
        React.createElement(react_admin_1.NumberInput, { source: "balance", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u04AF\u043B\u0434\u044D\u0433\u0434\u044D\u043B" })))); };
exports.CustomerEdit = function (props) { return (React.createElement(react_admin_1.Edit, __assign({}, props),
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.TextInput, { source: "lastname", label: "\u041E\u0432\u043E\u0433" }),
        React.createElement(react_admin_1.TextInput, { source: "firstname", label: "\u041D\u044D\u0440" }),
        React.createElement(react_admin_1.TextInput, { source: "companyName", label: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043D\u044D\u0440" }),
        React.createElement(react_admin_1.TextInput, { source: "regNo", label: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0439\u043D \u0434\u0443\u0433\u0430\u0430" }),
        React.createElement(react_admin_1.TextInput, { source: "accountName", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u043D\u044D\u0440" }),
        React.createElement(react_admin_1.NumberInput, { source: "accountNumber", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u0434\u0443\u0433\u0430\u0430\u0440" }),
        React.createElement(react_admin_1.NumberInput, { source: "balance", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u04AF\u043B\u0434\u044D\u0433\u0434\u044D\u043B" })))); };
