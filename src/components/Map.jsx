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
                        <div style={{ marginBottom: 10 }}>
                            Category:
                        </div>
                        {category.map((list, key) =>
                            <div key={key} style={{ marginBottom: 2 }}>
                                {list}
                            </div>
                        )}
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

const SimpleMap = () => {
    const classes = useStyles()
    const [placeCategory, setPlaceCategory] = useState('');

    const handleChangeCategory = (event) => {
        setPlaceCategory(event.target.value);
    };

    const listMarker = [
        { key: 'marker1', position: [-5.165732, 119.460909], subDistrict: 'Borong', category: ['Culinary', 'Coffee'] },
        { key: 'marker2', position: [-5.143563, 119.452779], subDistrict: 'Panakukang', category: ['Coffee'] },
        { key: 'marker3', position: [-5.172932, 119.446952], subDistrict: 'Rappocini', category: ['Coffee'] },
        { key: 'marker4', position: [-5.140144, 119.414809], subDistrict: 'Ujung Pandang', category: ['Coffee'] },
        { key: 'marker5', position: [-5.127992, 119.419945], subDistrict: 'Bontoala', category: ['Culinary'] },
        { key: 'marker6', position: [-5.092227, 119.514442], subDistrict: 'Biringkanaya', category: ['Coffee'] },
        { key: 'marker7', position: [-5.163811, 119.416675], subDistrict: 'Mamajang', category: ['Coffee'] },
        { key: 'marker8', position: [-5.140956, 119.424102], subDistrict: 'Makassar', category: ['Coffee'] },
        { key: 'marker9', position: [-5.048238, 119.327855], subDistrict: 'Kepulauan Sangkarrang', category: ['Coffee'] },
        { key: 'marker10', position: [-5.157282, 119.410327], subDistrict: 'Mariso', category: ['Coffee'] },
        { key: 'marker11', position: [-5.146701, 119.472257], subDistrict: 'Tello', category: ['Coffee'] },
        { key: 'marker12', position: [-5.175672, 119.416266], subDistrict: 'Tamalate', category: ['Coffee'] },
        { key: 'marker13', position: [-5.131637, 119.489063], subDistrict: 'Tamalanrea', category: ['Coffee'] },
        { key: 'marker14', position: [-5.124612, 119.412489], subDistrict: 'Wajo', category: ['Coffee'] },
        { key: 'marker15', position: [-5.114646, 119.418410], subDistrict: 'Ujung Tanah', category: ['Coffee'] }
    ]

    const findPlace = placeCategory ? listMarker.filter(x => x.category.join("").includes(placeCategory)) : listMarker

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <FormControl variant="outlined" style={{ width: '100%' }}>
                        <InputLabel>Category</InputLabel>
                        <Select
                            value={placeCategory}
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
                    <Map center={[-5.143467, 119.407528]} zoom={11.5} className={classes.mapDiv}>
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

export default SimpleMap