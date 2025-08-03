// File: src/app/embed/widget/[id]/layout.tsx

export default function WidgetLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      
      {children}
    </div>
  );
}

