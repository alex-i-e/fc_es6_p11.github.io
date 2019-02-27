import React, { Component } from 'react';
import { affixScriptToHead, onLoadCallback } from '../../webApi/initGoogleMap';

type WithGoogleMapType = {
  children?: React.ReactNode;
};

export const withGoogleMap = <P extends WithGoogleMapType>(
  WrappedComponent: React.ComponentType<any>
) => {
  const API_KEY = 'AIzaSyCKA-4G14Aehm3qsiejmYsk3E6aSH2cKNI';

  type WithGoogleMapState = {
    googleMapData: google.maps.Data | null;
  };

  class routerWrapper extends Component<P, WithGoogleMapState> {
    constructor(props: any) {
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
        .then((data: any) => data())
        .then((data: any) => {
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
