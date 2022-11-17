import { envConfig } from '@src/core/config/envConfig.js';
import { Coordinate } from '@src/core/interface/position-interface';
import GoogleMapReact from 'google-map-react';
import React, { FunctionComponent, useMemo, useState } from 'react';
import IconButton from './Icon/IconButton';
import cx from 'classnames';
import { BottomSheetLayout } from '@src/components/layout';
import ImageWrapper from './ImageWrapper';
import Button from './Button/Button';
import Link from 'next/link';

const Marker: FunctionComponent<{
  lat: number;
  lng: number;
  text?: string;
  onClick?: () => void;
}> = ({ onClick }) => {
  return (
    <div
      className={cx(
        'relative w-8 h-8',
        'flex justify-center items-center',
        'bg-secondary-400 text-primary-400',
        'rounded-full',
        'border-[1px] border-solid border-primary-500'
      )}
    >
      <IconButton name="cafe" size={24} onClick={onClick} />
    </div>
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
  const [open, setOpen] = useState(false);

  const renderMarkers = useMemo(() => {
    return pins.map((pin, index) => (
      <Marker
        key={index}
        lat={pin.lat}
        lng={pin.lng}
        onClick={() => {
          setOpen(true);
        }}
      />
    ));
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
          keyboardShortcuts: false,
          gestureHandling: 'greedy',
        }}
      >
        {renderMarkers}
      </GoogleMapReact>
      <BottomSheetLayout
        open={open}
        isActiveOverLay
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="relative w-full h-full">
          <ImageWrapper
            bgFilter="bg-gradient-to-b from-black/40 to-white/50"
            layout="fill"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          />
          <div className="absolute bottom-40 left-0 text-white z-10 w-full space-y-6 px-side-padding">
            <h1 className="text-2xl font-bold">용산 스터디 카페</h1>
            <p className="text-sm">서울시 용산구</p>
            <Link href="/cafe/1">
              <Button fullWidth>메뉴 고르기</Button>
            </Link>
          </div>
        </div>
      </BottomSheetLayout>
    </div>
  );
};

export default GoogleMapsWrapper;
