// Date
export const DATE_ERROR_MESSAGE = "Date of birth cannot be later than today";

// EMail
export const EMAIL_ERROR_MESSAGE = "Incorrect email";
export const EMAIL_REG = new RegExp(
  "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"
);

// Name
export const NAME_REG = new RegExp("^[[A-Za-z]*]?$|^[[A-Za-z]+ [A-Za-z]*]?$");
export const NAME_REQUIRED_REG = new RegExp("^[A-Za-z]{3,} [A-Za-z]{3,}$");
// Phone
export const PHONE_ERROR_MESSAGE =
  "Incorrect phone number (format: 7xxxxxxxxxx)";
export const PHONE_REG = new RegExp("^[7][0-9]{10}$");
export const PHONE_MAX_LENGTH = 11;

// TEXT
export const TEXT_MIN_ERROR_MESSAGE = "The minimum number of characters is 10.";
export const TEXT_MAX_ERROR_MESSAGE =
  "The maximum number of characters is 300.";
export const TEXT_MIN_LENGTH = 10;
export const TEXT_MAX_LENGTH = 300;

// Request status
export enum Status {
  pending = "pending",
  success = "success",
  loading = "loading",
  error = "error",
}

// Request message
export const REQUEST_ERROR: { [key in Status]?: string } = {
  [Status.success]: "Successful registration",
  [Status.error]: "Registration error",
};
