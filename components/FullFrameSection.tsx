import React, { useEffect, useState } from 'react';

export const FullFrameSection: React.FC = () => {
  const [isFullFrame, setIsFullFrame] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFullFrame(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 border-b border-foreground/10 bg-[#080808] overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            
            {/* Copy Side */}
            <div className="order-2 md:order-1">
                 <h2 className="font-display text-4xl md:text-6xl font-bold uppercase leading-[0.9] mb-8">
                    Don't just get <br/> a Headshot. <br/>
                    <span className="text-foreground/30">Get the whole scene.</span>
                </h2>
                
                <p className="font-mono text-foreground/70 mb-10 text-sm md:text-base max-w-md leading-relaxed">
                    Traditional headshots are useless on Instagram or Hinge. We generate <strong className="text-white">Full-Frame Vertical (9:16)</strong> images so you have complete control.
                </p>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                        <div className="w-8 h-8 flex items-center justify-center border border-foreground/20 font-mono text-xs text-accent">01</div>
                        <div className="font-mono text-sm uppercase text-foreground/60 group-hover:text-foreground transition-colors">Crop it for Twitter AVI</div>
                    </div>
                    <div className="flex items-center gap-4 group">
                         <div className="w-8 h-8 flex items-center justify-center border border-foreground/20 font-mono text-xs text-accent">02</div>
                        <div className="font-mono text-sm uppercase text-foreground/60 group-hover:text-foreground transition-colors">Post it for your Story</div>
                    </div>
                    <div className="flex items-center gap-4 group">
                         <div className="w-8 h-8 flex items-center justify-center border border-foreground/20 font-mono text-xs text-accent">03</div>
                        <div className="font-mono text-sm uppercase text-foreground/60 group-hover:text-foreground transition-colors">Keep it for Wallpaper</div>
                    </div>
                </div>

                <div className="mt-12 font-mono text-[10px] text-foreground/30">
                    DOWNLOAD SPEC: 4K (2048x3096) // PNG
                </div>
            </div>

            {/* Visual Side - The Animation */}
            <div className="order-1 md:order-2 flex justify-center items-center h-[600px] relative">
                
                {/* Background Grid for technical feel */}
                <div className="absolute inset-0 border border-foreground/5 bg-foreground/[0.02]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-foreground/5"></div>
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-foreground/5"></div>
                </div>

                {/* The Transforming Image Container */}
                <div 
                    className="relative transition-all duration-1000 ease-[cubic-bezier(0.83,0,0.17,1)] overflow-hidden border border-white/10 shadow-2xl"
                    style={{
                        width: isFullFrame ? '300px' : '200px',
                        height: isFullFrame ? '533px' : '200px', // 9:16 vs 1:1 roughly
                        borderRadius: isFullFrame ? '4px' : '50%',
                    }}
                >
                     <img 
                        src="https://picsum.photos/600/1000?grayscale&random=50" 
                        alt="Full Frame vs Crop" 
                        className="absolute w-[300px] h-[533px] max-w-none object-cover grayscale transition-all duration-1000 ease-[cubic-bezier(0.83,0,0.17,1)]"
                        style={{
                            // Keep image centered during container resize
                            left: isFullFrame ? '0' : '-50px', 
                            top: isFullFrame ? '0' : '-80px',
                            filter: isFullFrame ? 'grayscale(0%)' : 'grayscale(100%)',
                        }}
                    />

                    {/* Overlay Grid lines for PFP mode */}
                    <div 
                        className={`absolute inset-0 border border-accent/50 rounded-full transition-opacity duration-500 ${isFullFrame ? 'opacity-0' : 'opacity-100'}`}
                        style={{ transform: 'scale(0.95)' }}
                    ></div>
                </div>

                {/* State Labels */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8">
                     <span className={`font-mono text-xs transition-colors duration-500 ${!isFullFrame ? 'text-accent font-bold' : 'text-foreground/20'}`}>
                        PFP_CROP
                     </span>
                     <span className={`font-mono text-xs transition-colors duration-500 ${isFullFrame ? 'text-accent font-bold' : 'text-foreground/20'}`}>
                        FULL_FRAME
                     </span>
                </div>

            </div>

        </div>
    </section>
  );
};
