import { Component, HostListener, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  isScrolled = signal(false);
  isMenuOpen = signal(false);
  isDarkMode = signal(true); // Default to dark mode based on class="dark" in index.html

  ngOnInit() {
    // Check initial scroll position
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  toggleTheme() {
    const isDark = !this.isDarkMode();
    this.isDarkMode.set(isDark);
    
    // Toggle class on the html element
    const htmlDiv = document.documentElement;
    if (isDark) {
      htmlDiv.classList.add('dark');
    } else {
      htmlDiv.classList.remove('dark');
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    // Simulate sending message
    alert('Thank you for reaching out! I will get back to you soon.');
    const form = event.target as HTMLFormElement;
    form.reset();
  }
}
