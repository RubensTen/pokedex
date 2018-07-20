import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
const Stepper = (props) => {
    return <MobileStepper
                steps={props.maxSteps}
                position="static"
                activeStep={props.active}
                nextButton={
                    <Button size="small" onClick={props.next} disabled={props.active === props.maxSteps - 1}>
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={props.prev} disabled={props.active === 0}>
                        <KeyboardArrowLeft />
                    </Button>
                }
            />
};

export default Stepper;