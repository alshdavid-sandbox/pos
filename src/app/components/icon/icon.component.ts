import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @HostBinding('class') 
  private classList

  @Input()
  set type(value: string) {
    this.iconType = value
    this.process()
  }

  @Input()
  set src(value: string) {
    this.iconSrc = value
    this.process()
  }

  private iconType = 'fas'
  private iconSrc = ''

  process() {
    this.classList = `${this.iconType} fa-${this.iconSrc}`
  }
}
