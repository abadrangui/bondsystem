import * as React from "react";
import { BondList, BondShow, BondCreate, BondEdit } from "./bond";
import { CustomerList, CustomerShow, CustomerCreate, CustomerEdit } from "./customers";
import { TicketList, TicketShow, TicketCreate, TicketEdit } from "./tickets";
import { TradeList, TradeShow, TradeCreate, TradeEdit } from "./trade";
import { SupplyList, SupplyShow, SupplyCreate, SupplyEdit } from "./supply";
import { BalanceList, BalanceShow, BalanceCreate, BalanceEdit } from "./balance";
import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
  RAFirebaseOptions
} from "react-admin-firebase";

import UserIcon from '@material-ui/icons/Group';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import LoginScreen from './screens/LoginScreen';

import './App.css';

const config = require("./FIREBASE_CONFIG.js").firebaseConfig;
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    // type: 'light', // Switching the dark mode on is a single property value change.
  },
});

const options: RAFirebaseOptions = {
  logging: true,
  rootRef: "root_collection/some_document",
  watch: ["bond"],
};

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

class App extends React.Component {
  render() {
    return (
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        loginPage={LoginScreen}
        // theme={theme}
        title="Нэвтрэх хэсэг"
      >
        <Resource
          options={{
            label: 'Үнэт цаас'
          }}
          name="bond"
          icon={AssignmentIcon}
          list={BondList}
          show={BondShow}
          create={BondCreate}
          edit={BondEdit}
        />
        <Resource
          options={{
            label: 'Харилцагч'
          }}
          name="customer"
          icon={UserIcon}
          list={CustomerList}
          show={CustomerShow}
          create={CustomerCreate}
          edit={CustomerEdit}
        />
        <Resource
          options={{
            label: 'Захиалга'
          }}
          name="ticket"
          icon={ConfirmationNumberIcon}
          list={TicketList}
          show={TicketShow}
          create={TicketCreate}
          edit={TicketEdit}
        />
        <Resource
          options={{
            label: 'Үлдэгдэл шалгах'
          }}
          name="balance"
          icon={AccountBalanceWalletIcon}
          list={BalanceList}
          show={BalanceShow}
          create={BalanceCreate}
          edit={BalanceEdit}
        />
        <Resource
          options={{
            label: 'Нийлүүлэлт'
          }}
          name="supply"
          icon={TrendingUpIcon}
          list={SupplyList}
          show={SupplyShow}
          create={SupplyCreate}
          edit={SupplyEdit}
        />
        <Resource
          options={{
            label: 'Арилжаа'
          }}
          name="trade"
          icon={AttachMoneyIcon}
          list={TradeList}
          show={TradeShow}
          create={TradeCreate}
          edit={TradeEdit}
        />
      </Admin>
    );
  }
}

export default App;
