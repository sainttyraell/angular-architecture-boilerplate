import { ITrackBy } from '@app/core/interceptors/track-by.interface';

export class AbstractComponent implements ITrackBy {
  trackByFn(index, item?, attribute?) {
    return item && item[attribute] ? item : index;
  }
}
