import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { Pie } from '@ant-design/plots';

const Dashboard = () => {
  const [cookies] = useCookies(['user']);
  const userID = cookies.user._id;
  const [reload,setReload] = useState(true);
  const [apiData, setAPIData] = useState([]);
  const [runTotal, setRunTotal] = useState(null);
  const [walkTotal, setWalkTotal] = useState(null);
  const [bikeTotal, setBikeTotal] = useState(null);
  const [swimTotal, setSwimTotal] = useState(null);
  const [tennisTotal, setTennisTotal] = useState(null);
  const [skateboardTotal, setSkateboardTotal] = useState(null);
  const [hikeTotal, setHikeTotal] = useState(null);
  const [footballTotal, setFootballTotal] = useState(null);

  useEffect(() => {
    axios.get(`https://hulkfit-backend-wowi.onrender.com/activitylist/${userID}`)
      .then((result) => {
        setAPIData(result.data);
        console.log(userID)
        console.log(result.data);
        cal();
      })
      .catch((err) => console.log(err));
  },[reload]);

  useEffect(() => {
    cal();
  }, [apiData]);

  const cal = () =>{
    {apiData.map((items) => {
      switch (items.actType) {
        case 'run':
          setRunTotal(pre => pre+items.actDuration)
          break;
        case 'walk':
          setWalkTotal(pre => pre+items.actDuration)
          break;
        case 'bike':
          setBikeTotal(pre => pre+items.actDuration)
          break;
        case 'swim':
          setSwimTotal(pre => pre+items.actDuration)
          break;
        case 'tennis':
          setTennisTotal(pre => pre+items.actDuration)
          break;
        case 'skateboard':
          setSkateboardTotal(pre => pre+items.actDuration)
          break;
        case 'hike':
          setHikeTotal(pre => pre+items.actDuration)
          break;
        case 'football':
          setFootballTotal(pre => pre+items.actDuration)
          break;
        default:
          console.log(items.actType)
          break;
       }
      })}
      
    }
  
  const data = [
    {
      type: 'Run',
      value: runTotal,
    },
    {
      type: 'Walk',
      value: walkTotal,
    },
    {
      type: 'Bike',
      value: bikeTotal,
    },
    {
      type: 'Swim',
      value: swimTotal,
    },
    {
      type: 'Tennis',
      value: tennisTotal,
    },
    {
      type: 'Skateboard',
      value: skateboardTotal,
    },
    {
      type: 'Hike',
      value: hikeTotal,
    },
    {
      type: 'Football',
      value: footballTotal,
    }
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };

  return (
    <div className='w-[50%] m-auto'>
      
    <Pie {...config} />
    </div>
  );
};

export default Dashboard;
