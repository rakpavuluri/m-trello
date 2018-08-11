import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBoardsComponent } from './all-boards/all-boards.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';



const routes: Routes = [
    { path: '', redirectTo: 'boards', pathMatch: 'full' },
    { path: 'boards', component: AllBoardsComponent },
    { path: 'boards/:boardId/tasks', component:  AllTasksComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
