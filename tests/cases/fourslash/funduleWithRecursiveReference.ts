/// <reference path='fourslash.ts'/>

////module M {
////    export function C() {}
////    export module C {
////    export var /**/C = M.C
////  }
////}

goTo.marker();
verify.quickInfoIs('var M.C.C: typeof M.C');
verify.numberOfErrorsInCurrentFile(0);