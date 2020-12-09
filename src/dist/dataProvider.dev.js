"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _raDataFakerest = _interopRequireDefault(require("ra-data-fakerest"));

var _reactAdmin = require("react-admin");

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var disableFakeFetchRequestsLogs = true; // A function decorating a dataProvider for handling user profiles

var handleUserProfile = function handleUserProfile(dataProvider) {
  return function (verb, resource, params) {
    // We know we only GET or UPDATE the profile as there is only one for the current user
    // To showcase how we can do something completely different here, we'll store it in local storage
    // You can replace this with a customized fetch call to your own API route too
    if (resource === 'profile') {
      if (verb === _reactAdmin.GET_ONE) {
        var storedProfile = localStorage.getItem('profile');

        if (storedProfile) {
          return Promise.resolve({
            data: JSON.parse(storedProfile)
          });
        } // No profile yet, return a default one
        // It's important that we send the same id as requested in params
        // Indeed, react-admin will verify it and may throw an error if they are different
        // I don't have to do it when the profile exists as it will be included in the data stored in the local storage


        return Promise.resolve({
          data: {
            id: params.id,
            language: 'en'
          }
        });
      }

      if (verb === _reactAdmin.UPDATE) {
        localStorage.setItem('profile', JSON.stringify(params.data));
        return Promise.resolve({
          data: params.data
        });
      }
    } // Fallback to the dataProvider default handling


    return dataProvider(verb, resource, params);
  };
};

var _default = handleUserProfile((0, _raDataFakerest["default"])(_data["default"], disableFakeFetchRequestsLogs));

exports["default"] = _default;