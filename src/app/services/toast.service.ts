import { Injectable, signal, WritableSignal } from "@angular/core";

interface ToastData {
  id: number;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  activeToasts: WritableSignal<ToastData[]> = signal([]);

  private readonly duration = 3000;

  show(message: string): void {
    const toastID = Date.now();
    const toast: ToastData = { id: toastID, message };

    this.activeToasts.update(toasts => [...toasts, toast]);

    setTimeout(() => {
      this.removeToast(toastID);
    }, this.duration);
  }

  removeToast(id: number): void {
    this.activeToasts.update(toasts => toasts.filter(toast => toast.id !== id));
  }
}