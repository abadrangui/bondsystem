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
exports.BalanceEdit = exports.BalanceCreate = exports.BalanceShow = exports.BalanceList = void 0;
// in src/posts.js
var React = require("react");
// tslint:disable-next-line:no-var-requires
var react_admin_1 = require("react-admin");
var react_final_form_1 = require("react-final-form");
var PostFilter = function (props) {
    return (React.createElement(react_admin_1.Filter, __assign({}, props),
        React.createElement(react_admin_1.TextInput, { label: "Search", source: "title", alwaysOn: true })));
};
exports.BalanceList = function (props) { return (React.createElement(react_admin_1.List, __assign({ title: "\u04AE\u043B\u0434\u044D\u0433\u0434\u044D\u043B \u0448\u0430\u043B\u0433\u0430\u0445" }, props, { filters: React.createElement(PostFilter, null), exporter: false }),
    React.createElement(react_admin_1.Datagrid, null,
        React.createElement(react_admin_1.ReferenceField, { label: "\u0425\u0430\u0440\u0438\u043B\u0446\u0430\u0433\u0447", source: "customerId", reference: "customer" },
            React.createElement(react_admin_1.TextField, { source: "lastname" })),
        React.createElement(react_admin_1.TextField, { source: "accountName", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u043D\u044D\u0440" }),
        React.createElement(react_admin_1.TextField, { source: "accountNumber", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u0434\u0443\u0433\u0430\u0430\u0440" }),
        React.createElement(react_admin_1.NumberField, { source: "balance", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u04AF\u043B\u0434\u044D\u0433\u0434\u044D\u043B" }),
        React.createElement(react_admin_1.ShowButton, { label: "\u04AE\u0437\u044D\u0445" }),
        React.createElement(react_admin_1.EditButton, { label: "\u0417\u0430\u0441\u0430\u0445" }),
        React.createElement(react_admin_1.DeleteButton, { label: "\u0423\u0441\u0442\u0433\u0430\u0445" })))); };
exports.BalanceShow = function (props) { return (React.createElement(react_admin_1.Show, __assign({ title: "\u04AE\u043B\u0434\u044D\u0433\u043B\u044D\u043B" }, props),
    React.createElement(react_admin_1.SimpleShowLayout, null,
        React.createElement(react_admin_1.ReferenceField, { label: "\u0425\u0430\u0440\u0438\u043B\u0446\u0430\u0433\u0447", source: "customerId", reference: "customer" },
            React.createElement(react_admin_1.TextField, { source: "lastname" })),
        React.createElement(react_admin_1.TextField, { source: "accountName", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u043D\u044D\u0440" }),
        React.createElement(react_admin_1.TextField, { source: "accountNumber", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u0434\u0443\u0433\u0430\u0430\u0440" }),
        React.createElement(react_admin_1.NumberField, { source: "balance", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u04AF\u043B\u0434\u044D\u0433\u0434\u044D\u043B" })))); };
var BondData = function (props) {
    var values = react_final_form_1.useFormState().values;
    return (React.createElement(React.Fragment, null, console.log('vlaues ', values)));
};
exports.BalanceCreate = function (props) { return (React.createElement(react_admin_1.Create, __assign({ title: "\u04AE\u043B\u0434\u044D\u0433\u043B\u044D\u043B" }, props),
    React.createElement(react_admin_1.SimpleForm, { redirect: "list" },
        React.createElement(react_admin_1.ReferenceInput, { label: "\u0425\u0430\u0440\u0438\u043B\u0446\u0430\u0433\u0447", source: "customerId", reference: "customer" },
            React.createElement(react_admin_1.SelectInput, { optionText: function (record) {
                    var lastname = record.lastname, firstname = record.firstname;
                    return lastname + " \u043E\u0432\u043E\u0433\u0442\u043E\u0439 " + firstname + " ";
                } })),
        React.createElement(react_admin_1.TextInput, { source: "accountName", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u043D\u044D\u0440" }),
        React.createElement(react_admin_1.NumberInput, { source: "accountNumber", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u0434\u0443\u0433\u0430\u0430\u0440" }),
        React.createElement(react_admin_1.NumberInput, { source: "balance", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u04AF\u043B\u0434\u044D\u0433\u0434\u044D\u043B" })))); };
exports.BalanceEdit = function (props) { return (React.createElement(react_admin_1.Edit, __assign({ title: "\u04AE\u043B\u0434\u044D\u0433\u043B\u044D\u043B" }, props),
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.ReferenceInput, { label: "\u0425\u0430\u0440\u0438\u043B\u0446\u0430\u0433\u0447", source: "customerId", reference: "customer" },
            React.createElement(react_admin_1.SelectInput, { optionText: function (record) {
                    var lastname = record.lastname, firstname = record.firstname;
                    return lastname + " \u043E\u0432\u043E\u0433\u0442\u043E\u0439 " + firstname + " ";
                } })),
        React.createElement(react_admin_1.TextInput, { source: "accountName", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u043D\u044D\u0440" }),
        React.createElement(react_admin_1.NumberInput, { source: "accountNumber", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u0434\u0443\u0433\u0430\u0430\u0440" }),
        React.createElement(react_admin_1.NumberInput, { source: "balance", label: "\u0414\u0430\u043D\u0441\u043D\u044B \u04AF\u043B\u0434\u044D\u0433\u0434\u044D\u043B" })))); };
