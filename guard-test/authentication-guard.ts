import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { AuthService } from "./auth.service";

export const authenticationGuard:CanActivateFn=(router,state)=>{
    const authService= inject(AuthService);
    console.log(router.url);
    return authService.isAcess();
}