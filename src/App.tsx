import * as React from "react";
import { BondList, BondShow, BondCreate, BondEdit } from "./bond";
import { CustomerList, CustomerShow, CustomerCreate, CustomerEdit } from "./customers";
import { TicketList, TicketShow, TicketCreate, TicketEdit } from "./tickets";
import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
  RAFirebaseOptions
} from "react-admin-firebase";

import UserIcon from '@material-ui/icons/Group';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';

const config = require("./FIREBASE_CONFIG.js").firebaseConfig;

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
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
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
      </Admin>
    );
  }
}

export default App;
