import React from 'react';
import './App.css';
import { Button, message } from 'antd';
import { getTest } from './api/test';

function click() {
    getTest()
        .then((result: any) => {
            console.log(result.data);
            message.success(result.data);
        })
        .catch((err: any) => {
            console.log(err);
        });
}
function App() {
    return (
        <div>
            <Button type="primary" onClick={click}>
                react
            </Button>
        </div>
    );
}

export default App;
