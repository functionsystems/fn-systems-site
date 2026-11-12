import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@app/shared/layouts/footer/footer/footer';
import { Header } from '@app/shared/layouts/header/header/header';

@Component({
  imports: [
    RouterOutlet,
    Header,
    Footer
],
  selector: 'app-master-page',
  styleUrl: './master-page.scss',
  templateUrl: './master-page.html',
})
export class MasterPage {}
