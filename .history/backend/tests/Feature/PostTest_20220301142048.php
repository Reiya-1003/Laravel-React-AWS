<?php

namespace Tests\Feature;


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
      $response->dump();
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
     }

     public function test_Delete()
     {
        $posts =  44;
        $response = $this->post('/api/delete',[
            'id' => $posts,


        ]);

        $response->assertStatus(200);
     }

}
