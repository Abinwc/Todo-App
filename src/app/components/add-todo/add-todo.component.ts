import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onClickSubmit(data) {
    alert("Entered Todo is : " + data.addTodo);
  
  }
}
