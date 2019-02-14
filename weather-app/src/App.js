import React, { Component } from 'react';
import {Paper, AppBar, Typography, Toolbar} from '@material-ui/core';
import LocationList from './WheaterLocation/LocationList';
import './App.css';
import { Grid, Row, Col} from 'react-flexbox-grid';
import { MuiThemeProvider } from '@material-ui/core';
import ForecastExtended from './WheaterLocation/ForecastExtended';


const cities = ['Bogota, CO', 'Paris, FR', 'Madrid, ES', 'Tura, RU'];


class App extends Component {

    constructor(){
      super();
      this.state = { city : null}
    }
   showLocationSaved = city =>{
    this.setState({
          city: city
      });
    }

  render() {
    const {city} = this.state;
    return (

        <Grid fluid>
          <Row center='xs'>
            <AppBar position='sticky'>
                <Toolbar>
                    <Typography variant='title' color='inherit'>
                      Weather APP
                    </Typography>
                </Toolbar>
            </AppBar>
          </Row>
          <Row>
              <Col xs={12} md={6}>
                <div className='locationList'>
                    <LocationList  cities= {cities} onSavedLocation={this.showLocationSaved}></LocationList>   
                </div>
              </Col>
              <Col  xs={12} md={6}>
                <Paper>
                  <div className='details'>
                  
                     <ForecastExtended city={city}></ForecastExtended>
                  </div>
                </Paper>        
              </Col>
          </Row>
        </Grid>
        
          );
       }  
    }


export default App;
