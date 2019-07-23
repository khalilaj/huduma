import React, { Fragment } from "react";

import SystemCropAddForm from "./SystemCropAddForm";
import SystemCrop from "./SystemCrop";

export default function AgreementDashboard() {
  return (
    <Fragment>
      <SystemCropAddForm />
      <SystemCrop />
    </Fragment>
  );
}
