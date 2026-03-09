interface HeaderBoxProps {
  title: string;
  subtext: string;
  user?: string;
}

export default function HeaderBox({ title, subtext, user }: HeaderBoxProps) {
  return (
    <div className="relative mt-8 mb-8 text-center">
      {/* Subtle background element */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 to-transparent rounded-xl opacity-60" />
      
      <div className="space-y-3 px-4 py-6">
        {/* Greeting message */}
        {user && (
          <div className="inline-block">
            <p className="text-sm font-medium text-slate-600 tracking-wide uppercase">
              مرحبا بك، <span className="text-blue-600 font-semibold">{user}</span>
            </p>
          </div>
        )}
        
        {/* Main title with gradient */}
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight">
          {title}
        </h1>
        
        {/* Decorative line */}
        <div className="flex justify-center py-2">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
        </div>
        
        {/* Subtext */}
        <p className="text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
          {subtext}
        </p>
      </div>
    </div>
  );
}
