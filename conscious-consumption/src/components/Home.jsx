import '../styles/Home.css'
function Home(){
    var quote= "Amateurs sit and wait for inspiration, the rest of us just get up and go to work."
    var author="Stephen king"
    return(
        <>
        <div className="quote">
            <h2>{quote}</h2>
            <h3>–{author}</h3>
        </div>

        <div className="addbtn">
            <h2>Add a Journal</h2>
            <button>+</button>
        </div>

        <div className="myjour">
            <h2>My Journals</h2>
        </div>
        </>
    )
}
export default Home