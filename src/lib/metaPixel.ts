import ReactPixel from "react-facebook-pixel";

const PIXEL_ID = "1539314521271272";

let initialized = false;

export function initPixel() {
  if (initialized) return;

  ReactPixel.init(PIXEL_ID, undefined, {
    autoConfig: true,
    debug: false,
  });

  initialized = true;
}

export function pageView() {
  ReactPixel.pageView();
}

export function viewContent() {
  ReactPixel.track("ViewContent");
}

export function initiateCheckout() {
  ReactPixel.track("InitiateCheckout");
}

export function purchase(value: number) {
  ReactPixel.track("Purchase", {
    currency: "USD",
    value,
  });
}