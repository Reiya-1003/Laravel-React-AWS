import React,{useState, useEffect} from 'react';
import {Card} from '@material-ui/core';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import axios from 'axios'
import PostFrom from '../components'


const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));



const PostEdit = (props) => {
const classes = useStyles();

const params = props.match.params;

const [editData, setEditData] = useState({name:'', content:''});

useEffect(()=>{
    getEditData();
},[])

const getEditData=()=>{
    axios.post('/api/edit',{
        id: params.id
    })
    .then(res => {
        setEditData(res.data);
    })
    .catch(()=>{
        console.log('通信に失敗しました')
    })
}


    return (
        <div>

        </div>
    )
}

export default PostEdit
