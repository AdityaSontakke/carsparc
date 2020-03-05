import {  Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector:'[appconfirmUpdateSelector]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:confirmValidatorDirective,
        multi:true
    }]
})

export class confirmValidatorDirective implements Validator{
    @Input() appconfirmUpdateSelector:string;
    validate(control:AbstractControl):{[key:string]:any}|null{
        const controlToCompare=control.parent.get(this.appconfirmUpdateSelector);

        if(controlToCompare&&controlToCompare.value !==control.value){
            return{'notequal':true}
        }
        return null;

    }

}