import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {
  boardId: string;
  lists = [];
  createNewList = false;
  newListName: string;
  constructor(private router: Router, private route: ActivatedRoute, public sharedService: SharedService) {
    this.route.params.subscribe(params => {
      this.boardId = params['boardId'];
      for (let item of this.sharedService.rootObject) {
        if (this.boardId === item.id) {
          this.lists = item.lists;
          break;
        }
      }
    });
  }

  ngOnInit() {
    for (let i = 0; i < this.lists.length; i++) {
      this.lists[i].showDelete = false;
      this.lists[i].addTask = false;
      for (let item of this.lists[i].tasks) {
        item.editable = false;
      }
    }
  }

  getBoardName() {
    if (this.boardId) {
      let found = false, board: any;
      for (let item of this.sharedService.rootObject) {
        if (this.boardId === item.id) {
          this.lists = item.lists;
          board = item;
          found = true;
          break;
        }
      }
      return found ? (board.boardName) : '';
    } else {
      return '';
    }
  }

  toggleDelete(index: number) {
    setTimeout(() => {
      this.lists[index].showDelete = (this.lists[index].showDelete) ? false : true;
    }, 100);
  }

  deleteList(index: number) {
    setTimeout(() => {
      this.lists.splice(index, 1);
    }, 100);
  }

  cancelNewList() {
    this.createNewList = false;
    this.newListName = '';
  }

  saveList() {
    if (this.newListName && this.newListName.trim()) {
      this.lists.push({
        id: this.generateRandomBoardId(),
        name: this.newListName,
        nameEditable: false,
        showDelete: false,
        addTask: false,
        tasks: []
      });
      this.cancelNewList();
    }
  }

  generateRandomBoardId() {
    return Number(Math.floor(Math.random() * 20));
  }

  initiateNewTask(index: number) {
    setTimeout(() => {
      this.lists[index].addTask = true;
    }, 100);
  }

  saveTask(index: number, taskName: string) {
    this.lists[index].tasks.push({
      taskText: taskName,
      id: this.generateRandomBoardId(),
      editable: false
    });
    this.lists[index].addTask = false;
  }

  updateTask(i: number, j: number, val: string) {
    this.lists[i].tasks[j].taskText = val;
    this.cancelTaskEdit(i, j);
  }

  cancelTaskEdit(i: number, j: number) {
    setTimeout(() => {
      this.lists[i].tasks[j].editable = false
    }, 100);
  }

  deleteTask(i: number, j: number) {
    this.lists[i].tasks.splice(j, 1);
  }
}
