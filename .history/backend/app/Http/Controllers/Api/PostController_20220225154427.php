<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts, 200);
    }

    public function create(Request $request)
    {
        $posts = new Post;
        $posts->name = $request->name;
        $posts->content = $request->content;
        $posts->save();
        $posts = Post::all();
        return $posts;
    }

    public function edit(Request $request)
    {
        $post = Post::find($request->id);
        return $post;
    }

    public function update(Request $request){
        $post = Post::find($request->id);
        $post->name = $request->name;
        $post->content = $request->content;
        $post->save();
        $posts = Post::all();
        return $posts;

    }

    public function delete(Request $request)
    {
        $post =  Post::find($request->id);
        $post->delete();
        $posts = Post::all();
        return $posts;
    }
}