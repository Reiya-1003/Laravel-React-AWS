<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post; //Postmodelをuseする

class PostController extends Controller
{
    //postの一覧を表示する
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts,200);
    }

   public function create(Request $request)
   {
       $post = new Post;
       $post->name = $request->name;
       $post->content = $request->content;
       $post->save();
       $posts = Post::all();
       return  $posts
    }

    //編集画面に遷移するためのアクション
    public function edit(Request $request)
    {
        $post = Post::find($request->id);
        return $post;
    }

    //データを更新するためのアクション
    public function update(Request $request)
    {
        $posts = Post::find($request->id);
        $posts->name = $request->name;
        $posts->content = $request->content;
        $posts->save();
        $posts = Post::all();
        return $posts;
    }
}
