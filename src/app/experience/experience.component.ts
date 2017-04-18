import { Component, OnInit } from '@angular/core';

export class Experience{
	id: number;
	title: string;
	workingAt: string;
	thumbnail: string;
	description: string;
	startedAt: string;
	endedAt: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent{
	experiences: Experience[] = [
		{
			id: 1,
			title: 'Full Stack Developer',
			workingAt: 'Bandingin.com',
			thumbnail: '/assets/demo1.png',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			startedAt: '',
			endedAt: '',
		},
		{
			id: 2,
			title: 'Software Engineer',
			workingAt: 'PT. Trikarya Teknologi',
			thumbnail: '/assets/demo2.png',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			startedAt: '',
			endedAt: '',
		},
		{
			id: 3,
			title: 'Web Developer',
			workingAt: 'CV. Lapantiga',
			thumbnail: '/assets/demo3.png',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			startedAt: '',
			endedAt: '',
		},
		{
			id: 4,
			title: 'Web Developer',
			workingAt: 'Aksamedia',
			thumbnail: '/assets/demo4.png',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			startedAt: '',
			endedAt: '',
		},
		{
			id: 5,
			title: 'Web Developer Internship',
			workingAt: 'CV. Superspace Indonesia',
			thumbnail: '/assets/demo5.png',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			startedAt: '',
			endedAt: '',
		}
	];
	selectedExperience = this.experiences[0];
	showDetail(id): void{
		this.selectedExperience = this.experiences[id-1];
	}
}
