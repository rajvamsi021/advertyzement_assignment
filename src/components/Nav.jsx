import React,{useState} from 'react'



function Nav({sendDataToParent}) {

    const [btnClick , setBtnClick] = useState(true)


    return (
        <div className='container'>
            <div className="nav">
                <ul>
                    <li className='left'>Advertyzement</li>
                    <li className='right'><button onClick={() => {
                        setBtnClick(true);
                        sendDataToParent(btnClick);}}>Get Users</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
