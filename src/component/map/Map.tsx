import 'mapbox-gl/dist/mapbox-gl.css';

import { useCallback, useEffect, useState } from "react";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Map, {Layer, Source} from 'react-map-gl';
import { dataLayer } from "@/map-style";
import ControlPanel from "./ControlPanel";
import StateDetails from "./StateDetails";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAP_BOX;
const GEO_JSON_URL = 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson';

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
            try {
                const res = await fetch(GEO_JSON_URL);
                const geoData = await res.json();
                setData(geoData);
            } catch(error) {
                console.error(error);
            }
        })();
    });

    return (
        <Box 
            component="div" 
            sx={{
              height: 450,
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
                style={{height: 450}}
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