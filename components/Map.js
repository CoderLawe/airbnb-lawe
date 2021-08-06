import { useState } from "react";
import ReactMapGl, {Marker, Popup} from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { ArrowDownIcon, PencilIcon } from "@heroicons/react/outline";
import { ArrowUpIcon } from "@heroicons/react/solid";
import Image from "next/image";
function Map({ searchResults}) {

    const [selectedLocation, setSelectedLocation] = useState({});
    // We need to transform the search results object into the specific one from the docs

    // Mapping through to get a reference to the item
    const coordinates = searchResults.map((result) =>({
        // This'll return an object everytime it loops through
        longitude:result.long,
        latitude:result.lat
    }));

    // The center, is the latittude and longitude of the center of locations coordinates

    const center = getCenter(coordinates);
    


    const [viewPort, setViewPort] = useState({
        width:"100%",
        height:"100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 10,
    })

    return (
        <ReactMapGl
            mapStyle="mapbox://styles/coderlawe/cks0lilc80own17mv51dv90go"
            mapboxApiAccessToken={process.env.mapbox_key}
            // The spread operator gets everything to that point
            {...viewPort}
            onViewportChange={(nextViewport) => setViewPort(nextViewport)}
        >
            {searchResults.map((result) =>(
                <div className="relative" key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p  
                        // https://thumbs.dreamstime.com/b/hospital-bed-logo-bed-icon-dark-background-white-hospital-bed-logo-bed-icon-dark-background-133541157.jpg
                            role="img"
                            className="cursor-pointer text-2xl animate-pulse text-red-500"
                            onClick={() => setSelectedLocation(result)}
                            aria-label="push-pin"
                        >

                            <img className="h-10 shadow-lg" objectFit="cover"  src="https://thumbs.dreamstime.com/b/hospital-bed-logo-bed-icon-dark-background-white-hospital-bed-logo-bed-icon-dark-background-133541157.jpg" layout="fill"/>
                        </p>
                    </Marker>
                    {/* The popup that should show when we click on a marker */}

                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                            >
                                <div className="shadow-lg p-3">
                                     {result.title}
                                </div>
                            
                        </Popup>
                    ): (
                        false
                    )}
                </div>
            ))}


        </ReactMapGl>

    );
    console.log(searchResults)

}

export default Map
