// import { useState, useEffect } from 'react';

async function GetUserDatas() {
    const userData = await fetch('http://localhost:3000/user/' + 18)
    .then(response => response.json())

    console.log(userData);
    return userData
}

export default GetUserDatas



// const GetUserDatas = () => {

//     const [userData, setUserData] = useState([])

//     useEffect(() => {
//         async function fetchUserDatas() {
//                 const response = await fetch('http://localhost:3000/user/' + 18)
//                 const userData = await response.json()
//                 setUserData(userData)
//                 console.log(userData);
//         }
//         fetchUserDatas()
//     }, [])
    
//     return userData
// }

// export default GetUserDatas