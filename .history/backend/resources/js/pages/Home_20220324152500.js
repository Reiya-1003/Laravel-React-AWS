import React , {useState, useEffect}from 'react';
import axios from 'axios'
import { Button, Card } from '@material-ui/core';
import { makeStyles, createStyles, ThemeProvider } from '@material-ui/core/styles';
import MainTable from '../components/MainTable'
import PostFrom from '../components/PostFrom';




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
    const [formData, setFormData] = useState({name:'',content:''});


    useEffect(()=>{
        getPostsData();
    },[])
　　　//一覧情報を取得しステートpostsにセットする
    const getPostsData = ()=>{
        axios.get('/api/posts').then(response =>{
            setPosts(response.data);
            console.log(response.data);})
            .catch(()=>{
                console.log('通信に失敗');
            });
    }
　　　//入力がされたら入力値を変更するfunction

    const inputChange =(e)=>{
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        let data = Object.assign({},formData);
        //Object.assign() メソッドは、すべての列挙可能な自身のプロパティの値を、
       // 1 つ以上のコピー元オブジェクトからコピー先オブジェクトにコピーするために使用されます
        setFormData(data);
    }
    let rows = [];
    posts.map((rowData) =>
        rows.push({
            user_name: rowData.name,
            post: rowData.content,
            btn: <Button color="secondary" variant="contained" key={rowData.id} href={`/post/edit/${rowData.id}`}>編集</Button>,
            deleteBtn: <Button color="primary" variant="contained" href="/" onClick={() => deletePost(rowData)}>完了</Button>
        })
    );


　　　const createPost = async()=>{
    if(formData == ''){
        console.log(formData)
        return;
        }
        //入力値をなげる
        await axios.post('/api/posts/create',{
            name: formData.name,
            content: formData.content
        })
        .then((res) =>{
            //戻り値をtodosにセット
            const tempPosts = posts
            tempPosts.push(res.data);
            setPosts(tempPosts)
            setFormData('');
        })
        .catch(error => {
            console.log(error)
        })
    }

    const deletePost = async(post)=>{
        await axios.post('/api/delete',{
            id:post.id
        })
        .then((res)=>{
            this.setState({
                posts: res.posts
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                  <div className="card">
                    <h1 className="text-center">タスク管理</h1>
                    <Card className={classes.card}>
                        <PostFrom data={formData} btnFunc={createPost} inputChange={inputChange}/>
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
