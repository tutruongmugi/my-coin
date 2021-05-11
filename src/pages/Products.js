import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { ADD_1_TO_PRODUCT_LIST } from "../lib/redux";
import { ProductItem } from "./ProductItem";
export function Products() {
  let { path, url } = useRouteMatch();
  let dispatch = useDispatch();
  let productList = useSelector((state) => state.product.list);

  return (
    <div>
      Danh muc san pham : {(productList ?? []).join(",")}
      <ul>
        <li>
          <Link to={`${url}/1`}>San pham 1</Link>
        </li>
        <li>
          <Link to={`${url}/2`}>San pham 2</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/:prId`}>
          <ProductItem />
        </Route>
      </Switch>
      <Button onClick={() => dispatch({ type: ADD_1_TO_PRODUCT_LIST })}>
        Click me to trigger Redux
      </Button>
    </div>
  );
}
