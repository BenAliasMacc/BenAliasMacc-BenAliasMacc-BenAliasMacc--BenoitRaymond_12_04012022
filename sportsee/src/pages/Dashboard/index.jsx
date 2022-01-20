import Activity from '../../component/Activity/index.jsx';
import Session from '../../component/Session/index.jsx';
import Performance from '../../component/Performance/index.jsx';
import Score from '../../component/Score/index.jsx';
import Header from '../../component/Header/index.jsx';
import KeyData from '../../component/KeyData/index.jsx';
import { useParams } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { GetUserDatas, GetUserActivity, GetUserSessions, GetUserPerformance } from '../../data/data.js';
import './index.css'
import Error from '../Error/index.jsx';

// Mocked Data for testing
import { mockedDataUser, mockedDataActivity, mockedDataSessions, mockedDataPerformance } from '../../data/mockedData.js'

function Dashboard() {

    const id = parseInt(useParams().id)
    const [errorApi, setErrorApi] = useState(false)
    const mockedData = false // Set as true if you want to use the mocked

    // Mocked Data for testing
    const mockedUserData = mockedDataUser.find(data => data.id === id)
    const mockedUserActivity = mockedDataActivity.find(data => data.userId === id)
    const mockedUserSessions = mockedDataSessions.find(data => data.userId === id)
    const mockedUserPerformance = mockedDataPerformance.find(data => data.userId === id)

    const [userData, setUserData] = useState('');
    const [userActivity, setUserActivity] = useState([]);
    const [userSessions, setUserSessions] = useState([]);
    const [userPerformance, setUserPerformance] = useState('');
    
    // Data from Api
    useEffect(() => {
        /**
        * @param {number} id from URL
        * @return { Promise }
                     */
                    GetUserDatas(id).then(response => setUserData(response.data.data)).catch(() => setErrorApi(true))
                    GetUserActivity(id).then(response => setUserActivity(response.data.data)).catch(() => setErrorApi(true))
                    GetUserSessions(id).then(response => setUserSessions(response.data.data)).catch(() => setErrorApi(true))
                    GetUserPerformance(id).then(response => setUserPerformance(response.data.data)).catch(() => setErrorApi(true))
    }, [id])

    // Verify if userData is true and map the keyData
    const mappedKeyData = userData && (Object.keys(!mockedData ? userData.keyData : mockedUserData.keyData ).map((elt, index) => <KeyData key={`${index}-${elt}`} data={elt} value={!mockedData ? userData.keyData[elt] : mockedUserData.keyData[elt]}/>))

    return !errorApi ? (
        <div className='dashboard'>
           {userData && <Header userName={!mockedData ? userData.userInfos.firstName : mockedUserData.userInfos.firstName}/>}
            <div className='charts'>
                {userActivity && <Activity data={!mockedData ? userActivity.sessions : mockedUserActivity.sessions}/>}
                {userSessions && <Session data={!mockedData ? userSessions.sessions : mockedUserSessions.sessions}/>}
                {userPerformance && <Performance data={!mockedData ? userPerformance.data : mockedUserPerformance.data} kind={!mockedData ? userPerformance.kind : mockedUserPerformance.kind}/> }
                {userData && <Score data={!mockedData ? (userData.todayScore || userData.score) : (mockedUserData.todayScore || mockedUserData.score)}/>}
                <div className='keyDataContainer'>
                    {mappedKeyData}
                </div>
            </div>
        </div>
    ) : (
        <Error/>
    )
}

export default Dashboard
