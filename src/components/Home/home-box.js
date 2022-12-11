import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './title';
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'


function preventDefault(event) {
  event.preventDefault();
}

export default function HomeBox({type, link, BoxIcon}) {
  const history = useHistory();

  return (
    <React.Fragment>
      {/* <Title>...........................<span className='wave'>💸</span></Title> */}
      <Divider />
      <br/><br/>
      <center>
      <BoxIcon />
      <br/><br/>
        <Typography
            color="textPrimary"
            variant="h6"
            component="p"
            
          >
        <Link color="primary" style={{ color:"black" }}  onClick={() => history.push(`${link}`)}>
        <b>{type}</b>
        </Link>
      </Typography></center>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      </Typography>
      {/* <div>
        <Link color="primary"  onClick={() => history.push(`${link}`)}>
          View
        </Link>
      </div> */}
    </React.Fragment>
  );
}