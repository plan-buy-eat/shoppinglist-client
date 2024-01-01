import {
  Admin,
  Resource,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { DataList } from "./list";
import { OLayout } from './OLayout';

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}  layout={OLayout}>
    <Resource name="items" list={DataList} />
      {/*<Resource name="users" list={DataList} />*/}
  </Admin>
);
