import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./App.css";

export default function CardComponent(props) {
  return (
    <Card sx={{ minWidth: 175 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Roll Number: {props.index + 1}
        </Typography>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Age: {props.age}
        </Typography>
        <Typography variant="body2">
          Class: {props.class}
          <br />
          Institute: {props.inst}
        </Typography>
      </CardContent>
    </Card>
  );
}
