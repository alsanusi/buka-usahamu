import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    mapDiv: {
        height: '80vh',
        width: '100%',
    },
})

const SimpleExample = () => {
    const classes = useStyles()

    return (
        <Map center={[-5.143467, 119.407528]} zoom={16} className={classes.mapDiv}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-5.143467, 119.407528]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </Map>
    )
}

export default SimpleExample