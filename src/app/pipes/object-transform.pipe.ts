import { Pipe, PipeTransform, ChangeDetectionStrategy } from '@angular/core';

@Pipe({
  name: 'objectTransform',
  pure: false
})
export class ObjectTransform implements PipeTransform {
  transform(value: object): any[] {
    return Object
        .keys(value)
        .map(key => ({
            key,
            ...value[key]
        }))
  }
}