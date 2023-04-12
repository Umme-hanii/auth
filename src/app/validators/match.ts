import { AbstractControl, Validator } from "@angular/forms";

export class Match implements Validator{
    validate(formGroup: AbstractControl) {
        return null
    }
}
