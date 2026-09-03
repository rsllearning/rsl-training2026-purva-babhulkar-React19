import { useActionState } from "react";
import SubmitButton from "./SubmitButton";
import { useUser } from "../context/UserContext";

async function registerUser(previousState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!name || !email || !password) {
    return {
      success: false,
      error: "All fields are required.",
    };
  }

  if (!email.includes("@")) {
    return {
      success: false,
      error: "Please enter a valid email.",
    };
  }

  if (password.length < 6) {
    return {
      success: false,
      error: "Password must be at least 6 characters.",
    };
  }

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return {
    success: true,
    error: "",
    user: {
      name,
      email,
    },
  };
}

function RegistrationForm() {
  const [state, formAction] = useActionState(registerUser, {
    success: false,
    error: "",
  });

  const { setUser } = useUser();

  if (state.success && state.user) {
    setUser(state.user);
  }

  return (
    <section className="registration-section">
      <h2>Register</h2>

      <form action={formAction}>
        <div>
          <label>Name</label>
          <input name="name" type="text" />
        </div>

        <div>
          <label>Email</label>
          <input name="email" type="email" />
        </div>

        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>

        {state.error && <p className="error">{state.error}</p>}

        {state.success && <p className="success">Registration successful!</p>}

        <SubmitButton />
      </form>
    </section>
  );
}

export default RegistrationForm;
