import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigService } from 'src/app/appconfig/appconfig.service';

@Injectable()
export class CustominterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    var githubtoken=AppConfigService.get('github_token')

    var newRequest=request.clone({
      headers: new HttpHeaders({
        Accept: 'application/vnd.github+json',
        Authorization: githubtoken
      })
    })

    return next.handle(newRequest);
  }
}
