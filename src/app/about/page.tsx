"use client";

export default function AboutPage() {


  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="absolute inset-0 -z-10"></div>

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The story behind{" "}
            <span className="text-gradient">Orwexa</span>
          </h1>
        </div>
      </section>


      {/* Founder Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - Founder Image */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-800 border-4 border-gray-700">
                  {/* Placeholder for Soham's image */}
                  <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-6xl">SA</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Soham Amatya</h3>
                  <p className="text-primary-400 font-semibold mb-1">Founder, Orwexa</p>
                  <p className="text-gray-400 text-sm">Director, Dohoot Technologies</p>
                </div>
              </div>
            </div>

            {/* Right Column - Story */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl p-8 md:p-12 shadow-xl bg-gray-800 border border-gray-700">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Orwexa began from a problem I lived every night — staying up past midnight calling leads in the U.S., trying to win clients through sheer persistence.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Before Orwexa, I spent years running cold email campaigns, managing remote callers, and hiring teams in Nepal to work overnight shifts just to keep up with prospects. We'd land clients for digital services through Dohoot Technologies, but it was exhausting. Calls were missed, follow-ups forgotten, and energy wasted repeating the same pitch again and again.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    That's where the idea for Orwexa came from — not theory, but survival. I wanted a way to automate what I was doing manually: the outreach, the follow-ups, the scheduling. So I built it.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Today, Orwexa gives freelancers, solopreneurs, and small businesses what I never had in those early nights — an AI voice agent that can answer calls, make calls, follow up, and book real clients automatically.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    What started as a cold-calling hustle has grown into a voice platform built for anyone who lives by the phone — tradies, agents, service providers, and independent professionals who just want more time and more booked work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
