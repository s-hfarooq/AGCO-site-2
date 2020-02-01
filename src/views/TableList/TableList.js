import React from "react";
import {Route} from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Button } from "@material-ui/core";
import ImageComponent from './ImageComponent1';
import ImageComponent2 from './ImageComponent2';
import ImageComponent3 from './ImageComponent3';
import ImageComponent4 from './ImageComponent4';
import ImageComponent5 from './ImageComponent5';
import ImageComponent6 from './ImageComponent6';
import ImageComponent7 from './ImageComponent7';
import ImageComponent8 from './ImageComponent8';
import ImageComponent9 from './ImageComponent9';
import ImageComponent10 from './ImageComponent10';


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>All Equipment</h4>
            <p className={classes.cardCategoryWhite}>
              List of all current equipment and their status
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["controllerid", "room_id", "equip_id", "equipment_name",	"equipment_type", "timestamp",	"amp_draw", "runtime", "graph"]}
              tableData={[
                ["AA1610M1139700010",87,113,"Tunnel Fan 1","TunnelFan","2019-01-01 05:00:00+00:00",6.699999809,0, <ImageComponent/>],
                ["AA1610M1139700010",87,116,"Tunnel Fan 2","TunnelFan","2019-01-01 05:00:00+00:00",6.699999809,0, <ImageComponent2/>],
                ["AA1610M1139700010",87,117,"Tunnel Fan 3","TunnelFan","2019-03-08 19:40:00+00:00",0.200000003,5801, <ImageComponent3/>],
                ["AA1610M1139700010",87,122,"Tunnel Fan 8","TunnelFan","2019-01-01 16:35:00+00:00",6.300000191,122, <ImageComponent4/>],
                ["AA1610M1139700010",87,118,"Tunnel Fan 4","TunnelFan","2019-01-01 05:00:00+00:00",6.699999809,0, <ImageComponent5/>],
                ["AA1610M1139700010",87,119,"Tunnel Fan 5","TunnelFan","2019-01-01 05:00:00+00:00",7.300000191,0, <ImageComponent6/>],
                ["AA1610M1139700010",87,120,"Tunnel Fan 6","TunnelFan","2019-01-01 05:10:00+00:00",6.400000095,267, <ImageComponent7/>],
                ["AA1610M1139700010",87,121,"Tunnel Fan 7","TunnelFan","2019-01-01 15:05:00+00:00",6.900000095,6, <ImageComponent8/>],
                ["AA1610M1139700010",87,123,"Tunnel Fan 9","TunnelFan","2019-01-18 21:54:00+00:00",7.599999905,284, <ImageComponent9/>],
                ["AA1610M1139700010",87,124,"Tunnel Fan 10","TunnelFan","2019-01-18 21:54:00+00:00",8.199999809,279, <ImageComponent10/>],
                ["AA1610M1139700010",87,125,"Tunnel Fan 11","TunnelFan","2019-02-19 05:03:00+00:00",0.0,0, <ImageComponent/>],
                ["AA1610M1139700010",87,126,"Tunnel Fan 12","TunnelFan","2019-01-01 05:00:00+00:00",6.099999905,0, <ImageComponent/>],
                ["AA1610M1139700010",274,288,"Tunnel Fan 1","TunnelFan","2019-01-01 05:00:00+00:00",7.599999905,0, <ImageComponent/>],
                ["AA1610M1139700010",274,289,"Tunnel Fan 2","TunnelFan","2019-01-01 05:05:00+00:00",7.5,252, <ImageComponent/>],
                ["AA1610M1139700010",274,290,"Tunnel Fan 3","TunnelFan","2019-01-01 05:10:00+00:00",6.300000191,552, <ImageComponent/>],
                ["AA1610M1139700010",274,291,"Tunnel Fan 4","TunnelFan","2019-01-01 05:00:00+00:00",7.300000191,0, <ImageComponent/>],
                ["AA1610M1139700010",274,292,"Tunnel Fan 5","TunnelFan","2019-01-01 05:10:00+00:00",6.900000095,229, <ImageComponent/>],
                ["AA1610M1139700010",274,293,"Tunnel Fan 6","TunnelFan","2019-01-01 14:00:00+00:00",8.0,82],
                ["AA1610M1139700010",274,295,"Tunnel Fan 8","TunnelFan","2019-01-01 17:05:00+00:00",8.0,119],
                ["AA1610M1139700010",274,296,"Tunnel Fan 9","TunnelFan","2019-01-19 01:04:00+00:00",8.399999619,144],
                ["AA1610M1139700010",274,297,"Tunnel Fan 10","TunnelFan","2019-01-19 01:04:00+00:00",0.100000001,164],
                ["AA1610M1139700010",274,298,"Tunnel Fan 11","TunnelFan","2019-01-19 01:04:00+00:00",7.5,149],
                ["AA1610M1139700010",274,299,"Tunnel Fan 12","TunnelFan","2019-01-08 14:35:00+00:00",7.400000095,290],
                ["AA1610M1139700010",274,20562,"Tunnel Fan 7","TunnelFan","2019-01-01 16:35:00+00:00",5.900000095,115],
                ["AA1610M1139700010",340,354,"Tunnel Fan 1","TunnelFan","2019-01-01 05:00:00+00:00",6.800000191,0],
                ["AA1610M1139700010",340,355,"Tunnel Fan 2","TunnelFan","2019-01-01 05:05:00+00:00",6.5,252],
                ["AA1610M1139700010",340,356,"Tunnel Fan 3","TunnelFan","2019-01-01 05:00:00+00:00",6.800000191,0],
                ["AA1610M1139700010",340,358,"Tunnel Fan 5","TunnelFan","2019-01-01 05:05:00+00:00",7.099999905,61],
                ["AA1610M1139700010",340,359,"Tunnel Fan 6","TunnelFan","2019-01-01 13:40:00+00:00",6.900000095,161],
                ["AA1610M1139700010",340,360,"Tunnel Fan 7","TunnelFan","2019-01-01 16:15:00+00:00",6.800000191,247],
                ["AA1610M1139700010",340,361,"Tunnel Fan 8","TunnelFan","2019-01-21 00:24:00+00:00",7.199999809,68],
                ["AA1610M1139700010",340,362,"Tunnel Fan 9","TunnelFan","2019-01-21 00:24:00+00:00",7.599999905,23],
                ["AA1610M1139700010",340,363,"Tunnel Fan 10","TunnelFan","2019-01-21 00:24:00+00:00",0.100000001,28],
                ["AA1610M1139700010",340,364,"Tunnel Fan 11","TunnelFan","2019-01-21 00:24:00+00:00",7.800000191,43],
                ["AA1610M1139700010",340,365,"Tunnel Fan 12","TunnelFan","2019-01-23 05:04:00+00:00",0.100000001,0],
                ["AA1610M1139700010",340,25891,"Tunnel Fan 4","TunnelFan","2019-01-01 05:00:00+00:00",6.599999905,0],
                ["AA1610M1139700010",392,406,"Tunnel Fan 1","TunnelFan","2019-01-01 05:00:00+00:00",6.5,0],
                ["AA1610M1139700010",392,407,"Tunnel Fan 2","TunnelFan","2019-01-01 05:00:00+00:00",7.099999905,0],
                ["AA1610M1139700010",392,408,"Tunnel Fan 3","TunnelFan","2019-01-01 05:00:00+00:00",6.900000095,0],
                ["AA1610M1139700010",392,409,"Tunnel Fan 4","TunnelFan","2019-01-01 05:00:00+00:00",6.400000095,0],
                ["AA1610M1139700010",392,410,"Tunnel Fan 5","TunnelFan","2019-01-01 05:00:00+00:00",6.199999809,0],
                ["AA1610M1139700010",392,411,"Tunnel Fan 6","TunnelFan","2019-01-01 14:00:00+00:00",7.5,131],
                ["AA1610M1139700010",392,412,"Tunnel Fan 7","TunnelFan","2019-01-01 16:30:00+00:00",7.300000191,123],
                ["AA1610M1139700010",392,413,"Tunnel Fan 8","TunnelFan","2019-01-01 17:30:00+00:00",7.199999809,23],
                ["AA1610M1139700010",392,414,"Tunnel Fan 9","TunnelFan","2019-01-19 18:39:00+00:00",7.0,1],
                ["AA1610M1139700010",392,415,"Tunnel Fan 10","TunnelFan","2019-01-20 21:44:00+00:00",0.100000001,143],["AA1610M1139700010",392,416,"Tunnel Fan 11","TunnelFan","2019-01-20 21:44:00+00:00",7.5,168],["AA1610M1139700010",392,417,"Tunnel Fan 12","TunnelFan","2019-01-21 21:54:00+00:00",7.400000095,3614]]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
