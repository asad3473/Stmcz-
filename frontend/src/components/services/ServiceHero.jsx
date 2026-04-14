import React from 'react'

export default function ServiceHero({ eyebrow, titlePrefix, titleAccent, description, imageUrl, imageAlt }) {
  return (
    <header className="relative flex h-screen w-full items-center justify-center overflow-hidden border-b border-zinc-200 text-center">
      <div className="absolute inset-0 z-0">
        <img src={imageUrl} alt={imageAlt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-black/65 via-zinc-950/75 to-zinc-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20">
        <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-white ring-1 ring-white/30 backdrop-blur-md">
          {eyebrow}
        </span>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
          {titlePrefix} <span className="bg-linear-to-b from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">{titleAccent}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85">
          {description}
        </p>
      </div>
    </header>
  )
}