import { envConfig } from '@src/core/config/envConfig.js';
import { Coordinate } from '@src/core/interface/position-interface';
import GoogleMapReact from 'google-map-react';
import React, { FunctionComponent, useMemo } from 'react';
import cx from 'classnames';
import Link from 'next/link';

const Marker: FunctionComponent<{
  lat: number;
  lng: number;
  text?: string;
  className?: string;
}> = ({ className }) => {
  return (
    <Link href={'/cafe/1'}>
      <div className={cx('relative w-12 h-12 bg-primary-500 rounded-md', className)}>
        <div className="absolute translate-center-xy w-10 h-10 bg-white rounded-md">
          <p className="text-sm">{`cafe-${1}`}</p>
        </div>
      </div>
    </Link>
  );
};

interface GoogleMapsProps {
  center?: Coordinate;
  pins?: Coordinate[];
  zoom?: number;
}

const defaultCenter = { lat: 37.52974, lng: 126.962721 };

const GoogleMapsWrapper: FunctionComponent<GoogleMapsProps> = ({
  center = defaultCenter,
  pins = [],
  zoom = 15,
}) => {
  // prevent re-rendering
  const renderMarkers = useMemo(() => {
    return pins.map((pin, index) => <Marker key={index} lat={pin.lat} lng={pin.lng} />);
  }, [pins]);

  return (
    <div className="w-full h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: envConfig.googleMapKey }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={{
          fullscreenControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          zoomControl: false,
          gestureHandling: 'greedy',
        }}
        yesIWantToUseGoogleMapApiInternals
      >
        {renderMarkers}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMapsWrapper;
