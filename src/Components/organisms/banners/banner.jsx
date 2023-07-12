import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import FeaturedPost from "./FeaturePost";
import { Box } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    title: "Introducción a la inteligencia artificial",
    date: "Jul 10, 2023",
    description:
      "Descubre los fundamentos de la inteligencia artificial y su aplicación en el desarrollo de software.",
    image: "https://source.unsplash.com/random?ai",
    imageLabel: "Inteligencia Artificial",
  },
  {
    title: "Las tendencias más importantes en el desarrollo web",
    date: "Jul 8, 2023",
    description:
      "Conoce las tendencias actuales en el desarrollo web y cómo pueden impactar tu trabajo como programador.",
    image: "https://source.unsplash.com/random?webdevelopment",
    imageLabel: "Desarrollo web",
  },
  {
    title: "Nuevas características en el lenguaje JavaScript",
    date: "Jul 5, 2023",
    description:
      "Descubre las últimas características introducidas en JavaScript y cómo pueden mejorar tu flujo de trabajo.",
    image: "https://source.unsplash.com/random?javascript",
    imageLabel: "JavaScript",
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
          <Box key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <FeaturedPost
                key={index}
                post={{
                  title: `${step.title}`,
                  date: `${step.date}`,
                  description: `${step.description}`,
                  image: `${step.image}`,
                  imageLabel: `${step.imageLabel}`,
                }}
              />
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        style={{ backgroundColor: "#f6f6f6" }}
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
