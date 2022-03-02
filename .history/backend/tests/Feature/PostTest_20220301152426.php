<?php

namespace Tests\Feature;

use App\Models\Post;
use Tests\TestCase;
use Illuminate\Support\Facades\DB;

class PostTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_getPost()
    {
      $response = $this->get('/api/posts');

     $response
     ->assertStatus(200)
     ->assertJsonStructure([

             '*'=>[
                 'id',
                 'name',
                 'content',
                 'created_at',
                 'updated_at'
             ]

     ]);//一覧表示のテスト
    }

     public function test_Create()
     {
       $response = $this->post('/api/posts/create',[

           'name' => 'testname',
           'content'=> 'testcontent',

       ]);

       $response->assertStatus(200);
     }//新規作成のテスト

     public function test_Edit()
     {
        $maxid = Post::max('id');//一番大きいid
        $response = $this->post('/api/post/edit',[

        'id'=> $maxid
          //testCreate()で作ったテストデータ
               ]);
        $response->assertStatus(200)
        ->assertJson([
            'id'=> $maxid,
            'name' => 'testname',
            'content'=> 'testcontent',
        ]);
        } //editのテスト

        public function test_Update()
        {
           $maxid = Post::max('id');//一番大きいid
           $response = $this->post('/api/post/update',[

           'id'=> $maxid,
           'name' => 'testupdatename',
           'content'=> 'testupdatecontent', //test_create()を書き換える
             //testCreate()で作ったテストデータを変える
                  ]);
           $response->assertStatus(200);
           } //updateのテスト

     public function test_Delete()
     {
        // $posts = DB::table('posts')->get();

        $maxid = Post::max('id');
        $response = $this->post('/api/delete',[

        'id'=> $maxid

               ]);
      $response->assertStatus(200);


     }//デリートのテスト（test_Create()で作られたものを消してる）


}
