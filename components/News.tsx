
import React from 'react';

const News: React.FC = () => {
  const posts = [
    {
      title: "Candidate Outlines New Economic Policy for Region",
      date: "Oct 15, 2024",
      tag: "Policy",
      img: "https://picsum.photos/id/201/400/250"
    },
    {
      title: "Community Outreach Reaches 10,000 Homes Milestone",
      date: "Oct 12, 2024",
      tag: "Movement",
      img: "https://picsum.photos/id/202/400/250"
    },
    {
      title: "Upcoming Townhall: Join the Conversation on Health",
      date: "Oct 10, 2024",
      tag: "Events",
      img: "https://picsum.photos/id/203/400/250"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1C3F]">Latest Updates</h2>
          <a href="#" className="text-[#FF6A00] font-bold hover:underline">Read All News →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="space-y-4">
              <div className="h-60 overflow-hidden rounded-2xl">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FF6A00]">
                <span>{post.tag}</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-400">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1C3F] leading-snug hover:text-[#FF6A00] transition-colors cursor-pointer">
                {post.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
