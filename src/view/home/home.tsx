import React, { useEffect } from "react";
import './home.scss'
import Clipboard from 'clipboard';

interface Foo {
    [key: string]: number;
    x: number;
    y: number;
}
let foo: Foo = {
    x: 1,
    y: 2
}
console.log(foo);

interface App {
    base: string;
    index: number;
}
const pp: Partial<App> = {
    base: 'aaa'
}
console.log(pp);

const Home: React.FC<any> = (props) => {
    useEffect(()=> {
        const copy = new Clipboard('.copy-btn');
        copy.on('success', e => {
            console.log(e);
        });
        copy.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        })

        //索引签名
        let obj: {[key: string]: {message: string}} = {
            'abc': { message: '111' }
        }
        console.log(obj)
    }, [])

    return(
        <div className="home">
            <button
                data-clipboard-text='这里是需要复制的文本'
                className="copy-btn"
                type="button"
            >复制</button>
        </div>
    ) 
}

export default Home