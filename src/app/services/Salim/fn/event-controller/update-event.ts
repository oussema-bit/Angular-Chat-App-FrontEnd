/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Event } from '../../models/event';

export interface UpdateEvent$Params {
  eventid: number;
      body: Event
}

export function updateEvent(http: HttpClient, rootUrl: string, params: UpdateEvent$Params, context?: HttpContext): Observable<StrictHttpResponse<Event>> {
  const rb = new RequestBuilder(rootUrl, updateEvent.PATH, 'put');
  if (params) {
    rb.path('eventid', params.eventid, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Event>;
    })
  );
}

updateEvent.PATH = '/event/updatevent/{eventid}';
