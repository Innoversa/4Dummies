import logo from './logo.svg';
import './App.css';
import Food from './Food.js';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';






function App() {
  const [cards, addCards] = React.useState([]);
  const [name, setName] = React.useState('Banana');
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  function deleteCard(ind){
    console.log("before: ");
    var temp = cards;
    console.log(cards);
    for( var i= 0; i < cards.length; i++){
      if(cards[i].key === ind){
        addCards(temp.splice(i,1));
      }
      break;
    }
   addCards(temp);
  }
  function addCard(food){
    var tempName = name;
    var tempDate = selectedDate;
    var tempArray = cards;
    var ind = cards.length;
    addCards([... cards, <Food text ={tempName}   key = {ind} exp ={tempDate.toString().substr(0,16)} buttonClick={()=> deleteCard(ind)}/> ]);
    console.log("in addCard function");
    console.log(cards);
    console.log(ind);
 
  }
  return (
    
    <div className="App">
      
      <div className="foodAdder">
      <h3>Enter food:</h3>
      <TextField id="standard-name" label="Food:" value={name} onChange={handleChange} />
      <div className="date">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      
    
      
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Expiration date:"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
       
   
    </MuiPickersUtilsProvider>
    </div>
    
    <Button variant="outlined" color="primary" onClick = {addCard}>
      Add food
    </Button>
      </div>
      <br />
      <br />
      <div className="Cards">
      {cards.map(function(item) {
      return item;
    })}
      
      </div>
      <div className="itemAdder"></div>

     
      
     
  
    </div>
  );
}

export default App;
