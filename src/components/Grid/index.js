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

const sensorIcons = [{
   {
    Temperature :'home'
  },
  {
    Humidity :'phone',
  },
  {
    Pressure : 'home',
  },
  {
    AirQuality : 'home',
  }
}]



const GridListOwn = (data) => (
  console.log(data);
  <div style={styles.root}>
    <GridList
      cellHeight={200}
      style={styles.gridList}
    >
      {data.map(tile => (
        <GridTile
          key={tile.name}
        >
        <PaperExampleCircle icon={sensorIcons[tile.name]} value={tile.value}>
          </PaperExampleCircle>
        </GridTile>
      ))}

    </GridList>
  </div>
);

export default GridListOwn;
