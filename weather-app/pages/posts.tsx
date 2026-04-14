import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Posts(){
    const posts = [
        {
            id: 1,
            title: "The Effects of Climate Change",
            description: "The effects of human-caused global warming are happening now, are irreversible for people alive today, and will worsen as long as humans add greenhouse gases to the atmosphere. ",
            url: "https://science.nasa.gov/climate-change/effects/",
            image: "https://assets.science.nasa.gov/dynamicimage/assets/science/esd/climate/internal_resources/2710/Effects_page_triptych.jpeg?w=2963&h=1459&fit=clip&crop=faces%2Cfocalpoint"
        },
        {
            id: 2,
            title: "How Weather Impacts People's Mental Health",
            description: "Weather is an integral part of our lives, shaping our daily routines, activities, and even our moods. While it's common to hear people discuss how they feel on a sunny day versus a rainy one, the relationship between weather and mental health is a topic that deserves more attention",
            url: "https://www.counselling-directory.org.uk/articles/how-weather-impacts-peoples-mental-health",
            image: "https://cdn.memiah.co.uk/uploads/counselling-directory.org.uk/image_gallery/weather-1693905944-hero.jpg"
        },
        {
            id: 3,
            title: "How to Stay Safe During Heat Waves",
            description: "Even in places where heat is recognized as a dangerous health threat, people can be caught off guard as the thermometer creeps higher, on average, each year.",
            url: "https://theconversation.com/how-to-stay-safe-during-heat-waves-and-heat-stroke-warning-signs-to-watch-for-257708",
            image: "https://images.theconversation.com/files/673482/original/file-20250610-56-5xxi9q.png?ixlib=rb-4.1.0&q=45&auto=format&w=1000&fit=clip"
        }
    ]
    return(
        <div className="layout">
            <Navbar />
            <main>
                <h1>Articles</h1>
                <div className="posts-container">
                    {posts.map(post => (
                    <a
                        key={post.id}
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card"
                    >
                    <img src={post.image} alt={post.title}/>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    </a>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}