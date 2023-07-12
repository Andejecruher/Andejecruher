import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    backgroundColor: "light",
    borderRadius: "10px",
    padding: theme.spacing(2),
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "light",
    },
  },
  imgHover: {
    "&:hover": {
        transform: "scale(1.1)",
        transition: "transform 0.3s ease",
    },
    },
}));


export default useStyles;
