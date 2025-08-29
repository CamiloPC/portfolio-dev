import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './services/storage.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-dev';

  currentLang: 'es' | 'en' = 'es';
  darkMode: boolean = true;

  constructor(
    private translate: TranslateService,
    private _storageService: StorageService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    // Load language
    const savedLang = this._storageService.getItem('lang') as 'es' | 'en';
    this.currentLang = savedLang ?? 'es';
    this.translate.use(this.currentLang);

    // Load theme
    const savedTheme = this._storageService.getItem('theme');
    this.darkMode = savedTheme === 'light' ? false : true;
    this.updateTheme();
  }

  // Language
  toggleLang() {
    this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
    this.translate.use(this.currentLang);
    this._storageService.setItem('lang', this.currentLang);
  }

  get langButtonLabel() {
    return this.currentLang === 'es'
      ? 'ES'
      : 'EN';
  }

  // Theme
  toggleTheme() {
    this.darkMode = !this.darkMode;
    this.updateTheme();
    this._storageService.setItem('theme', this.darkMode ? 'dark' : 'light');
  }

  private updateTheme() {
    if (this.darkMode) {
      this.document.documentElement.classList.add('dark');
    } else {
      this.document.documentElement.classList.remove('dark');
    }
  }

}
