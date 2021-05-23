import axios from 'axios';
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
  text_field_root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  card_root: {
    maxWidth: 345,
  },
  accordion_root: {
    width: "100%",
    backgroundColor: "#8e72b5",
    borderRadius: "0",
  },
  appBar: {
    backgroundColor: "#8e72b5",
    height: "64px",
    shadows: ["none"],
  },
  media: {
    height: 140,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

async function addStudent(event){
  try {
    const response = await axios.post('/api/students', {
      firstname: event.target.student_firstname.value,
      lastname: event.target.student_lastname.value,
      email: event.target.student_email.value,
      imageUrl: event.target.student_image.value,
      gpa: event.target.student_gpa.value,
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

const AllStudentsView = (props) => {
  const classes = useStyles();
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
            <Typography className={classes.heading} style={{ color: "white" }}>
              Add Student
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <form
                id="add_student_form"
                className={classes.text_field_root}
                autoComplete="off"
                onSubmit={addStudent}
              >
                <TextField required name="student_firstname" label="First Name" />
                <TextField required name="student_lastname" label="Last Name" />
                <TextField required type="email" name="student_email" label="Email" />
                <TextField name="student_image" label="Image Url" />
                <TextField type="number" name="student_gpa" label="GPA" InputProps={{ inputProps: { min: 0.00, max: 4.00, step: 0.01 } }} />                
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

      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontFamily: "Georgia",
          color: "black",
        }}
      >
        All Students
      </h1>
      {props.allStudents.length == 0 ? (
        <h3
          style={{
            textAlign: "center",
            fontSize: "18px",
            fontFamily: "Georgia",
            color: "black",
            border: "2px solid black",
            width: "300px",
            margin: "auto",
            width: "50%",
            padding: "10px",
          }}
        >
          There are no students registered.
        </h3>
      ) : (
        props.allStudents.map((student) => (
          <div key={student.id} style={{ margin: "15px", display: "inline-block", width: "300px"}}>
            <Card className={classes.card_root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={
                    student.imageUrl ||
                    "https://i.pinimg.com/736x/d9/bb/75/d9bb75dce99590817108a2ac665a12b1.jpg"
                  }
                  title="Campus Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {student.firstname} {student.lastname}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {student.email || "No email provided."}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {student.gpa || "No gpa provided."}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href={`/student/${student.id}`}
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  To Student Profile
                </Button>
              </CardActions>
            </Card>
          </div>
        ))
      )}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;