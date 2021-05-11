import { useRouteMatch } from "react-router";
import { CheckoutLayout } from "../layouts/CheckoutLayout";

export function HatItem() {
  let { params } = useRouteMatch();

  return <CheckoutLayout>Hat Item {params?.prId}</CheckoutLayout>;
}
