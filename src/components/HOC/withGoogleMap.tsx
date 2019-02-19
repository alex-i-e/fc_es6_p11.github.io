import React, { Component } from 'react';
import { affixScriptToHead, onLoadCallback } from '../../webApi/initGoogleMap';

export const withGoogleMap = WrappedComponent => {
  const API_KEY = 'AIzaSyCKA-4G14Aehm3qsiejmYsk3E6aSH2cKNI';

  class routerWrapper extends Component {
    constructor(props) {
      super(props);

      this.state = {
        googleMapData: null
      };
    }

    componentDidMount() {
      affixScriptToHead(
        `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`, // &callback=initMap
        onLoadCallback
      )
        .then(data => data())
        .then(data => {
          // eslint-disable-next-line
          console.log(' >>>', data);
          this.setState({ googleMapData: data });
        });
    }

    render() {
      const { googleMapData } = this.state;
      // withRouter props
      // const {match, location, history} = this.props;

      return <WrappedComponent {...this.props} {...googleMapData} />;
    }
  }

  return routerWrapper;
};

export default withGoogleMap;
