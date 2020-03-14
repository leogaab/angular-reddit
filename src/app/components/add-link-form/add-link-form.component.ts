import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-link-form',
  templateUrl: './add-link-form.component.html',
  styleUrls: ['./add-link-form.component.css']
})
export class AddLinkFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log('Adding article title: ' + title);
    console.log('Adding article link: ' + link);
    return false;
  }

}
