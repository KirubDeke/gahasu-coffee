"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface CoffeeImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  processStep?: string;
}

// Coffee images array
const coffeeImages: CoffeeImage[] = [
  {
    id: 1,
    src: "/images/harvesting.jpg",
    alt: "Coffee cherries harvesting",
    title: "Cherry Harvesting",
    description: "Fresh coffee cherries being hand-picked at peak ripeness",
    processStep: "Harvesting",
  },
  {
    id: 2,
    src: "/images/sorting.jpg",
    alt: "Coffee cherry sorting",
    title: "Quality Sorting",
    description:
      "Workers carefully sorting coffee cherries by quality and ripeness",
    processStep: "Sorting",
  },
  {
    id: 3,
    src: "/images/pulping.jpg",
    alt: "Coffee pulping machine",
    title: "Pulping Process",
    description: "Machine removing the outer skin from coffee cherries",
    processStep: "Pulping",
  },
  {
    id: 4,
    src: "/images/fermentation-tank.jpg",
    alt: "Fermentation tanks",
    title: "Fermentation Tanks",
    description: "Natural fermentation process to remove mucilage",
    processStep: "Fermentation",
  },
  {
    id: 5,
    src: "/images/channel.jpg",
    alt: "Coffee washing channels",
    title: "Washing Channels",
    description: "Clean water channels for washing the fermented beans",
    processStep: "Washing",
  },
  {
    id: 6,
    src: "/images/drying-beds.jpg",
    alt: "Coffee drying beds",
    title: "Drying Beds",
    description: "Raised beds for sun-drying the washed coffee beans",
    processStep: "Drying",
  },
  {
    id: 7,
    src: "/images/parchement.jpg",
    alt: "Coffee parchment",
    title: "Parchment Coffee",
    description: "Properly dried coffee beans in parchment stage",
    processStep: "Storage",
  },
  {
    id: 8,
    src: "/images/quality-control.jpg",
    alt: "Quality control",
    title: "Quality Control",
    description: "Final inspection and grading of processed coffee beans",
    processStep: "Quality Control",
  },
];

const ImageFallback = ({
  alt,
  className,
}: {
  alt: string;
  className?: string;
}) => (
  <div
    className={`bg-customBlackLighter flex items-center justify-center ${className}`}
  >
    <div className="text-customWhite text-center p-4">
      <svg
        className="w-12 h-12 mx-auto mb-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p className="text-sm">{alt}</p>
      <p className="text-xs mt-1">Image not available</p>
    </div>
  </div>
);

export default function CoffeeWashingStationGallery() {
  const [selectedImage, setSelectedImage] = useState<CoffeeImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<string>("All");
  const [filteredImages, setFilteredImages] =
    useState<CoffeeImage[]>(coffeeImages);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Get unique process steps for filter
  const processSteps = [
    "All",
    ...new Set(coffeeImages.map((img) => img.processStep).filter(Boolean)),
  ] as string[];

  // Filter images based on selected process step
  useEffect(() => {
    if (filter === "All") {
      setFilteredImages(coffeeImages);
    } else {
      setFilteredImages(
        coffeeImages.filter((img) => img.processStep === filter)
      );
    }
  }, [filter]);

  const openImage = (image: CoffeeImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;

    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage(filteredImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-screen-xl mx-auto px-4 py-25">
        {/* Header */}
        <header className="text-center mt-6 mb-8">
          <h1 className="text-4xl font-bold text-customWhite mb-2">
            Coffee Washing Station Process
          </h1>
          <p className="text-customWhiteLighter max-w-2xl mx-auto">
            Explore the journey of coffee beans from harvest to drying at our
            specialty coffee washing station
          </p>
        </header>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {processSteps.map((step) => (
            <button
              key={step}
              onClick={() => setFilter(step)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === step
                  ? "bg-foreground text-customBlack font-bold"
                  : "bg-customBlackLighter text-customWhite hover:bg-foreground hover:text-customBlack"
              }`}
            >
              {step}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => openImage(image, index)}
            >
              <div className="relative w-full aspect-square min-h-[200px] overflow-hidden rounded-lg shadow-lg">
                {imageErrors[image.id] ? (
                  <ImageFallback alt={image.alt} className="w-full h-full" />
                ) : (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => handleImageError(image.id)}
                  />
                )}
                {image.processStep && (
                  <div className="absolute top-2 left-2 bg-foreground text-customBlack text-xs font-bold px-2 py-1 rounded">
                    {image.processStep}
                  </div>
                )}
              </div>
              <div className="mt-3">
                <h3 className="font-semibold text-customWhite">
                  {image.title}
                </h3>
                <p className="text-customWhiteLighter text-sm line-clamp-2">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-customBlack bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div
            className="relative max-w-4xl w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeImage}
              className="absolute -top-12 right-0 text-customWhite hover:text-foreground transition-colors duration-200 z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-customWhite hover:text-foreground transition-colors duration-200 z-10 bg-customBlackLighter bg-opacity-50 rounded-full p-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-customWhite hover:text-foreground transition-colors duration-200 z-10 bg-customBlackLighter bg-opacity-50 rounded-full p-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Image */}
            <div className="relative w-full min-h-[300px] md:max-h-[70vh]">
              {imageErrors[selectedImage.id] ? (
                <ImageFallback
                  alt={selectedImage.alt}
                  className="w-full h-full"
                />
              ) : (
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                  onError={() => handleImageError(selectedImage.id)}
                />
              )}
            </div>

            {/* Info */}
            <div className="mt-6 text-customWhite text-center">
              {selectedImage.processStep && (
                <span className="inline-block bg-foreground text-customBlack text-sm font-bold px-3 py-1 rounded-full mb-2">
                  {selectedImage.processStep}
                </span>
              )}
              <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
              <p className="text-customWhiteLighter max-w-2xl mx-auto">
                {selectedImage.description}
              </p>

              {filteredImages.length > 1 && (
                <div className="mt-4 text-customWhiteLighter text-sm">
                  {currentIndex + 1} of {filteredImages.length}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
