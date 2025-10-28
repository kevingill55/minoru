"use client";

import Image from "next/image";
import { useState } from "react";

export interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  directions: string[];
}

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <article
        className="cursor-pointer group"
        onClick={() => setShowDetails(true)}
      >
        <div className="relative w-full md:aspect-[4/5] aspect-[2/3] overflow-hidden mb-4">
          <Image
            src={recipe.image}
            alt={recipe.name}
            fill
            className="object-cover group-hover:opacity-90 transition-opacity duration-300"
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif md:mb-4 mb-2 text-[1.25em] md:text-[1.5em] tracking-tight leading-6 md:leading-7 group-hover:opacity-70 transition-opacity">
            {recipe.name}
          </h3>
          <p className="text-sm font-light text-[#9D8B6F] leading-snug line-clamp-2">
            {recipe.description}
          </p>
        </div>
      </article>

      {showDetails && (
        <div
          className="fixed inset-0 bg-white z-50 overflow-y-auto"
          onClick={() => setShowDetails(false)}
        >
          <div className="min-h-screen" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowDetails(false)}
              className="fixed top-6 right-6 md:top-8 md:right-8 text-neutral-900 hover:opacity-60 transition-opacity text-2xl font-light z-10"
              aria-label="Close recipe details"
            >
              ✕
            </button>

            <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-16">
              <div className="relative w-full aspect-[16/10] bg-neutral-100 rounded-lg overflow-hidden mb-8">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="max-w-2xl mx-auto">
                <h2 className="font-serif text-[2rem] md:text-[2.5rem] font-normal tracking-tight leading-tight mb-4">
                  {recipe.name}
                </h2>
                <p className="text-[1.0625rem] font-light leading-relaxed text-neutral-700 mb-12">
                  {recipe.description}
                </p>

                <section className="mb-12 pb-12 border-b border-neutral-200">
                  <h3 className="text-[0.875rem] uppercase tracking-widest font-medium text-neutral-900 mb-6">
                    Ingredients
                  </h3>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li
                        key={index}
                        className="text-[1rem] font-light leading-relaxed text-neutral-800"
                      >
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-[0.875rem] uppercase tracking-widest font-medium text-neutral-900 mb-6">
                    Preparation
                  </h3>
                  <ol className="space-y-6">
                    {recipe.directions.map((direction, index) => (
                      <li
                        key={index}
                        className="text-[1rem] font-light leading-relaxed text-neutral-800 flex gap-4"
                      >
                        <span className="font-medium min-w-[1.5rem]">
                          {index + 1}.
                        </span>
                        <span className="flex-1">{direction}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
