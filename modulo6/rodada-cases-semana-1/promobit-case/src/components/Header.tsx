export const Header: React.FC = () => {
    return (
        <header className="border-transparent bg-light_purple flex items-center w-screen p-2">

            <div className="relative left-20 flex items-center">
                <p className="text-white text-xl font-bold tracking-widest">TMDB</p>

                <div className="bg-white h-1 rounded-full p-2 w-12 ml-1" />
            </div>
            
        </header>
    );
};