import { InjectionToken } from "@angular/core";

export const DELAY = new InjectionToken<number>("Delay",{
    factory:()=> 1000
})