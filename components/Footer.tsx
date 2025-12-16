import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-8 border-b border-foreground/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <h3 className="font-display text-2xl font-bold uppercase mb-2">PfpFor.Me</h3>
                <p className="font-mono text-xs text-foreground/40">
                    © 2024 ANTI-AI LABS INC. <br/>
                    DESIGNED FOR IMPERFECTION.
                </p>
            </div>
            
            <div className="flex gap-8 font-mono text-xs text-foreground/60">
                <a href="#" className="hover:text-accent uppercase">Privacy</a>
                <a href="#" className="hover:text-accent uppercase">Terms</a>
                <a href="#" className="hover:text-accent uppercase">Twitter</a>
            </div>
        </div>
    </footer>
  );
};
