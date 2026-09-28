import {
  Accessibility,
  ArrowLeftToLine,
  BarChart3,
  BookOpen,
  Bot,
  BrainCircuit,
  CreditCard,
  Database,
  DatabaseZap,
  Gauge,
  Landmark,
  LifeBuoy,
  MonitorSmartphone,
  Plug,
  Scale,
  ScanFace,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Target,
  UserCheck,
  Workflow,
} from 'lucide-react';

// İçerik dosyaları ikonu adıyla verir; yalnızca kullanılan ikonlar pakete girsin diye açık liste.
const ICONS = {
  Accessibility,
  ArrowLeftToLine,
  BarChart3,
  BookOpen,
  Bot,
  BrainCircuit,
  CreditCard,
  Database,
  DatabaseZap,
  Gauge,
  Landmark,
  LifeBuoy,
  MonitorSmartphone,
  Plug,
  Scale,
  ScanFace,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Target,
  UserCheck,
  Workflow,
};

export default function Icon({ name, ...props }) {
  const C = ICONS[name] || BookOpen;
  return <C aria-hidden="true" focusable="false" {...props} />;
}
