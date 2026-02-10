'use client';

import Image from 'next/image';

export interface PostItemProps {
  meta: string;
  title: string;
  body: string;
  imageSrc?: string;
  isLast?: boolean;
  onClick?: () => void;
}

export function PostItem({ meta, title, body, imageSrc, isLast, onClick }: PostItemProps) {
  return (
    <article
      onClick={onClick}
      className={`px-6 py-16 ${
        isLast ? '' : 'border-b border-black'
      } cursor-pointer transition-colors duration-150 hover:bg-purple-dark/20`}
    >
      <span className="block mb-4 font-sans text-xs uppercase tracking-wider opacity-80">
        {meta}
      </span>

      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          width={1000}
          height={562}
          className="w-full block aspect-video object-cover grayscale mb-8"
          unoptimized
        />
      )}

      <h2 className="mb-4 font-serif text-2xl leading-snug">
        {title}
      </h2>

      <p className="font-serif text-base leading-normal max-w-prose">
        {body}
      </p>
    </article>
  );
}
