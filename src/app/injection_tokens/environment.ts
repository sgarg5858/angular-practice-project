import { InjectionToken } from "@angular/core";
import { environment } from "src/environments/environment";

export interface Environment{
    production:boolean;
}
export const ENVIRONMENT= new InjectionToken<Environment>('Environment',{
    factory:()=> environment
})