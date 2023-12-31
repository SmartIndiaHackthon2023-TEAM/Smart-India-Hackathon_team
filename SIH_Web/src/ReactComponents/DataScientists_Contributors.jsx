import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function DataScientists_Contributors() {
  return (
    <List sx={{ width: '100%', maxWidth: 1100, bgcolor: '#060606' }}>
      <ListItem alignItems="flex-start" style={{borderBottom : "1px solid #606060"}}>
        <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="src\assets\Snehal.jpg" style={{ width: "60px", height: "60px" }}>
                <img src="src\assets\Snehal.jpg" alt="Snehal" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Avatar>
        </ListItemAvatar>
        <ListItemText style={{color : "#fafafa"}}
          primary={
            <Typography 
                component="span" 
                variant="body2" 
                color="#D0C900"
                style={{ fontSize: '25px' , paddingBottom : "300px", paddingLeft: 17}}  // Adjust font size here
            >
                Snehal Saurabh
            </Typography>
        }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                style={{ marginLeft : "25px" , marginTop : "20px"}}
                component="span"
                variant="body2"
                color="#fafafa"
              >
                He is Snehal Saurabh !
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" style={{ marginTop : "20px"}}/>
      <ListItem alignItems="flex-start" style={{borderBottom : "1px solid #606060"}}>
          <Avatar alt="Remy Sharp" src="src\assets\Shivansh.jpg" style={{ width: "60px", height: "60px" }}>
              <img src="src\assets\Shivansh.jpg" alt="Shashwat" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Avatar>
        <ListItemText style={{color : "#fafafa"}}
          primary={
            <Typography 
                component="span" 
                variant="body2" 
                color="#D0C900"
                style={{ fontSize: '25px' , paddingBottom : "300px", paddingLeft: 17}}  // Adjust font size here
            >
                Shivansh Mahajan
            </Typography>
        }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                style={{ marginLeft : "25px" , marginTop : "20px"}}
                component="span"
                variant="body2"
                color="#fafafa"
              >
                He is Shivansh Mahajan !
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" style={{ marginTop : "20px"}}/>
      <ListItem alignItems="flex-start" style={{borderBottom : "1px solid #606060"}}>
          <Avatar alt="Remy Sharp" src="src\assets\Harsh.jpg" style={{ width: "60px", height: "60px" }}>
              <img src="src\assets\Harsh.jpg" alt="Shashwat" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Avatar>
        <ListItemText style={{color : "#fafafa"}}
          primary={
            <Typography 
                component="span" 
                variant="body2" 
                color="#D0C900"
                style={{ fontSize: '25px' , paddingBottom : "300px", paddingLeft: 17}}  // Adjust font size here
            >
                Harsh Patel
            </Typography>
        }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                style={{ marginLeft : "25px" , marginTop : "20px"}}
                component="span"
                variant="body2"
                color="#fafafa"
              >
                He is Harsh Patel !
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
