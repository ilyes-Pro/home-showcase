import { createContext, useContext, useState, useRef, useEffect } from "react";

const ScrollContext = createContext();

export default function CatemProvider({ children }) {
    const [page, setPage] = useState("");

    const refs = {
        main: useRef(null),
        about: useRef(null),
        projects: useRef(null),
        testimonials: useRef(null),
        contact: useRef(null)
    };

    useEffect(() => {
        if (page) {
            scrollToSection(page);
        }
    }, [page]);

    function scrollToSection(name) {
        const element = refs[name]?.current;
        if (!element) return;

        const m = element.offsetTop;

        window.scrollTo({
            top: m,
            behavior: "smooth",
        });
        setPage("")
    }

    return (
        <ScrollContext.Provider value={{ page, setPage, refs }}>
            {children}
        </ScrollContext.Provider>
    );
}

// Hook للاستخدام السهل في باقي المكونات
export const usePage = () => useContext(ScrollContext);
