import EpisodeList from "@/components/EpisodeList";
import InfoDetail from "@/components/InfoDetail";
import Recommended from "@/components/Recommended";

export interface Anime {
  id: string;
  title: {
    english: string;
    romaji: string;
    native: string;
  };
  synonyms: string;
  image: string;
  cover: string;
  releaseDate: string;
  rating: number;
  status: string;
  popularity: string;
  description: string;
  episodes: Episode[];
  characters: Character[];
  genres: [];
  studios: [];
  trailer: {
    id: string;
  };
  malId: number;
  color: string;
  totalEpisodes: number;
  episodeNumber: number;
  episodeTitle: string;
  duration: number;
  type: string;
  recommendations: [];
}

export interface Episode {
  id: string;
  number: number;
  image: string;
  airDate: string;
  title: string;
  description: string;
}
interface Character {
  id: number;
  name: {
    full: string;
    native: string;
  };
  image: string;
}

async function getData({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://api.consumet.org/meta/anilist/info/${params.id}`
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function InfoPageDynamic({
  params,
}: {
  params: { id: string };
}) {
  const anime: Anime = await getData({ params });
  return (
    <div className="flex flex-col gap-5">
      <div className="relative w-full flex justify-center">
        <img src={anime.cover} className="w-full h-64 object-cover" alt="" />
      </div>

      <div className="container max-w-5xl mx-auto flex flex-col gap-5 p-6">
        <InfoDetail anime={anime} />

        {/* <EpisodeList /> */}
        {/* <Recommended /> */}
      </div>
    </div>
  );
}
