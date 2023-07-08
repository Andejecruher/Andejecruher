import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import FeaturedPost from "./FeaturePost";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco",
    imgPath:
      "https://thumbs.dreamstime.com/z/businessman-talking-smartphone-looking-graphs-african-46926302.jpg",
  },
  {
    label: "Bird",
    imgPath:
      "https://thumbs.dreamstime.com/z/coders-discussing-programming-language-confident-professional-multiethnic-coders-discussing-programming-language-hipster-young-men-122547964.jpg",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://thumbs.dreamstime.com/z/professional-development-programmer-working-programming-website-software-coding-technology-writing-codes-data-code-132331729.jpg",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://thumbs.dreamstime.com/z/herd-elephants-sri-lanka-panorama-pinnawala-elephant-orphanage-central-282268416.jpg",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <AutoPlaySwipeableViews
      // style={{ marginTop: '5%' }}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
               <FeaturedPost key={`Titulo de el contenido`} post={{
                title: 'Featured post',
                date: 'Nov 12',
                description:
                  'This is a wider card with supporting text below as a natural lead-in to additional content.',
                image: 'https://source.unsplash.com/random?wallpapers',
                imageLabel: 'Image Text',
              }} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
