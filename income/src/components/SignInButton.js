import { useData } from "@/app/layout";

export function SignInButton(props) {
  const { setIsHidden } = useData();
  return (
    <div>
      <button
        className="btn btn-active btn-primary w-full text-white bg-sky-700 border-none"
        onClick={setIsHidden((prev) => !prev)}
      >
        {props.name}
      </button>
    </div>
  );
}
