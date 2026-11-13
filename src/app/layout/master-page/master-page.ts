import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@app/shared/layouts/footer/footer/footer';
import { Header } from '@app/shared/layouts/header/header/header';
import { HeroSection } from '@app/shared/layouts/hero-section/hero-section';

@Component({
  imports: [
    RouterOutlet,
    Header,
    Footer,
    HeroSection
],
  selector: 'app-master-page',
  styleUrl: './master-page.scss',
  templateUrl: './master-page.html',
})
export class MasterPage {}
