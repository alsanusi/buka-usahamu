import React, { Fragment, useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
    mapDiv: {
        height: '80vh',
        width: '100%',
    },
})

const MyPopupMarker = ({ ...props }) => {
    const { subDistrict, position, category } = props
    return (
        <Marker position={position}>
            <Popup>
                <div style={{ textAlign: 'center' }}>
                    <h3>
                        {subDistrict}
                    </h3>
                    <h5>
                        Category: {category}
                    </h5>
                </div>
            </Popup>
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
    const [category, setCategory] = useState('');

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };

    const listMarker = [
        { key: 'marker1', position: [-5.165732, 119.460909], subDistrict: 'Borong', category: 'Culinary' },
        { key: 'marker2', position: [-5.143563, 119.452779], subDistrict: 'Panakukang', category: 'Coffee' },
        { key: 'marker3', position: [-5.172932, 119.446952], subDistrict: 'Rappocini', category: 'Coffee' }
    ]

    const findPlace = category ? listMarker.filter(x => x.category === category) : listMarker

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <FormControl variant="outlined" style={{ width: '100%' }}>
                        <InputLabel>Category</InputLabel>
                        <Select
                            value={category}
                            fullWidth
                            onChange={handleChangeCategory}
                            label="Category"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Culinary"}>Culinary</MenuItem>
                            <MenuItem value={"Coffee"}>Coffee</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Map center={[-5.143467, 119.407528]} zoom={13} className={classes.mapDiv}>
                        <TileLayer
                            // Black Map
                            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                        // Normal Map
                        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MyMarkersList listMarker={findPlace} />
                    </Map>
                </Grid>
            </Grid>
        </div>
    )
}

export default SimpleExample