import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.model';

@Component({
  selector: 'app-add-link-form',
  templateUrl: './add-link-form.component.html',
  styleUrls: ['./add-link-form.component.css']
})
export class AddLinkFormComponent implements OnInit {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article ('Angular', 'http://angular.io', 3),
      new Article ('Fullstack', 'http://fullstack.io', 2),
      new Article ('Angular Homepage', 'http://angular.io', 1)
    ];
  }

  ngOnInit(): void {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log('Adding article title: ' + title.value);
    console.log('Adding article link: ' + link.value);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';

    return false;
  }

}
