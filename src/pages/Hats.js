import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { HatItem } from "./HatItem";
export function Hats() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      Danh muc mu~
      <ul>
        <li>
          <Link to={`${url}/1`}>mu~ 1</Link>
        </li>
        <li>
          <Link to={`${url}/2`}>mu~ 2</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/:prId`}>
          <HatItem />
        </Route>
      </Switch>
    </div>
  );
}
