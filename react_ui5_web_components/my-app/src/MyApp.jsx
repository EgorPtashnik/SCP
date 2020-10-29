import React from 'react';

import { Card, Text, Icon } from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';
import { BarChart, LineChart } from '@ui5/webcomponents-react-charts';
import '@ui5/webcomponents-icons/dist/icons/line-chart.js';
import '@ui5/webcomponents-icons/dist/icons/horizontal-bar-chart.js';
const dataset = [
  {
    month: "January",
    data: 65
  },
  {
    month: "February",
    data: 59
  },
  {
    month: "March",
    data: 80
  },
  {
    month: "April",
    data: 81
  },
  {
    month: "May",
    data: 56
  },
  {
    month: "June",
    data: 55
  },
  {
    month: "July",
    data: 40
  }
];

export const MyApp = () => {

  const [toggleCharts, setToggleCharts] = React.useState('lineChart');
  const [loading, setLoading] = React.useState(false);

  const handleHeaderClick = () => {
    if (toggleCharts === 'lineChart') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts('barChart');
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts('lineChart');
      }, 2000);
    }
  };

  const contentTitle = toggleCharts === 'lineChart'? 'Line Chart' : 'Bar Chart';
  const switchToChart = toggleCharts === 'lineChart'? 'Bar Chart' : 'Line Chart';

  return(
  <Card heading='Stock Price' style={{ width: '300px' }} headerInteractive
    onHeaderClick={handleHeaderClick} subheading={`Click here to switch to ${switchToChart}`}
    avatar={<Icon name={toggleCharts === 'lineChart'? 'line-chart' : 'horizontal-bar-chart'}/>}>
    <Text style={spacing.sapUiContentPadding}>
      {contentTitle}
    </Text>
    {toggleCharts === 'lineChart' ? (
      <LineChart loading={loading} dimensions={[{ accessor: 'month' }]} measures={[{ accessor: 'data', label: 'Stock Price' }]}
        dataset={dataset}/>) : (
      <BarChart dimensions={[{ accessor: 'month' }]} measures={[{ accessor: 'data', label: 'Stock Price' }]}
        dataset={dataset} loading={loading}/>)
    }
  </Card>)
};
