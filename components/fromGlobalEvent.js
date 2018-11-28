import { Stream } from "most";
import dom from "domtastic";

const fromGlobalEvent = (type, selector) =>
  new Stream({
    run: (sink, scheduler) => {
      dom("body").on(type, selector, event =>
        sink.event(scheduler.now(), event)
      );
    }
  });

export default fromGlobalEvent;
