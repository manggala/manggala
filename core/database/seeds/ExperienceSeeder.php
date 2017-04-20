<?php

use Illuminate\Database\Seeder;

class ExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('experiences')->insert([
			'title' =>  'Full Stack Developer',
			'workingAt' =>  'Bandingin.com',
			'thumbnail' =>  '/assets/demo1.png',
			'description' =>  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'startedAt' =>  '',
			'endedAt' =>  '',
        	]);
        DB::table('experiences')->insert([
        	'title' => 'Software Engineer',
			'workingAt' => 'PT. Trikarya Teknologi',
			'thumbnail' => '/assets/demo2.png',
			'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'startedAt' => '',
			'endedAt' => '',
        	]);
        DB::table('experiences')->insert([
        	'title' => 'Web Developer',
			'workingAt' => 'CV. Lapantiga',
			'thumbnail' => '/assets/demo3.png',
			'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'startedAt' => '',
			'endedAt' => '',
        	]);
        DB::table('experiences')->insert([
        	'title' => 'Web Developer',
			'workingAt' => 'Aksamedia',
			'thumbnail' => '/assets/demo4.png',
			'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'startedAt' => '',
			'endedAt' => '',
        	]);
        DB::table('experiences')->insert([
        	'title' => 'Web Developer Internship',
			'workingAt' => 'CV. Superspace Indonesia',
			'thumbnail' => '/assets/demo5.png',
			'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'startedAt' => '',
			'endedAt' => '',
        	]);
    }
}
