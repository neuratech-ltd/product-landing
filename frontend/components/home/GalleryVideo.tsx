import { Images, Play, Share2, Clock } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

type Props = {
  images?: string[];
  videoThumbnail?: string;
  videoTitle?: string;
  channelName?: string;
  channelAvatar?: string;
  youtubeUrl?: string;
};

export default function GalleryVideo({
  images = ["/images/gallery-1.jpg", "/images/gallery-2.jpg"],
  videoThumbnail = "/images/video-thumb.jpg",
  videoTitle = "CINEMATIC PRODUCT VIDEO",
  channelName = "Lauren Roberts",
  channelAvatar = "/images/avatar.jpg",
  youtubeUrl = "#",
}: Props) {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-6">
      <div className="bg-white border rounded-2xl p-6 md:p-8">
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
          <Images size={18} className="text-green-600" />
          পণ্য গ্যালারি ও ভিডিও
        </h3>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Image carousel */}
          <ImageCarousel images={images} />

          {/* Video card */}
          <div className="rounded-2xl overflow-hidden bg-black relative min-h-80 flex flex-col">
            <img
              src={videoThumbnail}
              alt={videoTitle}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />

            {/* top gradient with title */}
            <div className="relative z-10 flex items-center gap-2 p-3 bg-linear-to-b from-black/70 to-transparent">
              <img
                src={channelAvatar}
                alt={channelName}
                className="w-8 h-8 rounded-full object-cover border border-white/50"
              />
              <div className="text-white">
                <p className="text-sm font-semibold leading-tight">{videoTitle}</p>
                <p className="text-xs text-gray-200">{channelName}</p>
              </div>
            </div>

            {/* play button */}
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="relative z-10 flex-1 flex items-center justify-center"
              aria-label="ভিডিও চালান"
            >
              <span className="bg-red-600 hover:bg-red-700 rounded-full p-4 shadow-lg transition-colors">
                <Play size={26} className="text-white fill-white" />
              </span>
            </a>

            {/* bottom bar */}
            <div className="relative z-10 flex items-center justify-between p-3 bg-linear-to-t from-black/70 to-transparent">
              <div className="flex items-center gap-3 text-white/90">
                <Share2 size={16} />
                <Clock size={16} />
              </div>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 bg-black/70 hover:bg-black text-white text-xs font-semibold px-3 py-1.5 rounded"
              >
                <Play size={12} className="fill-white" />
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
