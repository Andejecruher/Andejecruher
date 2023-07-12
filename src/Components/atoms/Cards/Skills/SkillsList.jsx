import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import CircularWithValueLabel from "../../Progress/CircularProgress.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faPhp, faLaravel, faGitAlt, faVuejs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { SiMysql, SiMongodb, SiGraphql } from "react-icons/si";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const skills = [
    { name: "HTML", icon: faHtml5, percentage: 100, color: "#E34C26" },
    { name: "CSS", icon: faCss3Alt, percentage: 100, color: "#2965F1" },
    { name: "JavaScript", icon: faJs, percentage: 100, color: "#F7DF1E" },
    { name: "PHP", icon: faPhp, percentage: 100, color: "#777BB4" },
    { name: "Laravel", icon: faLaravel, percentage: 90, color: "#FF2D20" },
    { name: "Git", icon: faGitAlt, percentage: 100, color: "#F05032" },
    { name: "VueJs", icon: faVuejs, percentage: 90, color: "#4FC08D" },
    { name: "ReactJS", icon: faReact, percentage: 90, color: "#61DAFB" },
    { name: "NodeJs", icon: faNodeJs, percentage: 80, color: "#339933" },
    { name: "MySQL", icon: <SiMysql />, percentage: 90, color: "#4479A1" },
    { name: "MongoDB", icon: <SiMongodb />, percentage: 80, color: "#47A248" },
    { name: "GraphQL", icon: <SiGraphql />, percentage: 80, color: "#E10098" },
  ];
  

const SkillsList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <List component="nav" aria-label="Skills List">
              <ListItem>
                <ListItemIcon style={{color: `${skill.color}`, fontSize: '1.9em' }}>
                    {index > 8 ? skill.icon : <FontAwesomeIcon icon={skill.icon} />}
                </ListItemIcon>
                <ListItemText primary={skill.name} />
                <CircularWithValueLabel value={skill.percentage} />
              </ListItem>
            </List>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SkillsList;
