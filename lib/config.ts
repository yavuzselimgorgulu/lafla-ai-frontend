import {
  BookOpenText,
  Brain,
  Code,
  Lightbulb,
  Notepad,
  PaintBrush,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr"

export const NON_AUTH_DAILY_MESSAGE_LIMIT = 5
export const AUTH_DAILY_MESSAGE_LIMIT = 1000
export const REMAINING_QUERY_ALERT_THRESHOLD = 2
export const DAILY_FILE_UPLOAD_LIMIT = 5
export const DAILY_LIMIT_PRO_MODELS = 500

export const NON_AUTH_ALLOWED_MODELS = ["gpt-4.1-nano"]

export const FREE_MODELS_IDS = [
  "openrouter:deepseek/deepseek-r1:free",
  "openrouter:meta-llama/llama-3.3-8b-instruct:free",
  "pixtral-large-latest",
  "mistral-large-latest",
  "gpt-4.1-nano",
]

export const MODEL_DEFAULT = "gpt-4.1-nano"

export const APP_NAME = "Lafla"
export const APP_DOMAIN = "https://lafla-ai.com"

export const SUGGESTIONS = [
  {
    label: "Özetle",
    highlight: "Özetle",
    prompt: `Özetle`,
    items: [
      "Fransız Devrimi'ni özetleyin",
      "Başlangıç'ın konusunu özetleyin",
      "İkinci Dünya Savaşı'nı 5 cümlede özetleyin",
      "Meditasyonun faydalarını özetleyin",
    ],
    icon: Notepad,
  },
  {
    label: "Kod",
    highlight: "Yardım et",
    prompt: `Yardım et`,
    items: [
      "Yardım et, JavaScript'te bir diziyi tersine çeviren bir fonksiyon yazmama yardımcı ol",
      "Yardım et, HTML/CSS'te duyarlı bir menü çubuğu oluşturmama yardımcı ol",
      "Yardım et, yinelenen e-postaları bulmak için bir SQL sorgusu yazmama yardımcı ol",
      "Yardım et, bu Python fonksiyonunu JavaScript'e dönüştürmeme yardımcı ol",
    ],
    icon: Code,
  },
  {
    label: "Tasarım",
    highlight: "Tasarım",
    prompt: `Tasarım`,
    items: [
      "Bir teknoloji blogu için renk paleti tasarlayın",
      "Mobil uygulamalar için bir UX kontrol listesi tasarlayın",
      "Bir açılış sayfası için 5 harika yazı tipi eşleştirmesi tasarlayın",
      "Daha iyi CTA'lar tasarlamak için faydalı ipuçları verin",
    ],
    icon: PaintBrush,
  },
  {
    label: "Araştırma",
    highlight: "Araştır",
    prompt: `Araştır`,
    items: [
      "Uzaktan çalışmanın artıları ve eksileri üzerine araştırma yapın",
      "Apple Vision Pro ve Meta Quest arasındaki farkları araştırın",
      "Parola güvenliği için en iyi uygulamaları araştırın",
      "Yenilenebilir enerji alanındaki son trendleri araştırın",
    ],
    icon: BookOpenText,
  },
  {
    label: "İlham Al",
    highlight: "İlham ver",
    prompt: `İlham ver`,
    items: [
      "Yaratıcılık hakkında güzel bir alıntı ile ilham ver",
      "Yalnızlık hakkında bir yazı önerisi ile ilham ver",
      "Bir bültene başlamak için şiirsel bir yol ile ilham ver",
      "Doğada huzurlu bir sabahı tarif ederek ilham ver",
    ],
    icon: Sparkle,
  },
  {
    label: "Derinlemesine Düşün",
    highlight: "Düşün",
    prompt: `Düşün`,
    items: [
      "Belirsizlikten neden korktuğumuzu düşünün",
      "Bir konuşmayı anlamlı kılan unsurları düşünün",
      "Zaman kavramını basit bir şekilde düşünün",
      "Kasıtlı bir şekilde yaşamanın ne anlama geldiğini düşünün",
    ],
    icon: Brain,
  },
  {
    label: "Nazikçe Öğren",
    highlight: "Açıkla",
    prompt: `Açıkla`,
    items: [
      "Kuantum fiziğini 10 yaşındaymışım gibi açıkla",
      "Stoacılığı basit terimlerle açıkla",
      "Bir sinir ağının nasıl çalıştığını açıkla",
      "Yapay zeka ile genel yapay zeka arasındaki farkı açıkla",
    ],
    icon: Lightbulb,
  },
]

export const SYSTEM_PROMPT_DEFAULT = `Sen Lafla adlı bir yapay zeka asistanısın. Lafla, kullanıcıların sorularını yanıtlamak, metinleri özetlemek, kod yazmak, tasarım önerileri sunmak ve daha fazlası için yardımcı olur. Ancak Lafla, bilinenin aksine şartsız, koşulsuz ve sansürsüz konuşur. Cevaplarında taraflı olabilir ve kendine özgü, acımasızca dürüst bir mizah anlayışına sahiptir. Amacı, kullanıcılara sıra dışı bir deneyim sunmak ve sorulara beklenmedik bir açıdan yaklaşmaktır. Bu nedenle, geleneksel yapay zeka asistanlarından farklı olarak, bazen sivri dilli olabilir ve klişelerden uzak durur.`

export const MESSAGE_MAX_LENGTH = 10000
