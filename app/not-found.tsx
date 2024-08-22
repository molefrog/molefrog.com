import { Container } from "@/components/Grid";

export default function NotFound() {
  return (
    <Container placement="inner" ignoreTopbarMargin>
      <div className="_404">
        <div className="_404__canvas-abs">
          <div className="_404__canvas-grid"></div>
        </div>

        <div className="_404__message">
          <h2 className="_404__title">404</h2>
          <div className="_404__subtitle">
            Don’t worry, you’re not lost.
            <br /> You&apos;re just exploring uncharted territory.
          </div>
        </div>
      </div>
    </Container>
  );
}
