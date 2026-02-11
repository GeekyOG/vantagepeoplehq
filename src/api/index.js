class PaymentManager {
  constructor(baseUrl = "https://vantage.aoudit.com/api/payment") {
    this.baseUrl = baseUrl;
    this.currentReference = null;
  }

  async initiate(userDetails) {
    try {
      const response = await fetch(`${this.baseUrl}/initialize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetails),
      });

      const data = await response.json();

      if (data.success) {
        this.currentReference = data.data.reference;
        return data.data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Payment initiation failed:", error);
      throw error;
    }
  }

  trackAbandonmentOnExit() {
    if (this.currentReference) {
      navigator.sendBeacon(
        `${this.baseUrl}/mark-abandoned/${this.currentReference}`,
      );
    }
  }
}

export const paymentManager = new PaymentManager();
