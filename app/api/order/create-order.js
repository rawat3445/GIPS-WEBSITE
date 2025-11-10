import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const { applicationId } = req.body;
    if (!applicationId) {
      return res
        .status(400)
        .json({ success: false, message: "Missing applicationId" });
    }

    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: 5000 * 100, // ₹5000 in paise
      currency: "INR",
      receipt: `receipt_order_${applicationId}`,
      payment_capture: 1, // auto capture
    });

    return res.status(200).json({ success: true, order });
  } catch (error) {
    console.error("Error creating order:", error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Server error creating Razorpay order",
      });
  }
}
