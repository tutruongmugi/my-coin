import { useRouteMatch } from "react-router";
import { CheckoutLayout } from "../layouts/CheckoutLayout";

export function ProductItem() {
  let { params } = useRouteMatch();

  return <CheckoutLayout>Product Item {params?.prId}</CheckoutLayout>;
}
