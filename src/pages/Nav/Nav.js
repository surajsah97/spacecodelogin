import {
  AppBar,
  Box,
  Button,
  ListItemText,
  Container,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Toolbar,
  Typography,
  Drawer,
  ListItemIcon,
  Grid,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navcomp } from "./navcomp";




const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      
      backgroundColor:theme.palette.common.white
    },
    drawer: {
        zIndex:theme.zIndex.AppBar-1,
      width: 240,
      flexShrink: 0,
      background:theme.palette.primary,
      marginTop:100
    },
    drawerPaper: {
      width: 240,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    loginList:{
      backgroundColor:"primary"
    }
  }));

// const usestyles = makeStyles((theme) => ({
//     appBar: {
//         zIndex: theme.zIndex.drawer + 1,
//       },
//   simpleMenu: {
//     padding: "10px 20px",
//   },

//   accountIcon: {
//     marginRight: 8,
//   },
// //   subList: {
// //     display: "flex",
// //     flexDirection: "column",
// //   },
// list:{
// background:"primary"
// },
//   drawer: {
//     width: 250,
//   },
// }));
var a = [
  { lebel: "Dashboard" },
  { lebel: "Associate Unit" },
  { lebel: "Assign Unit" },
  { lebel: "Request Unit" },
];
export default function ButtonAppBar(props) {
 

  const classes = useStyles();
  const [open, setopen] = useState(null);
  const [openclose, setopenclose] = useState(null);
  const handleMenu = (event) => {
    setopenclose(event.currentTarget);
  };
  // const [anchorEl, setAnchorEl] = useState(null);
  // eslint-disable-next-line
  // const open = Boolean(anchorEl);

  const location=useLocation()
  console.log(location);

  return (
      <>
    <div className={classes.root}>
    <AppBar className={classes.appBar}>
        <Toolbar>
          <List className={classes.list}>
            <ListItem button onClick={handleMenu} className={classes.loginList}>
              
                    <Typography
                      variant="h6"
                      color="primary"
                    >
                      BLOODSPACE
                    </Typography>
             
            
            </ListItem>
          </List>
          <Typography
            variant="h6"
            color="primary"
            component="div"
            style={{ flexGrow: 1 }}
          >
            {location.pathname}
          </Typography>

          <Navcomp />
        </Toolbar>
      </AppBar>
      
      
      <Drawer
        open={Boolean(openclose)}
        variant='temprory'
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchorEl={openclose}
        onClose={() => {
          setopenclose(false);
        }}
        
      >
        <List className={classes.drawer}>
          {a.map((x, i) => {
            return (
              <Button>
                <ListItem keys={i}>
                  <ListItemIcon>{x.icon}</ListItemIcon>
                  <ListItemText>{x.lebel}</ListItemText>
                </ListItem>
              </Button>
            );
          })}
        </List>
      </Drawer>
      </div>
      </>
    
  );
}
