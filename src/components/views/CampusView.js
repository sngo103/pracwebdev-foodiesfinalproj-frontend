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

const CampusView = (props) => {
  const classes = useStyles();

  const { campus } = props;
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }
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
      <div style={{
          margin: "10px",
          padding: "10px",
        }} >
      <img src={campus.imageUrl || "https://i.pinimg.com/736x/d9/bb/75/d9bb75dce99590817108a2ac665a12b1.jpg"} style={{ display:"inline-block", border: "3px solid black", maxWidth: "400px", maxHeight:"400px", margin: "30px"}} alt="Campus Image" /><div
        style={{
          padding: "10px",
          float: "right"
        }}

      >
        
        <h1>{campus.name}</h1>
        <h2>{campus.address}</h2>
        <h2>{campus.description || "No description provided."}</h2>
      </div>
        <hr />
        <ul>
          {campus.students.map((student) => {
            let name = student.firstname + " " + student.lastname;
            return <li key={student.id}>{name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CampusView;
