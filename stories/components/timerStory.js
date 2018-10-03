import React from "react";
import _ from "lodash";
import { storiesOf } from "@storybook/react";

import Timer from "../../src/landing/components/timer";

const defualtProps = {
  counter: 4
};

storiesOf("Timer", module).add("default", () => <Timer {...defualtProps} />);
