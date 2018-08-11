import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-boards',
  templateUrl: './all-boards.component.html',
  styleUrls: ['./all-boards.component.scss']
})
export class AllBoardsComponent implements OnInit {
  createNew = false;
  newBoardName: string;
  constructor(public sharedService: SharedService, private router: Router) { }

  ngOnInit() {
  }

  deleteBoard(index: number) {
    this.sharedService.rootObject.splice(index, 1);
  }

  cancelNewBoard() {
    this.createNew = false;
    this.newBoardName = '';
  }

  saveBoard() {
    if (this.newBoardName && this.newBoardName.trim()) {
      this.sharedService.rootObject.push({
        boardName: this.newBoardName,
        id: this.getUniqueBoardId(),
        lists: []
      });
      this.cancelNewBoard();
    }
  }

  getUniqueBoardId() {
    let id = this.generateRandomBoardId();
    for (let item of this.sharedService.rootObject) {
      const idNumb = item.id.split('_')[1];
      if (id === idNumb || !id) {
        this.getUniqueBoardId();
      }
    }
    return id;
  }

  generateRandomBoardId() {
    return 'board_' + Number(Math.floor(Math.random() * 20));
  }

  goToTasks(boardId: string) {
    this.router.navigateByUrl('boards/' + boardId + '/tasks');
  }

}
