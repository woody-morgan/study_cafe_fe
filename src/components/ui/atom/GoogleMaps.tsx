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
import { ICafe } from '@src/core/api/apiCafe';

const Marker: FunctionComponent<{
  lat: number;
  lng: number;
  cafeInfo: ICafe;
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
  cafeList: ICafe[];
  zoom?: number;
}

const defaultCenter = { lat: 37.52974, lng: 126.962721 };

const GoogleMapsWrapper: FunctionComponent<GoogleMapsProps> = ({
  center = defaultCenter,
  cafeList,
  zoom = 15,
}) => {
  const [selectedCafe, setSelectedCafe] = useState<ICafe | null>(null);

  const renderMarkers = useMemo(() => {
    return cafeList.map((cafeInfo, index) => (
      <Marker
        key={`cafe-marker-${index}`}
        lat={cafeInfo.latitude}
        lng={cafeInfo.longitude}
        cafeInfo={cafeInfo}
        onClick={() => {
          setSelectedCafe(cafeInfo);
        }}
      />
    ));
  }, [cafeList]);

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
        open={selectedCafe !== null}
        isActiveOverLay
        onClose={() => {
          setSelectedCafe(null);
        }}
      >
        <div className="relative w-full h-full">
          {selectedCafe?.mainImageUrl && (
            <ImageWrapper
              bgFilter="bg-gradient-to-b from-black/40 to-white/50"
              layout="fill"
              objectFit="cover"
              src={selectedCafe.mainImageUrl}
            />
          )}

          <div className="absolute bottom-40 left-0 text-white z-10 w-full space-y-6 px-side-padding">
            <h1 className="text-2xl font-bold">{selectedCafe?.name ?? ''}</h1>
            <p className="text-sm">{selectedCafe?.region ?? ''}</p>
            <Link href={`/cafe/${selectedCafe?.id ?? ''}`}>
              <Button fullWidth>메뉴 고르기</Button>
            </Link>
          </div>
        </div>
      </BottomSheetLayout>
    </div>
  );
};

export default GoogleMapsWrapper;
