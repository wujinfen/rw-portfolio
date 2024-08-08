"use client"

export default function EmailButton({ email }) {
    return (
        <button 
            className="flex justify-center items-center p-2 bg-stone-300 rounded-lg shadow-md w-44 h-12 transition duration-300 ease-in-out hover:text-white"
        >
            <div className="transform transition-transform translate-y-0 opacity-100">
                contact me
            </div>
            <div className="transform transition-transform translate-y-0 opacity-100">
                {email}
            </div>
        </button>
    );
}