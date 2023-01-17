import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpReqInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      headers: req.headers
        .set('X-RapidAPI-Key', `${environment.XRapidAPIKey}`)
        .set('X-RapidAPI-Host', `${environment.XRapidAPIHost}`)
    });
    return next.handle(modifiedReq);
  }
}
