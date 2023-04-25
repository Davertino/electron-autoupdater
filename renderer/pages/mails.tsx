import { useEffect } from "react";
import fetchEmails from "../../main/mails/recieve";

export default function Mail() {
  useEffect(() => {
    fetchEmails((err, messages) => {
      if (err) {
        console.error(err);
      } else {
        console.log(messages);
      }
    });
  }, []);
}
