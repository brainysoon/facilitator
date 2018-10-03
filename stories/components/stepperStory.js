import React from "react";
import _ from "lodash";
import { storiesOf } from "@storybook/react";

import Stepper from "../../src/landing/components/stepper";

const defualtProps = {
  activeStep: 1,
  steps: 4,
  handleNext: _.noop
};

storiesOf("Stepper", module)
  .add("default", () => <Stepper {...defualtProps} />)
  .add("disabled", () => <Stepper {...defualtProps} activeStep={3} />);
