<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            PostsTableSeeder::class,
        ]);
    }
}


// マイグレーションで DB のテーブルを作成したらテストでサンプルデータをいれてみます。

// これをシーダーと言います。

// Laravel においてシーダーとはデータベースにテストデータを一斉に挿入する処理を指します。

// シーダー(Seeder)とは英語で「種をまく人」という意味になります。

// DB に種をまくイメージですね。

// シーダーの作業手順としては

// １．シーダーファイルを作成
// ２．シーダーファイルの run() にサンプルデータを記述
// ３．DatabaseSeeder.php でシーダーファイルをコール
// ４．シーダーの実行

// となります。

// それでは実際に作成してみます。
