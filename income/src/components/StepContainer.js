import { Container } from "./Container";

export default function StepContainer(props) {
  return (
    <Container>
      <div className="flex w-full h-full justify-center">
        <div className="flex flex-col  pt-[40px] w-[40%]">{props.children}</div>
      </div>
    </Container>
  );
}
