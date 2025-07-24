import styles from "./Body.module.css"
import Bodybox from "./Bodybox";
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";


async function fetchCategories(){
    try{
        let { data: categories, error } = await supabase
        .from('categories')
        .select("id, name, emoji, places (id, name, href)");

    if (error) {
        console.error('There is an error', error);
        return [];
    }

    return categories;
    
    } catch (error) {
        console.error('There is an error', error)
        return[];
    }
}

export default function Body() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories().then(data => {
            setCategories(data);
        });
    }, []);

    return (
        <>
            <div className={styles.mainbodydiv}>
                <Bodybox categories={categories} />

            </div>
            <div className={styles.footerDiv}>
                <p>
                    Have more places in mind? Share them <a target="_blank" href="https://forms.gle/iUuG68RW9pJ4Wbz67" target="_blank" rel="noopener noreferrer">here</a>!
                </p>
                <p>
                    Made by <a href="https://x.com/dhrm1k" target="_blank" rel="noopener noreferrer">@dhrm1k</a>
                </p>
            </div>
        </>
    );
}
