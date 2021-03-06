import React , {useState, useEffect}from 'react';
import axios from 'axios'
import { Button, Card } from '@material-ui/core';
import { makeStyles, createStyles, ThemeProvider } from '@material-ui/core/styles';
import MainTable from '../components/MainTable'
import PostFrom from '../components/PostForm';




//スタイルの定義
const useStyles = makeStyles((them)=> createStyles({
    card:{
        //theme.spacing(2);  `${8 * 2}px` = '16px'
        margin: them.spacing(5),
        padding: them.spacing(3),
    },

}));

//ヘッダーのコンテンツ用の配列定義
const headerList = ['名前', 'タスク内容', '編集', '完了'];




function Home() {
    const classes = useStyles();
    const [posts,setPosts] = useState([]);
   console.log(posts)
    useEffect(()=>{
        getPostsData();
    },[])

    const getPostsData = ()=>{
        axios.get('/api/posts').then(response =>{
            setPosts(response.data);
            console.log(response.data);})
            .catch(()=>{
                console.log('通信に失敗');
            });
    }

    let rows = [];

    posts.map((post)=>
      rows.push({
          name : post.name,
          content: post.content,
          editBtn: <Button color="secondary" variant="contained">編集</Button>,
          deleteBtn: <Button color="primary" variant="contained">完了</Button>
      }))




    return (
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                  <div className="card">
                    <h1>タスク管理</h1>
                    <Card className={classes.card}>
                        <PostFrom/>
                    </Card>
                    <Card className={classes.card}>
                    　 <MainTable headerList={headerList} rows={rows}/>
                    </Card>
                  </div>

              </div>
            </div>
        </div>
    );
}

export default Home;
