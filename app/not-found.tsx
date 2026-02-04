import { Container } from "@/components/Container";
import { RealTimeCanvas } from "@/components/RealTimeCanvas";

export default function NotFound() {
  return (
    <Container className="_404__page-container" placement="inner">
      <div className="_404">
        <div className="_404__canvas-flex">
          <div className="_404__canvas">
            <RealTimeCanvas />
          </div>
        </div>

        <div className="_404__message">
          <h2 className="_404__title">404</h2>
          <div className="_404__subtitle">
            Don&apos;t worry, you&apos;re not lost
            <br /> You&apos;re just exploring uncharted territory
          </div>
        </div>
      </div>
    </Container>
  );
}
