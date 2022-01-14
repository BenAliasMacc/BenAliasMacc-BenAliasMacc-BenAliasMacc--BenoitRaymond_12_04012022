import Activity from '../../component/Activity/index.jsx';
import Session from '../../component/Session/index.jsx';
import Performance from '../../component/Performance/index.jsx';
import Header from '../../component/Header/index.jsx';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { mockedDataUser, mockedDataActivity, mockedDataSessions, mockedDataPerformance } from '../../data/mockedData.js'
import './index.css'

function Dashboard() {

    const [idFromUrl, setIdFromUrl] = useState(parseInt(useParams().id))
    const [userData, setUserData] = useState(mockedDataUser.find(data => data.id === idFromUrl))
    const [userActivity, setUserActivity] = useState(mockedDataActivity.find(data => data.userId === idFromUrl))
    const [userSessions, setUserSessions] = useState(mockedDataSessions.find(data => data.userId === idFromUrl))
    const [userPerformance, setUserPerformance] = useState(mockedDataPerformance.find(data => data.userId === idFromUrl))
    
    console.log(mockedDataUser);
    console.log(mockedDataActivity);
    console.log(mockedDataSessions);
    console.log(mockedDataPerformance);

    return (
        <div className='dashboard'>
           <Header userName={userData.userInfos.firstName}/>
            <div className='charts'>
                <Activity data={userActivity.sessions}/>
                <Session data={userSessions.sessions}/>
                <Performance data={userPerformance.data} kind={userPerformance.kind}/> 
            </div>
        </div>
    )
}

export default Dashboard
