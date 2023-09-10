import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
    <React.Fragment>
      <CardContent sx={{bgcolor : "#060606"}}>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h4" component="div" sx={{color : "#ffffff"}} style={{ fontSize : "2.25rem" , lineHeight : "2.5rem" , fontWeight : "600" , fontFamily : "serif , monospace"}}>
        Real-time phishing and fraudulent website detection.
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="#d4d4d4">
          adjective
        </Typography> */}
        <Typography variant="body2" sx={{ marginTop: 4}} style={{ fontSize : "16px" , lineHeight : "24px"}} color="#d4d4d4">
        A well-trained AI model can significantly improve the detection of phishing sites. It's essential to constantly update the model, ensure you have good sources of genuine and phishing site data, and have a usable interface for end-users.
          <br />
          {/* {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions sx={{bgcolor : "#060606"}}>
        <Button variant='contained' size="small" style={{ marginLeft : "8px" , padding : "10px 40px 10px 40px" , borderRadius : "6px" , backgroundColor : "#fafafa" , color : "#171717"}} onClick={() => {window.location = "https://github.com/Vibgitcode27/Smart-India-Hackathon_team/blob/main/README.md"}}>Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  
  export default function OutlinedCard() {
    return (
      <Box sx={{ width: 350}}>
        <Card>{card}</Card>
      </Box>
    );
  }