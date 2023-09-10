import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Contributors() {
  return (
    <List sx={{ width: '100%', maxWidth: 1100, bgcolor: '#060606' }}>
      <ListItem alignItems="flex-start" style={{borderBottom : "1px solid #A1A1A1"}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText style={{color : "#fafafa"}}
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#fafafa"
              >
                Ali Connors
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText style={{color : "#fafafa"}}
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#fafafa"
              >
                to Scott, Alex, Jennifer
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar >
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"/>
        </ListItemAvatar>
        <ListItemText style={{color : "#fafafa"}}
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#fafafa"
              >
                Sandra Adams
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
