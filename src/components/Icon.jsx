import {
  Accessibility,
  ArrowLeftToLine,
  BarChart3,
  BookOpen,
  Bot,
  Database,
  Gauge,
  Landmark,
  Plug,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Target,
  Workflow,
} from 'lucide-react';

// İçerik dosyaları ikonu adıyla verir; yalnızca kullanılan ikonlar pakete girsin diye açık liste.
const ICONS = {
  Accessibility,
  ArrowLeftToLine,
  BarChart3,
  BookOpen,
  Bot,
  Database,
  Gauge,
  Landmark,
  Plug,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Target,
  Workflow,
};

export default function Icon({ name, ...props }) {
  const C = ICONS[name] || BookOpen;
  return <C aria-hidden="true" focusable="false" {...props} />;
}
