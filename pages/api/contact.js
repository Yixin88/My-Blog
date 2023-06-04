export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: 'Invalid Input.' });
      return;
    }

    //Store in database if the above validation passes
    const newMessage = {
      email,
      name,
      message
    };

    console.log(message);

    res.status(201).json({ message: 'Message Send!', newMessage });
  }
}
