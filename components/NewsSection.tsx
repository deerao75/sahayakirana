
import React, { useEffect, useState } from 'react';
import { GoogleGenAI } from "@google/genai";

interface NewsItem {
  title: string;
  snippet: string;
  url: string;
}

const NewsSection: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: "List 3 recent positive news stories or updates about social welfare, elderly care, or rural education in India from the last 30 days. Format as a simple list with titles and brief summaries.",
          config: {
            tools: [{ googleSearch: {} }],
          },
        });

        // Extracting text and grounding chunks for URLs
        const text = response.text || "";
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
        
        // Basic parsing of the response to create a UI-friendly list
        // Note: In a real app, you'd do more robust parsing or use responseSchema
        const lines = text.split('\n').filter(l => l.trim().length > 10).slice(0, 3);
        const mappedNews = lines.map((line, idx) => ({
          title: line.split(':')[0]?.replace(/[*#-]/g, '').trim() || "Positive Impact Update",
          snippet: line.split(':')[1]?.trim() || line.trim(),
          url: chunks[idx]?.web?.uri || chunks[0]?.web?.uri || "https://google.com/search?q=social+welfare+news+india"
        }));

        setNews(mappedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return null;

  return (
    <section className="py-16 bg-white border-y border-orange-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[#FF8E3C] font-black uppercase tracking-[0.3em] text-xs mb-4">Live Updates</h2>
            <h3 className="text-3xl md:text-5xl font-black text-[#0D0D2B]">Global Impact & Rays of Change</h3>
          </div>
          <p className="text-slate-500 font-bold text-sm md:text-base">Real-time news from across the sector.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-transparent hover:border-[#FF8E3C]/20 hover:bg-white hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm border border-slate-100 group-hover:rotate-6 transition-transform">📰</div>
              <h4 className="text-xl font-black text-[#0D0D2B] mb-4 line-clamp-2 leading-tight">{item.title}</h4>
              <p className="text-slate-600 text-sm font-medium mb-8 line-clamp-3 leading-relaxed">
                {item.snippet}
              </p>
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#FF8E3C] font-black text-xs uppercase tracking-widest hover:gap-4 transition-all"
              >
                Read Source <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
