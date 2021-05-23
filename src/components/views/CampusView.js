import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
  accordion_root: {
    width: "50%",
    backgroundColor: "#8e72b5",
    borderRadius: "0",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const CampusView = (props) => {
  const classes = useStyles();
  console.log(props)
  const { campus } = props;

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
            campus.imageUrl ||
            "https://i.pinimg.com/736x/d9/bb/75/d9bb75dce99590817108a2ac665a12b1.jpg"
          }
          style={{
            display: "inline-block",
            border: "3px solid black",
            maxWidth: "400px",
            maxHeight: "400px",
            margin: "30px",
            float: "right",
          }}
          alt="Campus Image"
        />
        <div
          style={{
            padding: "10px",
          }}
        >
          <h1>
            {campus.name}
            <p style={{ fontSize: "24px", margin: 0 }}>{campus.address}</p>
          </h1>

          <h2>{campus.description || "No description provided."}</h2>
        </div>
        <hr />
        <h1>Students at {campus.name} </h1>
        <div className={classes.accordion_root}>
          <Accordion>
            <AccordionSummary
              expandIcon={
                <img
                  src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png"
                  height="30px"
                  width="30px"
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#3f51b5", color: "white" }}
            >
              <Typography
                className={classes.heading}
                style={{ color: "white" }}
              >
                Add Student
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <form
                  id="add_student_form"
                  className={classes.text_field_root}
                  autoComplete="off"
                  onSubmit={null}
                >
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{width:"300px"}}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <Button
                    type="submit"
                    form="add_student_form"
                    variant="contained"
                    color="primary"
                    style={{
                      position: "absolute",
                      right: "20px",
                      marginTop: "10px",
                      padding: "10px",
                    }}
                  >
                    Add Student
                  </Button>
                </form>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <ul>
          {campus.students.length == 0 ? (
            <h3
              style={{
                textAlign: "center",
                fontSize: "18px",
                fontFamily: "Georgia",
                color: "black",
                border: "2px solid black",
                padding: "10px",
                display: "inline-block",
              }}
            >
              There are no students at this campus.
            </h3>
          ) : (
            campus.students.map((student) => {
              let name = student.firstname + " " + student.lastname;
              return <li key={student.id}>{name}</li>;
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default CampusView;
