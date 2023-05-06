import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({ template: '' })
export class BasecomponentComponent implements OnDestroy {
  public subscriptions: Subscription[] = [];
  public beforeUnsubscribe!: () => void;
  public afterUnsubscribe!: () => void;
  ngOnDestroy(): void {
    if (this.beforeUnsubscribe) this.beforeUnsubscribe();
    this.subscriptions.forEach((sub) => sub?.unsubscribe());
    if (this.afterUnsubscribe) this.afterUnsubscribe();
  }
}
