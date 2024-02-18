import {
  Admin,
  Resource,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { DataList } from "./list";
import { FullDataList } from "./fullList";
import { OLayout } from './OLayout';

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}  layout={OLayout}>
    <Resource name="tobuy" list={DataList} options={{ label: 'To Buy' }} />
    <Resource name="bought" list={DataList} options={{ label: 'Bought' }} />
    <Resource name="items" list={FullDataList} options={{ label: 'Items' }} />
      {/*<Resource name="users" list={DataList} />*/}
  </Admin>
);
