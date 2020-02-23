import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';

import { ArchTranslateService } from './translate.service';

@Injectable({
  providedIn: 'root',
})
export class TranslateResolver implements Resolve<Observable<boolean>> {
  constructor(private archTranslateService: ArchTranslateService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const { data } = route;

    if (!data.i18n) {
      return of(true);
    }

    return this.archTranslateService.onLoadPartialTranslations(data.i18n).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) =>
        throwError(httpErrorResponse)
      ),
      mapTo(true)
    );
  }
}
