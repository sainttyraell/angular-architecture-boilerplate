export class AbstractComponent {
  trackByFn(index, item?, attribute?) {
    return item && item[attribute] ? item : index;
  }
}
