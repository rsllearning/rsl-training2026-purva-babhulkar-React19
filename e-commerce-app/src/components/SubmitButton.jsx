import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Registering..." : "Register"}
    </button>
  );
}

export default SubmitButton;
