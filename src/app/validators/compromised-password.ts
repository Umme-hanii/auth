import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, catchError, map, of } from "rxjs";
import { EnzoicService } from "../service/enzoic.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CompromisedPassword implements AsyncValidator {
    constructor(private enzoic: EnzoicService) {
        // this.validate = this.validate.bind(this)
    }

    validate = (control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        return this.enzoic.checkPassword(control.value).pipe(
            map(() => {
               return { compromised: true }
            }),
            catchError((err) => {
                console.log(err)
                return of(null)
            })
        )
    }
}
