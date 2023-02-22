import { useCallback, useEffect, useState } from "react";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";

import Map, {Layer, Source} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { dataLayer } from "@/map-style";
import ControlPanel from "./ControlPanel";
import StateDetails from "./StateDetails";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAP_BOX;

export default function _Map() {
    const [data, setData] = useState<any>(null);
    const [hoverInfo, setHoverInfo] = useState(null);
    
    const onHover = useCallback((event: any) => {
        const {
          features,
          point: {x, y}
        } = event;
        
        const hoveredFeature = features && features[0];
        setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
    }, []);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson');
            const geoData = await res.json();
            setData(geoData);
        })()
    })

    return (
        <Box 
            component="div" 
            sx={{
              height: 400,
              bgcolor: grey[300],
              mt: 2
            }}
            position="relative"
          >
            <Map
                initialViewState={{
                    latitude: 40,
                    longitude: -100,
                    zoom: 3
                }}
                // style={{width: 800, height: 600}}
                mapStyle="mapbox://styles/mapbox/streets-v12"
                mapboxAccessToken={MAPBOX_TOKEN}
                interactiveLayerIds={['data']}
                onMouseMove={onHover}
            >
                <Source type="geojson" data={data}>
                    <Layer {...dataLayer} />
                </Source>
                <StateDetails hoverInfo={hoverInfo}/>
            </Map>
            <ControlPanel/>
        </Box>
    )
}