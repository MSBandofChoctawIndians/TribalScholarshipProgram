"use client";
import { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // add a new state variable

  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to the Power Automate URL
    const response = await fetch(
      "https://prod-128.westus.logic.azure.com:443/workflows/bb16349e079642ad89cd27181d197efe/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=-iCxbrxWSS-6h2WGL1R0unyPRj0Ki8j6H2g5-Fgb6k4",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      },
    );

    if (response.ok) {
      setFormStatus("Form submitted successfully!");
      setIsSubmitted(true); // set the isSubmitted state variable to true
    } else {
      setFormStatus("Error submitting form");
    }

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return isSubmitted ? (
    <p>{formStatus}</p>
  ) : (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md">
      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="mb-4"
      />
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="mb-4"
      />
      <Textarea
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="mb-4"
      />
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
