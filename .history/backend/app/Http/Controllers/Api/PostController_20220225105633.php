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
       $posts = new Post;
       $posts->name = $request->name;
       $posts->content = $request->content;
       $posts->save();
       return response()->json($posts,200);
    }

    //編集画面に遷移するためのアクション
    public function edit(Request $request)
    {
        $posts = Post::find($request->id);
        return $posts;
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
