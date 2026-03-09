interface HeaderBoxProps {
  title: string;
  subtext: string;
  user?: string;
}
export default function HeaderBox({ title, subtext, user }: HeaderBoxProps) {
  return (
    <div className="space-y-2 mt-3 mb-6 text-center">
      <h1 className="text-4xl font-bold text-slate-900">{title}</h1>
      {user && <p className="text-slate-600">مرحبا بك، {user}</p>}
      <p className="text-slate-600">{subtext}</p>
    </div>
  );
}
