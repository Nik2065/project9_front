import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent,DatasetComponent,} from 'echarts/components';
import {
  CanvasRenderer,
  // SVGRenderer,
} from 'echarts/renderers';






export function ProductCardChart(){

    const option = {
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['Mon', 'Tue']
        },
        series: [
          {
            data: [120, 200],
            type: 'bar'
          }
        ]
      };


      // Register the required components
    echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]
    );

  
    return(
        <ReactEChartsCore
        style={{height:"100px"}}
        echarts={echarts}
        option={option}
        notMerge={true}
        lazyUpdate={true}
        //theme={"theme_name"}
        //onChartReady={this.onChartReadyCallback}
        //onEvents={EventsDict}
      />
    )
}