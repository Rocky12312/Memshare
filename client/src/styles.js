import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 75,
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 13px 5px 2px rgba(255, 105, 135, .3)',
  },
  //heading: {
    //color: 'rgba(255,99,71, 1)',
  //},
  typography :{
    fontFamily: "Arial",
    color: 'rgba(255, 0, 0, 0)',
    fontSize:70,
    fontStyle: 'oblique',
  },
  image: {
    marginLeft: '15px',
  },
}));
