import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Developers_Contributors() {
  return (
    <List sx={{ width: '100%', maxWidth: 1100, bgcolor: '#060606' }}>
      <ListItem alignItems="flex-start" style={{borderBottom : "1px solid #606060"}}>
          <Avatar alt="Remy Sharp" src="src\assets\Shashwat.jpg" style={{ width: "60px", height: "60px" }}>
              <img src="src\assets\Shashwat.jpg" alt="Shashwat" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Avatar>
        <ListItemText style={{color : "#fafafa"}}
          primary={
            <Typography 
                component="span" 
                variant="body2" 
                color="#005AB5"
                style={{ fontSize: '25px' , paddingBottom : "300px", paddingLeft: 17}}  // Adjust font size here
            >
                Shashwat Singh
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
                He is Shashwat Singh !
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" style={{ marginTop : "20px"}}/>
      <ListItem alignItems="flex-start" style={{borderBottom : "1px solid #606060"}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="src\assets\Avatar.png" style={{width : "60px" , height : "60px" , paddingRight : "15px"}}/>
        </ListItemAvatar>
        <ListItemText style={{color : "#fafafa"}}
          primary={
            <Typography 
                component="span" 
                variant="body2" 
                color="#005AB5"
                style={{ fontSize: '25px' , paddingBottom : "300px"}}  // Adjust font size here
            >
                Vibhor Phalke
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
                He is Vibhor Phalke !
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
