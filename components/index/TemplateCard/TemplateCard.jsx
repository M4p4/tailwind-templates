import { shimmer, toBase64 } from '@/lib/helpers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TemplateCard = ({ template }) => {
  const { image, url, title } = template;
  return (
    <Link href={url}>
      <div className="h-96 w-full border-8 border-orange-700 rounded-3xl hover:border-orange-600 group cursor-pointer">
        <div className="relative flex items-center h-full w-full justify-center">
          <Image
            className="w-full h-full object-cover rounded-2xl"
            src={image}
            alt={title}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            width={400}
            height={500}
          />
          <h2 className="absolute text-xl font-semibold group-hover:text-orange-100 text-slate-200 bg-black/80 p-2 rounded-full max-w-[200px] w-full text-center">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default TemplateCard;
