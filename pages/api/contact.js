import { MongoClient } from "mongodb";

export default async function handler(req, res) {
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

    let client;

    //Try Connection first
    try {
      client = await MongoClient.connect('mongodb+srv://ying:ying@cluster0.andzl1u.mongodb.net/my-blog?retryWrites=true&w=majority');

    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' })
      return;
    }

    const db = client.db(); //accessing database

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(422).json({ message: 'Storing message failed!' });
      return;
    }
    
    client.close();

    res.status(201).json({ message: 'Message Send!', newMessage });
  }
}
