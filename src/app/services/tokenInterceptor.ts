import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const userJson = sessionStorage.getItem('token')
        const adminJson = sessionStorage.getItem('admin')

        if(sessionStorage.getItem("token")){
            const authHeader=req.clone({
                headers: req.headers.set("X-AUTH-HEADER", userJson!)
            })
            req = authHeader;
        }
        else if (sessionStorage.getItem('admin')) {
            const authHeader=req.clone({
            headers: req.headers.set("X-AUTH-HEADER", adminJson!)
        })
        req = authHeader;
        }
        return next.handle(req);

}
}