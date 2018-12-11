import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

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
      labels: labels,
      datasets: [
        {
          label: 'Yearly Price in $AUD',
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
          data: price,
        }
      ]
    };
    return (
      <div>
        <h2>Line Example</h2>
        <Line data={data} />
      </div>
    );
  }
}

export default Chart;
