import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    backgroundColor: '#8e72b5',
    height: '64px',
    shadows: ['none'],
  },
}));

const AllCampusesView = (props) => {
  const classes = useStyles();
  if (!props.allCampuses.length) {
    return (
      <div>
        <AppBar position="static" elevation={0} className={classes.appBar}>
        <Link  to={'/'}>
          <Button variant="contained" color="primary" style={{marginLeft: '10px', marginTop: '10px'}}>Home</Button>
        </Link>
        </AppBar>
        <h1 style={{textAlign: 'center', fontSize: '60px', fontFamily: 'Georgia', color: 'black'}}>There are no campuses.</h1> 
      </div>
    );
  };

  return (
    <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{campus.description}</p>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;