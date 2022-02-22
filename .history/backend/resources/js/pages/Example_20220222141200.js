import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core'; //Buttonをインポート

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">ここはExample.js</div>

                        <div className="card-body">I'm an example component!</div>
                        <Button color="primary" variant="contained"> materialButton</Button>
                        <Button color="secondary" variant="contained" href={'/'}> Home遷移</Button>
                       {/* 画面に反映まで時間差あるくさい */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;


