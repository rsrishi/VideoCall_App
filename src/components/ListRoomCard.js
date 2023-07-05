import * as React from "react";
import { View, Text } from "react-native";
import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function ListCard(props) {

  const [myData, setMyData] = React.useState("");

  // state = {
  //     name : ''
  // };

//  myArray.push(props.data)
// ( ()=>{
//   this.setState({name :props.data})
// });
React.useEffect(() => {
  setMyData(props.data);
})
// ;


// return (
//   <View>
//   <div>
//   <ul>
//   {
//     props.data
//     // .map((val,ind)=>{
//     //   return <li key={ind}>{val}</li>
//     // })
//   }
//   </ul>
// </div>
//   </View>
// )

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
          <Text>{props}</Text>
            <Typography variant="h6" component="div">
              Let's join the Rooms
            </Typography>
            <hr />
              {/* <ul>

              {props.map((val, ind) => {
                return <li key={ind}>{val}</li>;
                // return(
                  //   "<ListItem>" +
                  //   "<ListItemButton>"`<ListItemText primary=${{ val }}/>` +
                  //   "</ListItemButton>" +
                  //   "</ListItem>" +
                    //   "<Divider />")
                  })}
                  </ul> */}
                <List>

              <ListItem>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary={props.data}/>
                </ListItemButton>
              </ListItem>
            </List>
          </CardContent>
        </Stack>
      </Card>
    </View>
  );
}
