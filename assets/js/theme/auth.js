import PageManager from './page-manager';
import stateCountry from './common/state-country';
import nod from './common/nod';
import validation from './common/form-validation';
import forms from './common/models/forms';
import { classifyForm, Validators } from './common/form-utils';

export default class Auth extends PageManager {
    constructor(context) {
        super(context);
        this.formCreateSelector = 'form[data-create-account-form]';
    }

    registerLoginValidation($loginForm) {
        const loginModel = forms;

        this.loginValidator = nod({
            submit: '.login-form input[type="submit"]',
        });

        this.loginValidator.add([
            {
                selector: '.login-form input[name="login_email"]',
                validate: (cb, val) => {
                    const result = loginModel.email(val);

                    cb(result);
                },
                errorMessage: this.context.useValidEmail,
            },
            {
                selector: '.login-form input[name="login_pass"]',
                validate: (cb, val) => {
                    const result = loginModel.password(val);

                    cb(result);
                },
                errorMessage: this.context.enterPass,
            },
        ]);

        $loginForm.on('submit', event => {
            this.loginValidator.performCheck();

            if (this.loginValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    }

    registerForgotPasswordValidation($forgotPasswordForm) {
        this.forgotPasswordValidator = nod({
            submit: '.forgot-password-form input[type="submit"]',
        });

        this.forgotPasswordValidator.add([
            {
                selector: '.forgot-password-form input[name="email"]',
                validate: (cb, val) => {
                    const result = forms.email(val);

                    cb(result);
                },
                errorMessage: this.context.useValidEmail,
            },
        ]);

        $forgotPasswordForm.on('submit', event => {
            this.forgotPasswordValidator.performCheck();

            if (this.forgotPasswordValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    }

    registerNewPasswordValidation() {
        const newPasswordForm = '.new-password-form';
        const newPasswordValidator = nod({
            submit: $(`${newPasswordForm} input[type="submit"]`),
        });
        const passwordSelector = $(`${newPasswordForm} input[name="password"]`);
        const password2Selector = $(`${newPasswordForm} input[name="password_confirm"]`);

        Validators.setPasswordValidation(
            newPasswordValidator,
            passwordSelector,
            password2Selector,
            this.passwordRequirements,
        );
    }

    registerCreateAccountValidator($createAccountForm) {
        const validationModel = validation($createAccountForm);
        this.createAccountValidator = nod({
            submit: `${this.formCreateSelector} input[type='submit']`,
        });
        const $stateElement = $('[data-field-type="State"]');
        const emailSelector = `${this.formCreateSelector} [data-field-type='EmailAddress']`;
        const $emailElement = $(emailSelector);
        const passwordSelector = `${this.formCreateSelector} [data-field-type='Password']`;
        const $passwordElement = $(passwordSelector);
        const password2Selector = `${this.formCreateSelector} [data-field-type='ConfirmPassword']`;
        const $password2Element = $(password2Selector);

        this.createAccountValidator.add(validationModel);

        if ($stateElement) {
            let $last;

            // Requests the states for a country with AJAX
            stateCountry($stateElement, this.context, (err, field) => {
                if (err) {
                    throw new Error(err);
                }

                const $field = $(field);

                if (this.createAccountValidator.getStatus($stateElement) !== 'undefined') {
                    this.createAccountValidator.remove($stateElement);
                }

                if ($last) {
                    this.createAccountValidator.remove($last);
                }

                if ($field.is('select')) {
                    $last = field;
                    Validators.setStateCountryValidation(this.createAccountValidator, field);
                } else {
                    Validators.cleanUpStateValidation(field);
                }
                $createAccountForm.find("[data-field-type='State']").attr('tabindex', 12);
            });
        }

        if ($emailElement) {
            this.createAccountValidator.remove(emailSelector);
            Validators.setEmailValidation(this.createAccountValidator, emailSelector);
        }

        if ($passwordElement && $password2Element) {
            this.createAccountValidator.remove(passwordSelector);
            this.createAccountValidator.remove(password2Selector);
            Validators.setPasswordValidation(
                this.createAccountValidator,
                passwordSelector,
                password2Selector,
                this.passwordRequirements,
            );
        }

        $createAccountForm.on('submit', event => {
            this.createAccountValidator.performCheck();

            if (this.createAccountValidator.areAll('valid')) {             
                return;
            }
            event.preventDefault();
        });

        $("#aNextStep1").on('click', event => {
            event.preventDefault();

            if (this.validateStep1())
            {
                $("div.create-account-steps li").removeClass("active");
                $("div.create-account-steps li.create-account-step-1").addClass("valid");
                $("div.create-account-steps li.create-account-step-2").addClass("active");
                $("div.account-body div.form-row div.form-field").hide();
                this.showStep2();
                return;
            }
        });



        $("div.create-account-steps li a").on("click", event => {

            event.preventDefault();

            if (!$(event.target).closest("li").hasClass("valid") || $(event.target).closest("li").hasClass("active"))
            {
                return;
            }
            if ($("div.create-account-steps li.active").hasClass("create-account-step-1"))
            {
                if (this.validateStep1())
                {
                    $("div.create-account-steps li.create-account-step-1").addClass("valid");
                }
                else
                {
                    return;
                }
            }
            else if ($("div.create-account-steps li.active").hasClass("create-account-step-2"))
            {
                if (this.validateStep2())
                {
                    $("div.create-account-steps li.create-account-step-2").addClass("valid");
                }
                else
                {
                    return;
                }
            }

            $("div.create-account-steps li").removeClass("active");
            $("div.account-body div.form-row div.form-field").hide();
            $("a.create-account-nextstep").hide();
            $("div.form-actions").hide();
            $(event.target).closest("li").addClass("active");
            if ($(event.target).closest("li").hasClass("create-account-step-1"))
            {
                this.showStep1();
            }
            if ($(event.target).closest("li").hasClass("create-account-step-2"))
            {
                this.showStep2();
            }

        });
    }

    validateStep1()
    {
        this.createAccountValidator.performCheck(["input[data-field-type='FirstName']", "input[data-field-type='LastName']", "input[data-field-type='Phone']",
            "input[data-field-type='EmailAddress']", "input[data-field-type='Password']", "input[data-field-type='ConfirmPassword']"]);
        return (this.createAccountValidator.getStatus("input[data-field-type='FirstName']") === nod.constants.VALID
            && this.createAccountValidator.getStatus("input[data-field-type='LastName']") === nod.constants.VALID
            && this.createAccountValidator.getStatus("input[data-field-type='Phone']") === nod.constants.VALID
            && this.createAccountValidator.getStatus("input[data-field-type='EmailAddress']") === nod.constants.VALID
            && this.createAccountValidator.getStatus("input[data-field-type='Password']") === nod.constants.VALID
            && this.createAccountValidator.getStatus("input[data-field-type='ConfirmPassword']") === nod.constants.VALID);
    }

    validateStep2()
    {
        this.createAccountValidator.performCheck();
        return this.createAccountValidator.areAll('valid');
    }



    showStep1()
    {
        $("#FormField_45").show();
        $("div.form-field[data-type='FirstName']").show();
        $("div.form-field[data-type='LastName']").show();
        $("div.form-field[data-type='Phone']").show();
        $("div.form-field[data-type='EmailAddress']").show();
        $("div.form-field[data-type='Password']").show();
        $("div.form-field[data-type='ConfirmPassword']").show();
        $("div.form-field.create_account-next-btn").show();        
        $("#aNextStep1").show();
    }

    showStep2()
    {
        $("div.form-field [data-field-type='State']").attr('tabindex', 12);
        $("div.form-field[data-type='AddressLine1']").show();
        $("div.form-field[data-type='City']").show();
        $("div.form-field[data-type='State']").show();
        $("div.form-field[data-type='Zip']").show();
        $("div.form-field[data-type='Country']").show();
        $("div.social-login-field").show();        
        $("#aNextStep1").hide();
        $("#FormField_54").show();
        $("#FormField_53").show();
        $(".create_account-custon-checkbox").show();
        $("div.create_account-recaptcha").show();
        $("div.create_account-action-buttons").show();
        $("div.form-actions").show();
        if ($("select[data-field-type='Country'] option:selected").val() == "United Kingdom")
        {
            $("div.alertBox--country").hide();
        }
        else
        {
            $("div.alertBox--country").show();
        }
    }



    /**
     * Request is made in this function to the remote endpoint and pulls back the states for country.
     */
    onReady() {
        const $createAccountForm = classifyForm(this.formCreateSelector);
        const $loginForm = classifyForm('.login-form');
        const $forgotPasswordForm = classifyForm('.forgot-password-form');
        const $newPasswordForm = classifyForm('.new-password-form'); // reset password

        // Injected via auth.html
        this.passwordRequirements = this.context.passwordRequirements;

        if ($loginForm.length) {
            this.registerLoginValidation($loginForm);
        }

        if ($newPasswordForm.length) {
            this.registerNewPasswordValidation();
        }

        if ($forgotPasswordForm.length) {
            this.registerForgotPasswordValidation($forgotPasswordForm);
        }

        if ($createAccountForm.length) {
            this.registerCreateAccountValidator($createAccountForm);
        }
    }
}
