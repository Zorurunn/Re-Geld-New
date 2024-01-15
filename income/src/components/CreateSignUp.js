import Link from "next/link";

export function CreateSignUp(props) {
  return (
    <Link href={props.href}>
      <button className="btn btn-active btn-primary w-full text-white bg-sky-700 border-none">
        Sign Up
      </button>
    </Link>
  );
}
