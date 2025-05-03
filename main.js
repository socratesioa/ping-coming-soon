const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

const handleSubmit = (e) => {
  e.preventDefault();

  const emailError = document.getElementById("email-error");

  emailError.classList.remove("input-error");
  emailError.textContent = "";

  const data = Object.fromEntries(new FormData(e.target));
  const errors = {};

  const email = data.email.trim();

  if (!email) {
    errors.email = "Whoops! It looks like you forgot to add your email";
    emailInput.classList.add("input-error");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = "Please provide a valid email address";
    emailInput.classList.add("input-error");
  }

  if (Object.keys(errors).length > 0) {
    displayErrors(errors);
  } else {
    console.log("Form is Valid!", data);
  }

  function displayErrors(errors) {
    for (const key in errors) {
      const errorElement = document.getElementById(`${key}-error`);
      if (errorElement) {
        errorElement.textContent = errors[key];
      }
    }
  }
};

emailInput.addEventListener("input", () => {
  emailInput.classList.remove("input-error");
  emailError.textContent = "";
});

form.addEventListener("submit", handleSubmit);
