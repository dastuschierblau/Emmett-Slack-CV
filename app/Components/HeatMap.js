const React = require('react');

// Create array of subarrays from original array of data.
// # subarrays = height
// # items in each subarray = width
function splitArray(arr, width, height) {
  let newArr = [],
    k = 0;

  for (let i = 0; i < height; i++) {
    // If no more items in the array, stop looping
    if (k >= arr.length) break;
    // Add empty row
    let row = [];
    for (let j = 0; j < width; j++) {
      // If no more items in the array, stop looping
      if (k >= arr.length) break;

      row.push(arr[k]);
      k++;
    }
    newArr.push(row);
  }

  return newArr;
}

// Get stats from data
function getStats(data) {
  const min = Math.min(...data),
    max = Math.max(...data),
    sum = data.reduce((group, item) => {
      return group + item;
    }, 0),
    avg = sum / data.length;

  return {
    min,
    max,
    sum,
    avg,
  };
}

// Adds color to heat map item based on config values
// Returns color to style item
function colorize(item, stats) {
  let color = '';
  const { min, max, avg } = stats;

  if (item < min + (avg - min) / 2) {
    color = 'very-light';
  } else if (item <= avg && item > min + (avg - min) / 2) {
    color = 'light';
  } else if (item > avg && item < max - (max - avg) / 2) {
    color = 'dark';
  } else {
    color = 'very-dark';
  }

  return color;
}

const testArray = [1, 2, 5, 7, 3, 4, 6, 7, 3, 3, 6, 7, 3, 5, 5, 4];

const HeatMap = (props) => {
  const { width, height, data } = props;
  let matrix = splitArray(data, width, height);
  const stats = getStats(data);

  return (
    <div className='heatmap'>
      {matrix.map((item, ind) => {
        return <HeatMapRow key={`${item}-${ind}`} item={item} stats={stats} />;
      })}
    </div>
  );
};

const HeatMapRow = (props) => {
  const { item, stats } = props;

  return (
    <div className='heatmap-row'>
      {item.map((item, ind) => {
        return <HeatMapItem key={`${item}-${ind}`} item={item} stats={stats} />;
      })}
    </div>
  );
};

const HeatMapItem = (props) => {
  const { item, stats } = props;

  return <div className={`${colorize(item, stats)} heatmap-item`}>{item}</div>;
};

export default HeatMap;
