// import React from 'react'
// import {ResponsivePie} from '@nivo/pie' ;
// import { Box , Typography } from '@mui/material';
// import {useFindAllCategoryQuery} from "../state/api"
// import { blue } from '@mui/material/colors';

// const BreakdownChart = ({isDashboard =false}) => {
//       const {data , isLoading} = useFindAllCategoryQuery() ;
//     if(!data || isLoading) return "Loading.." ;

//     const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"];

//     const formattedData = data.map((Categorie, i) => ({
//         id: Categorie.name,
//         label: Categorie.name,
//         value: 1 ,
//         color: colors[i],
//       }));

//   return (
   
//         <Box
//           height={isDashboard ? "400px" : "100%"}
//           width={undefined}
//           minHeight={isDashboard ? "325px" : undefined}
//           minWidth={isDashboard ? "325px" : undefined}
//           position="relative"
//         >
//          <ResponsivePie
//         data={formattedData}
//         margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//         innerRadius={0.5}
//         padAngle={0.7}
//         cornerRadius={3}
//         activeOuterRadiusOffset={8}
//         borderWidth={1}
//         borderColor={{
//             from: 'color',
//             modifiers: [
//                 [
//                     'darker',
//                     0.2
//                 ]
//             ]
//         }}
//         arcLinkLabelsSkipAngle={10}
//         arcLinkLabelsTextColor="#333333"
//         arcLinkLabelsThickness={2}
//         arcLinkLabelsColor={{ from: 'color' }}
//         arcLabelsSkipAngle={10}
//         arcLabelsTextColor={{
//             from: 'color',
//             modifiers: [
//                 [
//                     'darker',
//                     2
//                 ]
//             ]
//         }}
//         // defs={[
//         //     {
//         //         id: 'dots',
//         //         type: 'patternDots',
//         //         background: 'inherit',
//         //         color: 'rgba(255, 255, 255, 0.3)',
//         //         size: 4,
//         //         padding: 1,
//         //         stagger: true
//         //     },
//         //     {
//         //         id: 'lines',
//         //         type: 'patternLines',
//         //         background: 'inherit',
//         //         color: 'rgba(255, 255, 255, 0.3)',
//         //         rotation: -45,
//         //         lineWidth: 6,
//         //         spacing: 10
//         //     }
//         // ]}
       




//         legends={[
//             {
//                 anchor: 'bottom',
//                 direction: 'row',
//                 justify: false,
//                 translateX: 0,
//                 translateY: 56,
//                 itemsSpacing: 0,
//                 itemWidth: 100,
//                 itemHeight: 18,
//                 itemTextColor: '#999',
//                 itemDirection: 'left-to-right',
//                 itemOpacity: 1,
//                 symbolSize: 18,
//                 symbolShape: 'circle',
//                 effects: [
//                     {
//                         on: 'hover',
//                         style: {
//                             itemTextColor: '#000'
//                         }
//                     }
//                 ]
//             }
//         ]}
//     />

//         </Box>
//   )
// }

// export default BreakdownChart


import React, { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { Box, Typography } from '@mui/material';
import { useFindAllCategoryQuery, useFindImmobilierCountByCategoryQuery } from '../state/api';
import { blue } from '@mui/material/colors';

const BreakdownChart = ({ isDashboard = false }) => {
  const { data: categories, isLoading: categoryLoading } = useFindAllCategoryQuery();

  const [formattedData, setFormattedData] = useState([]);

  const { data: immobilierCounts, isLoading: countLoading } = useFindImmobilierCountByCategoryQuery();

  useEffect(() => {
    if (categories && immobilierCounts) {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

      const formattedData = categories.map((category) => {
        const count = immobilierCounts.find((count) => count._id === category._id)?.count || 0;

        return {
          id: category.name,
          label: category.name,
          value: count,
          color: randomColor,
        };
      });

      setFormattedData(formattedData);
    }
  }, [categories, immobilierCounts]);

  if (categoryLoading || countLoading) {
    return "Loading...";
  }

  return (
    <Box
      height={isDashboard ? '400px' : '100%'}
      width={undefined}
      minHeight={isDashboard ? '325px' : undefined}
      minWidth={isDashboard ? '325px' : undefined}
      position="relative"
    >
      <ResponsivePie
        data={formattedData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default BreakdownChart;
