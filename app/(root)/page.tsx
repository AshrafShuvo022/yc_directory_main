import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

import Image from "next/image";

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date() ,
    views: 55,
    author: {_id: 1 , name: 'Ashraf Shuvo'},
    _id: 1 ,
    description: "This is a description",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8f&auto=format&fit=crop&w=1170&q=80",
    category: "Robots",
    title: "We Robots",
  },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches and Get Noticed in virtural Competitions
        </p>
        <SearchForm query={query} /> 
      </section>
      <section className="selection_container">
         <p className="text-30-semibold ">
           {query ? `Search results for "${query}"` : 'All Startups'}
         </p>
         <ul className="mt-7 card_grid">
          {
            posts?.length > 0 ? (
              posts.map((post: StartupTypeCard, index: number) => (
                <StartupCard key ={post?._id} post = {post}/>
              ))
            )
           : (
            <p className="no-results" > No startups found</p>
          )
        }
         </ul>
      </section>
    </>
  );
}