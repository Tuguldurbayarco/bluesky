import { FOOTER_CTA_BIG_ICONS } from "@/constants";
import styles from "./QuickChat.module.css";

const whatsApp = FOOTER_CTA_BIG_ICONS.find((item) => item.name === "WhatsApp");

export default function QuickChat() {
  if (!whatsApp) return null;

  return (
    <a
      href={whatsApp.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.quick_chat}
      aria-label="Chat on WhatsApp"
    >
      <img src="/logo.png" alt="" className={styles.quick_chat_logo} width={126} height={104} />
    </a>
  );
}
