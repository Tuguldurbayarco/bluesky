import { FOOTER_CTA_BIG_ICONS } from "@/constants";
import styles from "./QuickChat.module.css";

const whatsApp = FOOTER_CTA_BIG_ICONS.find((item) => item.name === "WhatsApp");

export default function QuickChat() {
  if (!whatsApp) return null;

  return (
    <div className={styles.quick_chat_container} data-quick-chat>
      <a
        href={whatsApp.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.quick_chat}
        aria-label="Chat on WhatsApp"
      >
        <img src="/logo.png" alt="" className={styles.quick_chat_logo} width={126} height={104} />
      </a>
      <a
        href={whatsApp.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.quick_chat_text}
        aria-label="Open WhatsApp chat"
      >
        Quick WhatsApp
      </a>
    </div>
  );
}
