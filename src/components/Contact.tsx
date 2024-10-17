import * as React from "react";

interface ContactProps {
  message: string;
  email: string;
}

export const Contact: React.FC<Readonly<ContactProps>> = ({
  message,
  email,
}) => (
  <div>
    <h1>From: {email}</h1>
    <h1>Message: {message}</h1>
  </div>
);
