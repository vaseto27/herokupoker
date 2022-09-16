import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btntitle = 'herokupoker';

  users = [
    {username: 'Юли Маймуната', earnings: 0, costs: 0, imgUrl: 'assets/images/julilud.png'},
    {username: 'Васо Коня', earnings: 0, costs: 0, imgUrl: 'assets/images/vasil.png'},
    {username: 'Лъчи BadBeat Балъчи', earnings: 0, costs: 0, imgUrl: 'assets/images/lucho.png'},
    {username: 'Андрей Умрелия', earnings: 0, costs: 0, imgUrl: 'assets/images/andrei.png'},
    {username: 'Замера Дъртата Мърша', earnings: 0, costs: 0, imgUrl: 'assets/images/zamera.png'},
    {username: 'Вацун Лъвъ', earnings: 0, costs: 0, imgUrl: 'assets/images/vacata.png'},
    {username: 'Илийчо Камилийчо', earnings: 0, costs: 0, imgUrl: 'assets/images/kamil.png'},
    {username: 'Валю Дългия', earnings: 0, costs: 0, imgUrl: 'assets/images/valio.png'},
    {username: 'Светлю Паса', earnings: 0, costs: 0, imgUrl: 'assets/images/sve.png'},
  ];

  hello() {
    this.btntitle = "JULI E MRUSNA KURVAA"
  }



}
