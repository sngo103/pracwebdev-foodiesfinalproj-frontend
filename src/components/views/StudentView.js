import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  appBar: {
    backgroundColor: "#8e72b5",
    height: "64px",
    shadows: ["none"],
  },
  media: {
    height: 140,
  },
}));

const StudentView = (props) => {
  const classes = useStyles();
  const { student } = props;

  return (
    <div>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Link to={"/"}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            Home
          </Button>
        </Link>
      </AppBar>
      <div
        style={{
          margin: "10px",
          padding: "10px",
        }}
      >
      <img
          src={
            student.imageUrl ||
            "https://i.pinimg.com/736x/d9/bb/75/d9bb75dce99590817108a2ac665a12b1.jpg"
          }
          style={{
            display: "inline-block",
            border: "3px solid black",
            maxWidth: "400px",
            maxHeight: "400px",
            margin: "30px",
            float: "right"
          }}
          alt="Student Image"
        />
        <h1>{student.firstname} {student.lastname}</h1>
        <h2>Email: {student.email} <br />
        GPA: {student.gpa}</h2>
      </div>
    </div>
  );
};

export default StudentView;
