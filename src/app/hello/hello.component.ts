import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {
  constructor() {}
  user = {
    name: 'shindo',
    age: 27,
  };

  ngOnInit(): void {}
}
