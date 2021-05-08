import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

//do we need a class component or a functional component here? 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    backgroundColor: '#3A0CA3',
    height: '64px',
    shadows: ['none'],
  },
}));

const AllStudentsContainer = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Link  to={'/'} >
            <Button variant="contained" color="primary" style={{marginLeft: '10px', marginTop: '10px'}}>Home</Button>
        </Link>
        </AppBar>
      <h1 style={{textAlign: 'center', fontSize: '60px', fontFamily: 'Georgia', color: '#4CC9F0'}}>All Students View</h1>
    </div>
    
  );
};

export default AllStudentsContainer;