export const RULES = {
  emailRules: [
    (v) => !!v || 'E-mail is required',
    (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  ],
  passwdRules: [(v) => !!v || 'Password is required'],
  phoneRules: [
    (v) => (v && v.length == 11 ) || "Not a valid Phone Number ",
  ],
  paswwordLengthRules: [
    (v) => (v && v.length < 6) || "Not a valid Phone Number ",
  ],
  inputRules: [
    (v) => (v && v.length >= 1) || 'Field is required'
  ],
  passwdRules: [
    (v) => (!!v ) || "Password is required",
    (v) => (v.length > 6) || "Password should be greater than 6 characters ",
  ]
    ,
  checkPassword: [(v) => (v == this.dform.password) || "Password Mismatch"],
  agree: [(v) => (v) || "Agree to terms and condition"],
  formValidate: true

};
