import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit() {
    if (this.sharedService.rootObject && this.sharedService.rootObject.length) {

    } else {
      this.sharedService.rootObject.push({
        boardName: 'First Board',
        id: 'board_1',
        lists: [{
          name: 'list 1',
          nameEditable: false,
          showDelete: false,
          id: 'list_1',
          addTask: false,
          tasks: [{
            taskText: 'hey',
            id: 'task_1'
          }]
        },
        {
          name: 'list 2',
          nameEditable: false,
          showDelete: false,
          id: 'list_2',
          addTask: false,
          tasks: [{
            taskText: 'hey',
            id: 'task_2'
          }]
        }]
      });
      this.router.navigateByUrl('/boards');
    }
  }
}
