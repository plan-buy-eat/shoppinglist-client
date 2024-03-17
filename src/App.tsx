import {
  Admin,
  Resource,
  EditGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { DataList } from "./list";
import { FullDataList } from "./fullList";
import { InventoryList } from "./inventoryList";
import { InventoryCreate, InventoryEdit } from './inventory';
import { OLayout } from './OLayout';

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}  layout={OLayout}>
    <Resource name="items" list={FullDataList} options={{ label: 'Items' }} />
    <Resource name="tobuy" list={DataList} options={{ label: 'To Buy' }} />
    <Resource name="bought" list={DataList} options={{ label: 'Bought' }} />
    <Resource name="inventory" list={InventoryList} options={{ label: 'Inventory' }} create={InventoryCreate} edit={InventoryEdit} />
      {/*<Resource name="users" list={DataList} />*/}
  </Admin>
);

