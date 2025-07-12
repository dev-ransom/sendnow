// src/utils/LocalStorageManager.ts

class LocalStorageManager {
    private static instance: LocalStorageManager;
  
    private constructor() {
      // Prevent direct instantiation
      if (LocalStorageManager.instance) {
        return LocalStorageManager.instance;
      }
      LocalStorageManager.instance = this;
    }
  
    public static getInstance(): LocalStorageManager {
      if (!LocalStorageManager.instance) {
        LocalStorageManager.instance = new LocalStorageManager();
      }
      return LocalStorageManager.instance;
    }
  
    public setItem<T>(key: string, value: T): void {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
      }
    }
  
    public getItem<T>(key: string): T | null {
      if (typeof window !== 'undefined') {
        const value = localStorage.getItem(key);
        return value ? (JSON.parse(value) as T) : null;
      }
      return null;
    }
  
    public removeItem(key: string): void {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
      }
    }
  
    public clear(): void {
      if (typeof window !== 'undefined') {
        localStorage.clear();
      }
    }
  }
  
  export const storageManager = LocalStorageManager.getInstance();
  