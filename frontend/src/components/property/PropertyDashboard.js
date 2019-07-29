import React, { Fragment } from "react";

import PropertyList from "./PropertyList";
import PropertyForm from "./PropertyForm";

export default function PropertyDashboard() {
  return (
    <Fragment>
      <PropertyForm />
      <PropertyList />
    </Fragment>
  );
}
