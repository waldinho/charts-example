import React, {Component} from 'react';
import {Line, Radar} from 'react-chartjs-2';

class Chart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      price: []
    };
  }

  componentDidMount() {
    fetch("https://devapi.incentloyalty.com/market/history/INCNT/AUD?period=last_year")
      .then(res => res.json())
      .then(
        (result) => {
          const labels = result.map((label) => {
            return label.timestamp.substring(5, 7) + '-' + label.timestamp.substring(0, 4)
          })
          const price = result.map((res) => {
            return res.price
          })
          this.setState({
            labels: labels,
            price: price,
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }
  
  render() {
    
    const { labels, price } = this.state;
    const data = {
      // labels: labels,
      // datasets: [
      //   {
      //     // label: 'Yearly Price in $AUD',
      //     // fill: false,
      //     lineTension: 0.1,
      //     backgroundColor: 'rgba(75,192,192,0.4)',
      //     borderColor: 'rgba(75,192,192,1)',
      //     // borderCapStyle: 'butt',
      //     // borderDash: [],
      //     // borderDashOffset: 0.0,
      //     // borderJoinStyle: 'miter',
      //     // pointBorderColor: 'rgba(75,192,192,1)',
      //     // pointBackgroundColor: '#fff',
      //     // pointBorderWidth: 1,
      //     // pointHoverRadius: 5,
      //     // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      //     // pointHoverBorderColor: 'rgba(220,220,220,1)',
      //     // pointHoverBorderWidth: 2,
      //     // pointRadius: 1,
      //     // pointHitRadius: 10,
      //     data: price,
      //   }
      // ]
      labels: [['React', ' ',], ['            Node'], [' ', ' ', 'HTML'], [' ', ' ', 'CSS'], ['Javascript            ']],
      datasets: [
        {
          // label: 'Yearly Price in $AUD',
          // fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          // borderCapStyle: 'butt',
          // borderDash: [],
          // borderDashOffset: 0.0,
          // borderJoinStyle: 'miter',
          // pointBorderColor: 'rgba(75,192,192,1)',
          // pointBackgroundColor: '#fff',
          // pointBorderWidth: 1,
          // pointHoverRadius: 5,
          // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          // pointHoverBorderColor: 'rgba(220,220,220,1)',
          // pointHoverBorderWidth: 2,
          // pointRadius: 1,
          // pointHitRadius: 10,
          data: [80, 70, 95, 95, 75],
        }, {
          label: 'Hidden dataset',
          hidden: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: 'rgba(0,0,0,0)',
          // borderCapStyle: 'butt',
          // borderDash: [],
          // borderDashOffset: 0.0,
          // borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(0,0,0,0)',
          // pointBackgroundColor: '#fff',
          pointBorderWidth: 0,
          pointHoverRadius: 0,
          pointHoverBackgroundColor: 'rgba(0,0,0,0)',
          pointHoverBorderColor: 'rgba(0,0,0,0)',
          pointHoverBorderWidth: 0,
          pointRadius: 0,
          pointHitRadius: 0,
          data: [50, 100],
        }
      ]
    }
    return (
      <div>
        <h2>Line Example</h2>
        {/* <Line 
          id='chart'
          data={data} 
          legend={{display: false}}
          width={100}
          height={45}
          redraw={true}
        /> */}
        <Radar 
          id='chart'
          data={data} 
          legend={{display: false}}
          width={100}
          height={40}
          redraw={true}
          options={{
            scale: {
              pointLabels : { 
                 fontSize: 14,
                 fontColor: 'red',
              },
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
