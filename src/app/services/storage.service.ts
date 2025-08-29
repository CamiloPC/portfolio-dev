import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class StorageService {

  getItem(key: string): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  }

  setItem(key: string, value: string) {
    if (typeof window !== 'undefined') localStorage.setItem(key, value);
  }
}
