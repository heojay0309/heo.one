import * as React from "react";

interface EmailTemplateProps {
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  email,
}) => (
  <div>
    <h1>From: {email}</h1>
    <h1>Message: {message}</h1>
  </div>
);
