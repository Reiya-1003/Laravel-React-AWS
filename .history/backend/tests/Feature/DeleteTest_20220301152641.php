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
