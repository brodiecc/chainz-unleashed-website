const paymentGateways = {
  "Lord Byron": "https://pay.nmkr.io/?p=9aa6709ed87049bea828d3debfa9e2ea&c=1",
};

function OpenPaymentWindow(gateway: string) {
  return () => {
    const paymentUrl = paymentGateways[gateway as keyof typeof paymentGateways];

    // Specify the popup width and height
    const popupWidth = 500;
    const popupHeight = 700;

    // Calculate the center of the screen
    const left =
      window.top!.outerWidth / 2 + window.top!.screenX - popupWidth / 2;
    const top =
      window.top!.outerHeight / 2 + window.top!.screenY - popupHeight / 2;

    const popup = window.open(
      paymentUrl,
      gateway + " - NMKR Payment Gateway",
      `popup=1, location=1, width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`
    );

    // Show dim background
    document.body.setAttribute("style", "background: rgba(0, 0, 0, 0.5)");

    // Continuously check whether the popup has been closed
    const backgroundCheck = setInterval(function () {
      if (popup!.closed) {
        clearInterval(backgroundCheck);

        console.log("Popup closed");

        // Remove dim background
        document.body.setAttribute("style", "");
      }
    }, 1000);
  };
}

export function NMKRButton({ gateway }: { gateway: string }) {
  return (
    <img
      src="https://studio.nmkr.io/images/buttons/paybutton_1_2.svg"
      onClick={OpenPaymentWindow(gateway)}
      className="cursor-pointer hover:opacity-75"
    />
  );
}
