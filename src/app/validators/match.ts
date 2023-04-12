import { Injectable } from "@angular/core";
import { AbstractControl, Validator } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class Match implements Validator{
    validate(formGroup: AbstractControl) {
        const { password, confirmPwd } = formGroup.value

        if(password === confirmPwd) return null

        return { mismatch: true }
    }
}
