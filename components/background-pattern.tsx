'use client'

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-20">
      <div className="absolute inset-0 bg-[#F5F2F0]" />
      <div className="absolute -rotate-12 top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200 to-purple-100 rounded-lg blur-3xl" />
      <div className="absolute rotate-12 top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200 to-purple-100 rounded-lg blur-3xl" />
      <div className="grid grid-cols-4 gap-8 p-8 absolute inset-0 blur-2xl">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="h-32 rounded-lg bg-gradient-to-br from-purple-100/20 to-transparent"
          />
        ))}
      </div>
    </div>
  )
}

