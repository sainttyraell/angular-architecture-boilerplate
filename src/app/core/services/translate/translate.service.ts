import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const DEFAULT_LANG = 'pl';
const PREFIX = 'assets/i18n';
const SUFFIX = `.json?t=${Date.now()}`;

type PartialTranslation = Record<string, string>;

@Injectable({
  providedIn: 'root',
})
export class ArchTranslateService {
  private readonly loadedTranslations = new Set<string>();

  get currentLang(): string {
    return this.translateService.currentLang || DEFAULT_LANG;
  }

  constructor(
    private translateService: TranslateService,
    private httpClient: HttpClient
  ) {}

  init(): void {
    this.translateService.setDefaultLang(DEFAULT_LANG);
  }

  onLoadPartialTranslations(
    partialTranslations: string[]
  ): Observable<PartialTranslation[]> {
    const translationsToLoad = partialTranslations.filter(
      partial => !this.loadedTranslations.has(partial)
    );

    return forkJoin(
      translationsToLoad.map(partial => this.onLoadTranslationFromFile(partial))
    ).pipe(
      tap(loadedTranslations => {
        partialTranslations.forEach(partial =>
          this.loadedTranslations.add(partial)
        );

        const translations = this.merge(loadedTranslations);
        this.translateService.setTranslation(
          this.currentLang,
          translations,
          true
        );
      })
    );
  }

  private onLoadTranslationFromFile(
    translationsName: string
  ): Observable<PartialTranslation> {
    const url = `${PREFIX}/${this.currentLang}/${translationsName}${SUFFIX}`;
    return this.httpClient.get<PartialTranslation>(url);
  }

  private merge(value: Array<Record<string, any>>): PartialTranslation {
    return value.reduce((accumulator, current) => {
      return { ...accumulator, ...current };
    }, {});
  }
}
