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

        $id = DB::getPdo()->lastInsertId();

    //      $response = $this->post('/api/delete',[

    //        'id'=> $id

    //      ]);

    //    $response->assertStatus(200);

     }

}
