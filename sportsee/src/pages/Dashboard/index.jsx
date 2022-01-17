import Activity from '../../component/Activity/index.jsx';
import Session from '../../component/Session/index.jsx';
import Performance from '../../component/Performance/index.jsx';
import Score from '../../component/Score/index.jsx';
import Header from '../../component/Header/index.jsx';
import KeyData from '../../component/KeyData/index.jsx';
import { useParams } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { mockedDataUser, mockedDataActivity, mockedDataSessions, mockedDataPerformance } from '../../data/mockedData.js'
import { GetUserDatas, GetUserActivity, GetUserSessions, GetUserPerformance } from '../../data/data.js';
import './index.css'

function Dashboard() {

    const id = parseInt(useParams().id)
    // UseRef pour passer ID dans useEffect
    // const userId = props.match.params.id

    const [userData, setUserData] = useState('');
    const [userActivity, setUserActivity] = useState([]);
    const [userSessions, setUserSessions] = useState([]);
    const [userPerformance, setUserPerformance] = useState('');
    
    useEffect(() => {
    
                    GetUserDatas(id).then(response => setUserData(response.data.data))
                    GetUserActivity(id).then(response => setUserActivity(response.data.data))
                    GetUserSessions(id).then(response => setUserSessions(response.data.data))
                    GetUserPerformance(id).then(response => setUserPerformance(response.data.data))
    }, [])

    // Mocked DataView
    // const userData = mockedDataUser.find(data => data.id === id)
    // const userActivity = mockedDataActivity.find(data => data.userId === id)
    // const userSessions = mockedDataSessions.find(data => data.userId === id)
    // const userPerformance = mockedDataPerformance.find(data => data.userId === id)

    const mappedKeyData = userData && (Object.keys(userData.keyData).map((elt, index) => <KeyData key={`${index}-${elt}`} data={elt} value={userData.keyData[elt]}/>))

    return (
        <div className='dashboard'>
           {userData && <Header userName={userData.userInfos.firstName}/>}
            <div className='charts'>
                {userActivity && <Activity data={userActivity.sessions}/>}
                {userSessions && <Session data={userSessions.sessions}/>}
                {userPerformance && <Performance data={userPerformance.data} kind={userPerformance.kind}/> }
                {userData && <Score data={userData.todayScore || userData.score}/>}
                <div className='keyDataContainer'>
                    {mappedKeyData}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
