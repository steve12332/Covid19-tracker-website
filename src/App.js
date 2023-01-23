import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';
import {Cards, Chart, CountryPicker} from './components';
import {fetchData} from './api';

class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount(){
    const fetchData = await fetchData();

    this.setState({data: data});
  }

  render() {
    const {data} = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <Chart />
        <CountryPicker />
      </div>
    )
  }
}

export default App;