import React, { Component, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { View, StyleSheet, TextInput } from "react-native";
import { Stack } from "@mui/material";
import ListCard from "./ListRoomCard";

function BasicCard() {
  const [value, setvalue] = useState("")
    const [inputArr, setinputArr] = useState([])

    function submitRoom(e) {
        setvalue(e.target.value);
    }
    const addRoom = ()=>{
        if(!value){
            alert("Please add some Note")
        }
        setinputArr(...inputArr,value);
        
    }
  return (
    <View>
      <Card sx={{ minWidth: 275 }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <CardContent>
            <Typography variant="h6" component="div">
              Please Create a Room
            </Typography>
            <hr />
            <br />
            <TextField
              style={styles.textbox}
              required
              name="room"
              id="outlined-required"
              placeholder="Enter the room name"
              variant="outlined"
              onChange={submitRoom}
            />
          </CardContent>
          <CardActions>
            <Button size="large" variant="outlined" onClick={addRoom}>
              Submit
            </Button>
          </CardActions>
        </Stack>
      </Card>
      <View style={styles.hide}>
        <ListCard data="gaurav" />
      </View>
    </View>
  );
 
}
export default BasicCard;

const styles = StyleSheet.create({
  textbox: {
    marginLeft: "3%",
    borderWidth: "1%",
    borderColor: "black",
  },
  hide:{
    display: "none",
  }
});
