import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
  
  export default function OutlinedCard2() {
    return (
      <Box sx={{ width: 350 , marginLeft : "45vh", marginTop : "30px"}}>
        <Card>
            <React.Fragment>
                <CardContent sx={{bgcolor : "#060606"}} style={{border : "1px solid #ffffff"}}>
                    <Typography variant="h4" component="div" sx={{color : "#ffffff"}} style={{ fontSize : "1.5rem" , lineHeight : "2.5rem" , fontWeight : "600" , fontFamily : "serif , monospace" , color : "green"}}>
                    Fishy is the best
                    </Typography> 
                </CardContent>
            </React.Fragment>
        </Card>
      </Box>
    );
  }