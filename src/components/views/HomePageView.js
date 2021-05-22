import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif', 
    fontSize: '35px', 
    color: '#e1d8ed'
  },
  main:{
    display: 'flex',
    justifyContent: 'center',
  },
  appBar:{
    backgroundColor: '#8e72b5',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    margin: "auto",
    color: 'black',
    fontSize: '50px',
    fontFamily: 'Georgia'
  },
  links:{
    textDecoration: 'none',
  }

}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            CRUD App
          </Typography>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>
          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>  
      <div className={classes.greeting}><h1>Home Page</h1></div>
      <div className={classes.main}>
        <Link className={classes.links} to={'/campuses'} >
          <Button variant="contained" color="primary" style={{margin: '30px', fontSize: '60px'}}>
            All Campuses
          </Button>
        </Link>
        <Link className={classes.links} to={'/students'} >
          <Button variant="contained" color="primary" style={{margin: '30px', fontSize: '60px'}}>
            All Students
          </Button>
        </Link>
      </div>
      
    </div>
  );    
}




export default HomePageView;
