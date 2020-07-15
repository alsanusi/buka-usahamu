import React, { Fragment } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    mapDiv: {
        height: '80vh',
        width: '100%',
    },
})

const MyPopupMarker = ({ ...props }) => {
    const { content, position } = props
    return (
        <Marker position={position}>
            <Popup>{content}</Popup>
        </Marker>
    )
}

const MyMarkersList = ({ listMarker }) => {
    const items = listMarker ? listMarker.map(({ key, ...props }) => (
        <MyPopupMarker key={key} {...props} />
    )) : []

    return (
        <Fragment>{items}</Fragment>
    )
}

const SimpleExample = () => {
    const classes = useStyles()

    const listMarker = [
        { key: 'marker1', position: [-5.165732, 119.460909], content: 'Borong' },
        { key: 'marker2', position: [-5.143563, 119.452779], content: 'Panakukang' },
    ]

    return (
        <Map center={[-5.143467, 119.407528]} zoom={16} className={classes.mapDiv}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MyMarkersList listMarker={listMarker} />
        </Map>
    )
}

export default SimpleExample