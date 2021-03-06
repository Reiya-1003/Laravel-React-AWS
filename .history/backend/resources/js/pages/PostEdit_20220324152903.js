import React, { useState, useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PostFrom from '../components/PostFrom';


const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));

const headerList = ['名前', '一言', '編集'];


function PostEdit(props) {
    const classes = useStyles();
   const params = useParams();
   console.log(params)





    const [editData, setEditData] = useState({name:'', content:''});


    useEffect(() => {
        getEditData();
      }, [])

    function getEditData(){
        axios
            .post('/api/post/edit', {
                id: params.id
            })
            .then(res => {
                setEditData(res.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    function updatePost(){
        if(editData == ''){
            return;
        }
        //入力値を投げる
        axios
            .post('/api/post/update', {
                id: params.id,
                name: editData.name,
                content: editData.content
            })
            .then((res) => {
                setEditData(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function inputChange(e){
        const key = e.target.name;
        const value = e.target.value;
        editData[key] = value;
        let data = Object.assign({}, editData);
        setEditData(data);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h1 className="text-center">タスク編集</h1>
                        <Card className={classes.card}>
                            <PostFrom data={editData}  inputChange={inputChange} btnFunc={updatePost}　/>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostEdit;
