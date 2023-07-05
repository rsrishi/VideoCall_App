import * as React from "react";
import { View, Text, FlatList } from "react-native";
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

export default function ListRooms(props) {
  const [myRooms, setMyRooms] = React.useState([]);

  // state = {
  //     name : ''
  // };

  //  myArray.push(props.data)
  // ( ()=>{
  //   this.setState({name :props.data})
  // });
  React.useEffect(() => {
    setMyRooms(props.rooms);
  });
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
            {myRooms.join(',')}
          </CardContent>
        </Stack>
      </Card>
    </View>
  );
}
