<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Faker\Core\Number;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\Cast\String_;

use function PHPUnit\Framework\assertJson;

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
                 'id'=>1,
                 'name'=>"森田ひかる",
                 'content',
                 'created_at',
                 'updated_at'
             ]

     ]);
    }
   //一覧表示のテスト

}
