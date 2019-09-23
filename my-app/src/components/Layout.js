import React from 'react';
import { APPLICATION_DATA_ENDPOINT, PROXY } from '../util/constants';
import Content from './Content';
import WeatherButton from '../components/elements/button';
import './Layout.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationState: {},
      isLoading: false,
      hasRequestFailed: false,
      alertMessage: '',
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  /* fetch the data just after mounting the layout */
  componentDidMount() {
    this.setState({ isLoading: true });

    /* utlizing proxy to eliminate cors error */
    let fetchRequest = fetch(PROXY+APPLICATION_DATA_ENDPOINT);

    fetchRequest
     .then(response => response.json())
     .then(data => this.setState({
        applicationState: data,
         isLoading: false,
      }))
      .catch((error) => {
        this.setState({ hasRequestFailed: true });
      });
  }

  onClickHandler() {
    this.setState({ alertMessage: "Hourly updates in a WIP" });
  }

  render (){
    const { isLoading, hasRequestFailed, applicationState, alertMessage } = this.state;
    const { currently : { temperature, summary, windSpeed, icon, visibility, time } = {}} = applicationState;
    const currentTime = new Date(time).toLocaleTimeString('en-US')

    const { currently, hourly } = applicationState;
    const contentProps = { temperature, summary, windSpeed, icon, visibility, time: currentTime };

    if (hasRequestFailed) {
      /* display failed fetch error message */
      return (<h1>We were unable to process your request. We are sorry for the inconvenience </h1>);
    }

    if (isLoading) {
      /* display loading message */
      return (<h1>Getting your Weather Forecast for you ...</h1>);
    }

    return (
      <div className="weather-app__layout-wrapper">
       {
         Object.keys(applicationState)
         ? <Content {...contentProps}/>
         : null
       }
       {
         alertMessage !== ''
         ? (<p>{alertMessage}</p>)
         : null
       }
       <WeatherButton buttonText="Get Hourly Updates" onClickHandler={this.onClickHandler}/>
      </div>
    )
  }
}

export default Layout;
