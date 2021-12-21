import React, { useEffect } from "react";
import './login.scss';

export async function fetchh(params: boolean): Promise<string> {
    return new Promise(function(resolve, reject) {
        resolve('1111')
    })
}

const Login: React.FC<any> = (props) => {
    useEffect(()=> {

    }, [])

    return(
        <div className="login">
            <button>点击</button>
        </div>
    ) 
}

export default Login