import { useEffect } from "react";
import recieveMails from "../../main/mails/recieve";

export default function Mail() {
  useEffect(() => {
    recieveMails();
  });
}
