1. APP_INTITIALIZER 

Built-in Injection Token which we can use to load some data before Angular Starts bootstrapping our application.
It expects functions and those functions can either return value or Promise<value> or Observable<Value>
It will wait for promises to resolve & observables to complete & error out, 
We can provide multiple functions and it will wait until our functions have executed , if every function is completed successfully,
then only it will start with bootstrapping process, else it will cancel the bootstrap.

 We usually store our END points in environment files, but drawback is that we can't change them at runtime, but if we store them in
 database we can make changes to them at runtime. So basically we can use this feature to load end points at runtime!
  
  What if our api fails where and how to handle the error?
  https://stackoverflow.com/questions/48564687/how-to-handle-inform-users-about-unrecoverable-exceptions-in-an-app-initializer
  
******************************************************************************
2. HTTP_INTERCEPTORS
******************************************************************************
3. Global Error Handler
******************************************************************************
4. Subject With Service Pattern to Ngrx With Facade Pattern !
******************************************************************************
5. Change Detection - onPush, NgZone, Unidirectional Data Flow 
******************************************************************************
6. Content Projection & Template Ref's
******************************************************************************
7. Dynamic Components via Host Views or Components
******************************************************************************

8. Presenter Container Component Pattern
******************************************************************************
9. Router Guards
******************************************************************************
10. Authentication
******************************************************************************
11. Lazy Loading
******************************************************************************
12. Source Map Explorer & Bundle Budgets!
******************************************************************************
13. Control Value Accessor
******************************************************************************
14. Typeahead Component
*****************************************************************************
15. Angular CDK like Overlay, Portal etc.
******************************************************************************
16. Dependency Injection, Injection Tokens,
******************************************************************************
17. Unit Testing
******************************************************************************
18. TypeScript
******************************************************************************
