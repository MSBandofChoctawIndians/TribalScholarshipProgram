"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Input, RadioGroup, Radio, Textarea, Button } from "@nextui-org/react";

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        body: JSON.stringify({
          firstName,
          lastName,
          college,
          email,
          phoneNumber,
          contactMethod,
          message,
        }),
      },
    );

    if (response.ok) {
      setFormStatus("Form submitted successfully!");
      setIsSubmitted(true); // set the isSubmitted state variable to true
    } else {
      setFormStatus("Error submitting form");
    }

    // Reset form fields
    setFirstName("");
    setLastName("");
    setCollege("");
    setEmail("");
    setPhoneNumber("");
    setContactMethod("");
    setMessage("");
  };

  return isSubmitted ? (
    <section>
      <div className="top-4 mx-auto max-w-[1024px] bg-background px-4 pb-4 text-foreground sm:px-6 lg:px-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mx-auto max-w-[1024px] px-4 py-8 sm:px-6 lg:px-0"
        >
          <div className="prose prose-slate mx-auto max-w-none md:prose-lg lg:prose-xl dark:prose-invert">
            <p className="lead text-center">{formStatus}</p>
          </div>
        </motion.div>
      </div>
    </section>
  ) : (
    <section>
      <div className="top-4 mx-auto max-w-[1024px] bg-background px-4 pb-4 text-foreground sm:px-6 lg:px-2">
        <div className="mx-auto max-w-[1024px] px-4 py-8 sm:px-6 lg:px-0">
          <div className="prose prose-slate mx-auto max-w-none md:prose-lg lg:prose-xl dark:prose-invert">
            <h2 className="text-center">Contact Us</h2>
            <p className="lead text-center">
              Please complete the following form:
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 max-w-xl sm:mt-10"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <Input
                  label="First name"
                  labelPlacement="outside"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  isRequired
                  className="mb-4"
                />
              </div>
              <div>
                <Input
                  label="Last name"
                  labelPlacement="outside"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  isRequired
                  className="mb-4"
                />
              </div>
              <div className="sm:col-span-2">
                <div>
                  <Input
                    label="College"
                    labelPlacement="outside"
                    placeholder="Enter your college"
                    description="Leave blank if you are not currently enrolled in college"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="mb-4"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div>
                  <Input
                    type="email"
                    aria-labelledby="email"
                    label="Email"
                    labelPlacement="outside"
                    placeholder="Enter your email"
                    description="Provide your personal email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email address"
                    isRequired
                    className="mb-4"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div>
                  <Input
                    type="tel"
                    aria-labelledby="phone"
                    label="Phone number"
                    labelPlacement="outside"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    aria-label="Phone number"
                    isRequired
                    className="mb-4"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div>
                  <RadioGroup
                    label="Preferred contact method"
                    orientation="horizontal"
                    value={contactMethod}
                    onChange={(e) => setContactMethod(e.target.value)}
                    isRequired
                    className="mb-4"
                  >
                    <Radio value="email">Email</Radio>
                    <Radio value="phone">Phone</Radio>
                  </RadioGroup>
                </div>
              </div>
              <div className="sm:col-span-2">
                <div>
                  <Textarea
                    label="Message"
                    labelPlacement="outside"
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    isRequired
                    className="mb-4"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Button type="submit" color="danger" fullWidth>
                Let's talk
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
