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
exports.TradeEdit = exports.TradeCreate = exports.TradeShow = exports.TradeList = void 0;
// in src/posts.js
var React = require("react");
// tslint:disable-next-line:no-var-requires
var react_admin_1 = require("react-admin");
var react_final_form_1 = require("react-final-form");
// const PostFilter = (props: any) => {
//   return (<Filter {...props}>
//     <TextInput label="Хайлт хийх" source="bond" alwaysOn />
//   </Filter>);
// };
exports.TradeList = function (props) { return (React.createElement(react_admin_1.List, __assign({ title: "\u0410\u0440\u0438\u043B\u0436\u0430\u0430\u043D\u044B \u0436\u0430\u0433\u0441\u0430\u0430\u043B\u0442" }, props, { 
    // filters={<PostFilter />}
    exporter: false }),
    React.createElement(react_admin_1.Datagrid, null,
        React.createElement(react_admin_1.ReferenceField, { label: "\u04AE\u043D\u044D\u0442 \u0446\u0430\u0430\u0441", source: "bondId", reference: "bond" },
            React.createElement(react_admin_1.TextField, { source: "symbol" })),
        React.createElement(react_admin_1.DateField, { showTime: true, label: "\u042D\u0445\u043B\u044D\u0445 \u043E\u0433\u043D\u043E\u043E", source: 'start' }),
        React.createElement(react_admin_1.DateField, { showTime: true, label: "\u0414\u0443\u0443\u0441\u0430\u0445 \u043E\u0433\u043D\u043E\u043E", source: 'end' })))); };
exports.TradeShow = function (props) { return (React.createElement(react_admin_1.Show, __assign({ title: "\u0410\u0440\u0438\u043B\u0436\u0430\u0430" }, props),
    React.createElement(react_admin_1.SimpleShowLayout, null,
        React.createElement(react_admin_1.ReferenceField, { label: "\u04AE\u043D\u044D\u0442 \u0446\u0430\u0430\u0441", source: "bondId", reference: "bond" },
            React.createElement(react_admin_1.TextField, { source: "symbol" })),
        React.createElement(react_admin_1.DateField, { showTime: true, label: "\u042D\u0445\u043B\u044D\u0445 \u043E\u0433\u043D\u043E\u043E", source: 'start' }),
        React.createElement(react_admin_1.DateField, { showTime: true, label: "\u0414\u0443\u0443\u0441\u0430\u0445 \u043E\u0433\u043D\u043E\u043E", source: 'end' })))); };
var BondData = function (props) {
    var values = react_final_form_1.useFormState().values;
    return (React.createElement(React.Fragment, null, console.log('vlaues ', values)));
};
exports.TradeCreate = function (props) { return (React.createElement(react_admin_1.Create, __assign({ title: "\u0410\u0440\u0438\u043B\u0436\u0430\u0430" }, props),
    React.createElement(react_admin_1.SimpleForm, { redirect: "list" },
        React.createElement(react_admin_1.ReferenceInput, { label: "\u04AE\u043D\u044D\u0442 \u0446\u0430\u0430\u0441", source: "bondId", reference: "bond" },
            React.createElement(react_admin_1.SelectInput, { optionText: function (record) {
                    var code = record.code, symbol = record.symbol, companyName = record.companyName, offeredPrice = record.offeredPrice, offeredQuantity = record.offeredQuantity;
                    return code + " | " + symbol + " | " + companyName + " | \u0428\u0438\u0440\u0445\u044D\u0433:" + offeredQuantity + " | \u04AE\u043D\u044D:" + offeredPrice;
                } })),
        React.createElement(react_admin_1.DateTimeInput, { label: "\u042D\u0445\u043B\u044D\u0445 \u043E\u0433\u043D\u043E\u043E", source: 'start' }),
        React.createElement(react_admin_1.DateTimeInput, { label: "\u0414\u0443\u0443\u0441\u0430\u0445 \u043E\u0433\u043D\u043E\u043E", source: 'end' })))); };
exports.TradeEdit = function (props) { return (React.createElement(react_admin_1.Edit, __assign({ title: "\u0410\u0440\u0438\u043B\u0436\u0430\u0430" }, props),
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.ReferenceInput, { label: "\u04AE\u043D\u044D\u0442 \u0446\u0430\u0430\u0441", source: "bondId", reference: "bond" },
            React.createElement(react_admin_1.SelectInput, { optionText: function (record) {
                    var code = record.code, symbol = record.symbol, companyName = record.companyName, offeredPrice = record.offeredPrice, offeredQuantity = record.offeredQuantity;
                    return code + " | " + symbol + " | " + companyName + " | \u0428\u0438\u0440\u0445\u044D\u0433:" + offeredQuantity + " | \u04AE\u043D\u044D:" + offeredPrice;
                } })),
        React.createElement(react_admin_1.DateTimeInput, { label: "\u042D\u0445\u043B\u044D\u0445 \u043E\u0433\u043D\u043E\u043E", source: 'start' }),
        React.createElement(react_admin_1.DateTimeInput, { label: "\u0414\u0443\u0443\u0441\u0430\u0445 \u043E\u0433\u043D\u043E\u043E", source: 'end' })))); };
