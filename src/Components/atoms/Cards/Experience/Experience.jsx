import React from "react";
import { Box } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

const Experience = () => {
  return (
    <Box style={{ marginTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Stack
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5" component="div">
                Educación
              </Typography>
            </Stack>
          </Box>
          <Timeline >
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                08/2022 - Actualidad
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <Avatar
                    alt="Universidad IEU"
                    src="https://media.licdn.com/dms/image/C4E0BAQFZXeuIoKuK-Q/company-logo_200_200/0/1641230608951?e=1697068800&v=beta&t=ngS0JK_mdwczz49TlaERKphpjQJtLuvHCCpd5Jw1V10"
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Universidad IEU
                </Typography>
                <Typography>Ing. En desarrollo de software</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              >
                2010 - 2013
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <Avatar
                    alt="Cbtis 169"
                    src="https://w7.pngwing.com/pngs/85/563/png-transparent-cbtis-32-ricardo-flores-magon-education-business-administration-student-cbtis-blue-text-logo-thumbnail.png"
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  CBTiS 169
                </Typography>
                <Typography>Técnico Informático</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Stack
              spacing={2}
              justifyContent="center"
              alignItems="center"
              color={"#000"}
            >
              <Typography variant="h5" component="div">
                Experiencia laboral
              </Typography>
            </Stack>
          </Box>
          <Timeline>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                05/2022 - 04/2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <Avatar
                    alt="TheRocketCode"
                    src="https://therocketcode.com/Social_Logo.png"
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  The RocketCode
                </Typography>
                <Typography>Full Stack Developer</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              >
                01/2016 - 01/2019
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <Avatar
                    alt="Creativa Softline"
                    src="data:image/png;base64,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"
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Creativa Softline
                </Typography>
                <Typography>Diseñador Web</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
