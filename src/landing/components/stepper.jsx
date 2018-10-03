// @flow

import React, { Component } from 'react';
import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import StepperStyles from '../styles/stepperStyles';

type Props = {
  activeStep: number,
  steps: number,
  classes: *,
  handleNext: () => void
};

class Stepper extends Component<Props> {
  _renderNextButton = () => {
    const { handleNext, activeStep, steps } = this.props;

    return (
      <Button
        size="small"
        onClick={handleNext}
        disabled={activeStep === steps - 1}
      >
        <KeyboardArrowRight />
      </Button>
    );
  };

  render() {
    const { classes, activeStep, steps } = this.props;

    return (
      <MobileStepper
        variant="dots"
        steps={steps}
        position="bottom"
        activeStep={activeStep}
        className={classes.root}
        nextButton={this._renderNextButton()}
      />
    );
  }
}

const enhancers = _.flowRight(withStyles(StepperStyles));

export default enhancers(Stepper);
