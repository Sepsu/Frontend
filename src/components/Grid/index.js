import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import PaperExampleCircle from '../Paper'


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 400,

    overflowY: 'fixed',
    marginBottom: 24,
  },
};

const tilesData = [
  {
    label: 'Temperature',
    icon: 'home',
    value: '12.3',
  },
  {
    label: 'Humidity',
    icon: 'phone',
    value: '12.3',
  },
  {
    label: 'Pressure',
    icon: 'home',
    value: '12.3',
  },
  {
    label: 'AirQuality',
    icon: 'home',
    value: '12.3',
  },

];


const GridListOwn = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={200}
      style={styles.gridList}
    >
      {tilesData.map(tile => (
        <GridTile
          key={tile.label}
        >
        <PaperExampleCircle icon={tile.icon} value={tile.value}>
          </PaperExampleCircle>
        </GridTile>
      ))}

    </GridList>
  </div>
);

export default GridListOwn;
