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
exports.TicketEdit = exports.TicketCreate = exports.TicketShow = exports.TicketList = void 0;
// in src/posts.js
var React = require("react");
// tslint:disable-next-line:no-var-requires
var react_admin_1 = require("react-admin");
var react_final_form_1 = require("react-final-form");
var PostFilter = function (props) {
    return (React.createElement(react_admin_1.Filter, __assign({}, props),
        React.createElement(react_admin_1.TextInput, { label: "Search", source: "title", alwaysOn: true })));
};
exports.TicketList = function (props) { return (React.createElement(react_admin_1.List, __assign({}, props, { filters: React.createElement(PostFilter, null), exporter: false }),
    React.createElement(react_admin_1.Datagrid, null,
        React.createElement(react_admin_1.ReferenceField, { label: "\u04AE\u043D\u044D\u0442 \u0446\u0430\u0430\u0441", source: "bondId", reference: "bond" },
            React.createElement(react_admin_1.TextField, { source: "symbol" })),
        React.createElement(react_admin_1.ReferenceField, { label: "\u0425\u0430\u0440\u0438\u043B\u0446\u0430\u0433\u0447", source: "customerId", reference: "customer" },
            React.createElement(react_admin_1.TextField, { source: "lastname" })),
        React.createElement(react_admin_1.NumberField, { source: "ticketPrice", label: "\u0417\u0430\u0445\u0438\u0430\u043B\u0433\u044B\u043D \u04AF\u043D\u044D" }),
        React.createElement(react_admin_1.TextField, { source: "ticketQuantity", label: "\u0417\u0430\u0445\u0438\u0430\u043B\u0433\u044B\u043D \u0448\u0438\u0440\u0445\u044D\u0433" }),
        React.createElement(react_admin_1.ShowButton, { label: "\u04AE\u0437\u044D\u0445" }),
        React.createElement(react_admin_1.EditButton, { label: "\u0417\u0430\u0441\u0430\u0445" }),
        React.createElement(react_admin_1.DeleteButton, { label: "\u0423\u0441\u0442\u0433\u0430\u0445" })))); };
exports.TicketShow = function (props) { return (React.createElement(react_admin_1.Show, __assign({}, props),
    React.createElement(react_admin_1.SimpleShowLayout, null,
        React.createElement(react_admin_1.TextField, { source: "code", label: "\u041A\u043E\u0434" }),
        React.createElement(react_admin_1.TextField, { source: "symbol", label: "\u0421\u0438\u043C\u0431\u043E\u043B" }),
        React.createElement(react_admin_1.TextField, { source: "companyName", label: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043D\u044D\u0440" }),
        React.createElement(react_admin_1.TextField, { source: "companyType", label: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0430\u043D\u0433\u0438\u043B\u0430\u043B" }),
        React.createElement(react_admin_1.NumberField, { source: "quantity", label: "\u041D\u0438\u0439\u0442 \u0445\u0443\u0432\u044C\u0446\u0430\u0430\u043D\u044B \u0442.\u0448." }),
        React.createElement(react_admin_1.NumberField, { source: "offeredPrice", label: "\u0421\u0430\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u0441\u043E\u043D \u04AF\u043D\u044D" }),
        React.createElement(react_admin_1.NumberField, { source: "offeredQuantity", label: "\u0421\u0430\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u0441\u043E\u043D \u0448\u0438\u0440\u0445\u044D" }),
        React.createElement(react_admin_1.NumberField, { source: "govQuantity", label: "\u0422\u04E9\u0440\u0438\u0439\u043D \u044D\u0437\u044D\u043C\u0448\u043B\u0438\u0439\u043D \u0442\u043E\u043E" }),
        React.createElement(react_admin_1.NumberField, { source: "govPercent", label: "\u0422\u04E9\u0440\u0438\u0439\u043D \u044D\u0437\u044D\u043C\u0448\u043B\u0438\u0439\u043D \u0445\u0443\u0432\u044C" }),
        React.createElement(react_admin_1.TextField, { source: "tradeStatus", label: "\u0410\u0440\u0438\u043B\u0436\u0430\u0430\u043D\u044B \u044D\u0440\u0445" })))); };
var BondData = function (props) {
    var values = react_final_form_1.useFormState().values;
    return (React.createElement(React.Fragment, null, console.log('vlaues ', values)));
};
exports.TicketCreate = function (props) { return (React.createElement(react_admin_1.Create, __assign({}, props),
    React.createElement(react_admin_1.SimpleForm, { redirect: "list" },
        React.createElement(react_admin_1.ReferenceInput, { label: "\u04AE\u043D\u044D\u0442 \u0446\u0430\u0430\u0441", source: "bondId", reference: "bond" },
            React.createElement(react_admin_1.SelectInput, { optionText: function (record) {
                    var code = record.code, symbol = record.symbol, companyName = record.companyName, offeredPrice = record.offeredPrice, offeredQuantity = record.offeredQuantity;
                    return code + " | " + symbol + " | " + companyName + " | \u0428\u0438\u0440\u0445\u044D\u0433:" + offeredQuantity + " | \u04AE\u043D\u044D:" + offeredPrice;
                } })),
        React.createElement(react_admin_1.ReferenceInput, { label: "\u0425\u0430\u0440\u0438\u043B\u0446\u0430\u0433\u0447", source: "customerId", reference: "customer" },
            React.createElement(react_admin_1.SelectInput, { optionText: function (record) {
                    var lastname = record.lastname, firstname = record.firstname;
                    return lastname + " \u043E\u0432\u043E\u0433\u0442\u043E\u0439 " + firstname + " ";
                } })),
        React.createElement(react_admin_1.NumberInput, { source: "ticketPrice", label: "\u0417\u0430\u0445\u0438\u0430\u043B\u0433\u044B\u043D \u04AF\u043D\u044D" }),
        React.createElement(react_admin_1.NumberInput, { source: "ticketQuantity", label: "\u0417\u0430\u0445\u0438\u0430\u043B\u0433\u044B\u043D \u0448\u0438\u0440\u0445\u044D\u0433" })))); };
exports.TicketEdit = function (props) { return (React.createElement(react_admin_1.Edit, __assign({}, props),
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.ReferenceInput, { label: "\u04AE\u043D\u044D\u0442 \u0446\u0430\u0430\u0441", source: "bondId", reference: "bond" },
            React.createElement(react_admin_1.SelectInput, { optionText: function (record) {
                    var code = record.code, symbol = record.symbol, companyName = record.companyName, offeredPrice = record.offeredPrice, offeredQuantity = record.offeredQuantity;
                    return code + " | " + symbol + " | " + companyName + " | \u0428\u0438\u0440\u0445\u044D\u0433:" + offeredQuantity + " | \u04AE\u043D\u044D:" + offeredPrice;
                } })),
        React.createElement(react_admin_1.ReferenceInput, { label: "\u0425\u0430\u0440\u0438\u043B\u0446\u0430\u0433\u0447", source: "customerId", reference: "customer" },
            React.createElement(react_admin_1.SelectInput, { optionText: function (record) {
                    var lastname = record.lastname, firstname = record.firstname;
                    return lastname + " \u043E\u0432\u043E\u0433\u0442\u043E\u0439 " + firstname + " ";
                } })),
        React.createElement(react_admin_1.NumberInput, { source: "ticketPrice", label: "\u0417\u0430\u0445\u0438\u0430\u043B\u0433\u044B\u043D \u04AF\u043D\u044D" }),
        React.createElement(react_admin_1.NumberInput, { source: "ticketQuantity", label: "\u0417\u0430\u0445\u0438\u0430\u043B\u0433\u044B\u043D \u0448\u0438\u0440\u0445\u044D\u0433" })))); };
