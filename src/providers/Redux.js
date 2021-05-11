import { Provider } from "react-redux";
import { store } from "../lib/redux";
import { Routers } from "./Routers";

export function ReduxApp() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}
