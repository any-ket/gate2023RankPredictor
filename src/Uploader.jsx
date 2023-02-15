import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { ANS_KEY, convertTableToJSON } from './utils';

export default function UploadButtons() {
  const [marks, setMarks] = React.useState('');
  const handleChange = function (e) {
    let table = document.createElement('div');
    var fr = new FileReader();
    fr.onload = function (e) {
      table.innerHTML = e.target.result;
      document.getElementById('preview').appendChild(table);
      let responses = convertTableToJSON(document.getElementsByClassName('table table-hover table-bordered').item(0));
      let marks = 0;
      responses.forEach(resp => {
        let mrk = 0;
        if(+resp['Q. No'] <= 5 || (+resp['Q. No'] >= 11 && +resp['Q. No'] <= 35)) mrk = 1;
        else mrk = 2;
        let isNegative = resp['Q. Type'] === "MCQ";
        if(resp['Your Ans'] === ANS_KEY[+resp['Q. No']]) marks+= mrk;
        else if(isNegative) marks -= mrk*1/3;
      });
      setMarks(marks.toFixed(2));
    }
    fr.readAsText(e.target.files[0]);
  };
  return (
    <div>
      <Stack direction="column" alignItems="center" spacing={20}>
        <Button variant="contained" component="label">
          Upload HTML file of GATE Response page
          <input hidden accept=".html" type="file" onChange={handleChange}/>
        </Button>
        {
          marks
          ? <Card elevation={12} style={{"padding": "20px"}}> You have scored {marks} Marks!! </Card>
          : ''
        }
      </Stack>
    </div>
  );
}